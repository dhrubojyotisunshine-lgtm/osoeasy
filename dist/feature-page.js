/* Renders a deep product page from featureData + featureShots + mockups.
   Load order: components.js → ui-mockups.js → feature-data.js → feature-page.js */

(function(){
  const key=document.body.dataset.page;
  const mount=document.querySelector('#page-content');
  const data=typeof featureData!=='undefined'?featureData[key]:null;
  if(!mount||!data)return;

  const shots=(typeof featureShots!=='undefined'&&featureShots[key])||[];
  const visual=(typeof mockups!=='undefined'&&mockups[data.mockup])?mockups[data.mockup]():'';

  const flow=w=>`<div class="flow${w.steps.length>5?' compact':''}" role="list">${w.steps.map(([label,note],i)=>
    `<div class="flow-step" role="listitem"><span class="flow-num">${i+1}</span><b>${label}</b><span>${note}</span></div>`).join('')}</div>`;

  const shotRow=list=>`<div class="shot-row">${list.map(([file,caption])=>
    `<figure class="shot"><div class="shot-frame"><img src="assets/screens/${file}.webp" alt="MOOREZY app screen — ${caption}" loading="lazy" decoding="async" width="560" height="1212"></div><figcaption>${caption}</figcaption></figure>`).join('')}</div>`;

  const cta=()=>`<section class="sub-cta"><div class="container"><h2>See it working on your own operation</h2><p>Explore MOOREZY free for 14 days, or ask us to walk you through it.</p><div class="cta-actions"><a class="btn btn-white btn-large" href="signup.html">Start free trial →</a><a class="btn btn-outline-light btn-large" href="contact.html">Talk to sales</a></div></div></section>`;

  mount.innerHTML=`
  <section class="prod-hero">
    <div class="container prod-hero-grid">
      <div>
        <span class="kicker">${data.eyebrow}</span>
        <h1>${data.title}</h1>
        <p class="lead">${data.intro}</p>
        <div class="hero-actions"><a class="btn btn-primary btn-large" href="signup.html">Start free →</a><a class="btn btn-ghost btn-large" href="contact.html">Book a walkthrough</a></div>
      </div>
      <div class="prod-hero-visual reveal">${visual}</div>
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <div class="ps-grid">
        <div class="ps-card problem reveal"><h2><i>!</i>${data.problem.title}</h2><ul>${data.problem.points.map(p=>`<li>${p}</li>`).join('')}</ul></div>
        <div class="ps-card solution reveal"><h2><i>✓</i>${data.solution.title}</h2><ul>${data.solution.points.map(p=>`<li>${p}</li>`).join('')}</ul></div>
      </div>
    </div>
  </section>

  <section class="prod-section tint">
    <div class="container">
      <div class="prod-head"><span class="kicker">HOW IT WORKS</span><h2>${data.workflow.title}</h2><p>Each step is recorded in MOOREZY, so the next person always knows where the work stands.</p></div>
      ${flow(data.workflow)}
    </div>
  </section>

  ${shots.length?`<section class="prod-section">
    <div class="container">
      <div class="prod-head centered"><span class="kicker">IN THE PRODUCT</span><h2>What this looks like in MOOREZY</h2><p>Screens from the MOOREZY customer experience.</p></div>
      ${shotRow(shots)}
    </div>
  </section>`:''}

  <section class="prod-section${shots.length?' tint':''}">
    <div class="container">
      <div class="prod-head"><span class="kicker">CAPABILITIES</span><h2>What you get</h2></div>
      <div class="cap-grid">${data.capabilities.map(([t,d])=>`<article class="cap reveal"><span class="cap-mark">✦</span><b>${t}</b><p>${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <div class="prod-head"><span class="kicker">WHO USES IT</span><h2>Built around real roles</h2><p>The same order looks different depending on the job you do.</p></div>
      <div class="role-grid">${data.roles.map(([r,d])=>`<article class="role reveal"><i>${r.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase()}</i><b>${r}</b><p>${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="prod-section tint">
    <div class="container">
      <div class="prod-head"><span class="kicker">WHAT IT CHANGES</span><h2>The outcome for your business</h2></div>
      <div class="out-grid">${data.outcomes.map(([t,d])=>`<article class="out reveal"><b>${t}</b><p>${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <div class="prod-head"><span class="kicker">QUESTIONS</span><h2>Before you commit</h2></div>
      <div class="faq-list">${data.faq.map(([q,a])=>`<details class="faq-item"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
      <div class="prod-head" style="margin:44px 0 16px"><h2 style="font-size:22px">Related capabilities</h2></div>
      <div class="related">${data.related.map(([h,l])=>`<a href="${h}">${l} →</a>`).join('')}</div>
    </div>
  </section>

  ${cta()}`;

  if(location.hash)requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:'smooth',block:'start'}));
  window.initReveal?.(mount);
})();
