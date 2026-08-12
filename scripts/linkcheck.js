/* Static link + asset QA (P0-02, P3-09).
   Scans .html AND .js sources, because most MOOREZY links are generated at runtime.
   Usage: node scripts/linkcheck.js [rootDir]   (default: repo root) */

const fs=require('fs');
const path=require('path');

const root=path.resolve(process.argv[2]||path.join(__dirname,'..'));
const files=fs.readdirSync(root).filter(f=>/\.(html|js)$/.test(f));

const HREF=/(?:href|src)\s*=\s*["']([^"'`${}]+)["']/g;
/* Nav and card links are held as bare string literals in JS data (e.g. ['attendance.html','Attendance']),
   so href= alone under-reports. Catch quoted *.html literals too. */
const JSPAGE=/["']([A-Za-z0-9._/-]+\.html)(?:#[A-Za-z0-9_-]+)?["']/g;
const problems=[];
const external=new Set();
const localTargets=new Map();   // target -> [sources]
const anchors=new Map();        // file -> Set(ids)

/* Collect ids that exist anywhere (static html + generated markup in js). */
for(const f of files){
  const text=fs.readFileSync(path.join(root,f),'utf8');
  const ids=new Set();
  for(const m of text.matchAll(/\bid\s*=\s*["']([^"'`${}]+)["']/g))ids.add(m[1]);
  anchors.set(f,ids);
}
const allIds=new Set([...anchors.values()].flatMap(s=>[...s]));

for(const f of files){
  const text=fs.readFileSync(path.join(root,f),'utf8');
  for(const m of text.matchAll(HREF)){
    const raw=m[1].trim();
    if(!raw||raw.startsWith('data:')||raw.startsWith('mailto:')||raw.startsWith('tel:'))continue;
    if(/^https?:\/\//.test(raw)){external.add(`${raw}  ← ${f}`);continue;}
    if(raw.startsWith('#')){
      const id=raw.slice(1);
      if(id&&!allIds.has(id))problems.push(`DEAD ANCHOR  ${raw}  in ${f}`);
      continue;
    }
    const [p,hash]=raw.split('#');
    if(!p)continue;
    const clean=p.split('?')[0];
    const abs=path.join(root,clean);
    if(!localTargets.has(clean))localTargets.set(clean,[]);
    localTargets.get(clean).push(f);
    if(!fs.existsSync(abs))problems.push(`MISSING FILE  ${clean}  ← ${f}`);
    else if(hash&&!allIds.has(hash))problems.push(`DEAD ANCHOR  ${clean}#${hash}  ← ${f}`);
  }
  if(f.endsWith('.js')){
    for(const m of text.matchAll(JSPAGE)){
      const target=m[1];
      if(!localTargets.has(target))localTargets.set(target,[]);
      localTargets.get(target).push(f);
      if(!fs.existsSync(path.join(root,target)))problems.push(`MISSING FILE  ${target}  ← ${f}`);
    }
  }
}

/* CSS url() assets (P3-09). These are invisible to the html/js scan above, so a mistyped
   background-image path would ship silently. */
const CSSURL=/url\(\s*['"]?([^'")]+)['"]?\s*\)/g;
for(const f of fs.readdirSync(root).filter(x=>x.endsWith('.css'))){
  const text=fs.readFileSync(path.join(root,f),'utf8');
  for(const m of text.matchAll(CSSURL)){
    const raw=m[1].trim();
    if(!raw||/^(data:|https?:|#)/.test(raw))continue;
    const clean=raw.split('?')[0];
    if(!localTargets.has(clean))localTargets.set(clean,[]);
    localTargets.get(clean).push(f);
    if(!fs.existsSync(path.join(root,clean)))problems.push(`MISSING ASSET  ${clean}  ← ${f}`);
  }
}

/* Render coverage (P0-02 "no blank page"): every data-page key must have a renderer,
   and every page with an empty #page-content must load a script that fills it. */
const featureKeys=new Set([...fs.readFileSync(path.join(root,'feature-data.js'),'utf8')
  .matchAll(/^'([a-z-]+)':\{/gm)].map(m=>m[1]));
const pagesKeys=new Set([...fs.readFileSync(path.join(root,'pages.js'),'utf8')
  .matchAll(/^([a-z0-9]+):\{eyebrow/gm)].map(m=>m[1]));
const specialKeys=new Set(['pricing','testimonials','contact','blogs','features','how-it-works','home','faq']);
for(const f of files.filter(x=>x.endsWith('.html'))){
  const text=fs.readFileSync(path.join(root,f),'utf8');
  const dp=text.match(/data-page="([^"]+)"/);
  if(!/id="page-content"/.test(text))continue;      // login/signup are static
  if(!dp){problems.push(`NO data-page  ${f} has #page-content but no data-page key`);continue;}
  const key=dp[1];
  if(!featureKeys.has(key)&&!pagesKeys.has(key)&&!specialKeys.has(key))
    problems.push(`NO RENDERER  ${f} data-page="${key}" is not handled by any script → blank page`);
}

/* Orphan check: pages nothing links to. */
const htmlFiles=files.filter(f=>f.endsWith('.html'));
const linked=new Set([...localTargets.keys()]);
/* Intentionally unreachable pages — kept on disk but deliberately not linked. */
const INTENTIONAL_ORPHANS=new Set(['testimonials.html']);
const orphans=htmlFiles.filter(f=>!linked.has(f)&&f!=='index.html'&&!INTENTIONAL_ORPHANS.has(f));

console.log(`Scanned ${files.length} source files, ${htmlFiles.length} pages.`);
console.log(`Distinct local targets: ${localTargets.size}`);
console.log(`External links: ${external.size}`);
for(const e of [...external].sort())console.log('  ext  '+e);
if(orphans.length){console.log(`\nOrphan pages (nothing links to them): ${orphans.join(', ')}`);}
if(problems.length){
  console.log(`\n${problems.length} PROBLEM(S):`);
  for(const p of [...new Set(problems)].sort())console.log('  '+p);
  process.exit(1);
}
console.log('\nNo broken links or missing assets.');
