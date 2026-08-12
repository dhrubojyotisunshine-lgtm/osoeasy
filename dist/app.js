/* Homepage behaviour. Nav, dropdowns, reveal and back-to-top live in components.js. */

/* P0-04: render the canonical laundry workflow (defined in overview.js). */
const flowHost=document.querySelector('#home-flow');
if(flowHost&&window.renderFlow&&window.mainFlow)flowHost.innerHTML=window.renderFlow(window.mainFlow,true);

/* Solution tabs — keyboard accessible (P3-10). */
const tabs=[...document.querySelectorAll('.tab')];
const selectTab=tab=>{
  tabs.forEach(t=>{
    const on=t===tab;
    t.classList.toggle('active',on);
    t.setAttribute('aria-selected',String(on));
    t.tabIndex=on?0:-1;
  });
  document.querySelectorAll('.tab-panel').forEach(panel=>{panel.hidden=panel.id!==tab.dataset.tab});
};
tabs.forEach((tab,i)=>{
  tab.tabIndex=tab.classList.contains('active')?0:-1;
  tab.addEventListener('click',()=>selectTab(tab));
  tab.addEventListener('keydown',event=>{
    const dir=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:0;
    if(!dir)return;
    event.preventDefault();
    const next=tabs[(i+dir+tabs.length)%tabs.length];
    selectTab(next);next.focus();
  });
});

window.initReveal?.();
