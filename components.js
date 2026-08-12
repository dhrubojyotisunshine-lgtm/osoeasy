/* Single source of truth for site chrome (header + footer) and shared nav behaviour.
   Every page loads this first; app.js / pages.js / feature-page.js add page-specific work only. */

const solutionLinks=[
  ['why-moorezy.html','Why MOOREZY?','The complete platform'],
  ['single-store.html','Single Store'],
  ['multi-store.html','Multi Store'],
  ['new-business.html','New Business'],
  ['factory-plant.html','Factory / Plant'],
  ['franchise.html','Franchise'],
  ['aggregator.html','Aggregator'],
  ['b2b.html','B2B & Corporate']
];

const featureGroups=[
  ['Counter & orders',[['pos.html','Point of Sale'],['printing-tags.html','Printing & Garment Tags'],['packages-plans.html','Packages & Plans'],['online-payments.html','Online Payments']]],
  ['Delivery & apps',[['pickup-delivery.html','Pickup & Delivery'],['customer-app.html','Customer App & Portal'],['driver-app.html','Driver App']]],
  ['Operations',[['store-management.html','Store Management'],['multi-store-support.html','Multi-Store Support'],['staff-management.html','Staff Management'],['attendance.html','Attendance'],['expense-management.html','Expense Management'],['inventory.html','Inventory']]],
  ['Customers & growth',[['customer-management.html','Customer Management'],['loyalty-referrals.html','Loyalty & Referrals'],['notifications-marketing.html','Notifications & Marketing'],['ecommerce.html','Online Store']]],
  ['Insight & platform',[['reporting-analytics.html','Reporting & Analytics'],['integrations-support.html','Integrations & Support'],['setup-migration.html','Setup & Migration']]]
];

const featureMenu=`<div class="dropdown-menu mega feature-menu">
  <a class="mega-lead" href="features.html"><b>All features</b><small>See how every module connects</small></a>
  <div class="mega-groups">${featureGroups.map(([title,links])=>`<div class="mega-group"><span class="mega-group-title">${title}</span>${links.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}</div>`).join('')}</div>
</div>`;

const solutionMenu=`<div class="dropdown-menu solution-menu">${solutionLinks.map(([href,label,note])=>note?`<a class="mega-lead" href="${href}"><b>${label}</b><small>${note}</small></a>`:`<a href="${href}">${label}</a>`).join('')}</div>`;

const navMarkup=`<div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="MOOREZY home"><img class="brand-logo" src="assets/moorezy-logo.png?v=20260810b" alt="MOOREZY" width="1536" height="1024"></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-item dropdown"><button class="nav-link dropdown-toggle" aria-expanded="false">Solutions <span aria-hidden="true">⌄</span></button>${solutionMenu}</div>
      <div class="nav-item dropdown"><button class="nav-link dropdown-toggle" aria-expanded="false">Features <span aria-hidden="true">⌄</span></button>${featureMenu}</div>
      <a class="nav-link" href="how-it-works.html">How it works</a>
      <a class="nav-link" href="pricing.html">Pricing</a>
      <!-- UNLINKED (P2-02) — testimonials.html contains unverified customer names and is
           intentionally not reachable from the site. Page file is kept as-is. Restore this
           link once the testimonials are confirmed real and approved. See CHANGES.md.
      <a class="nav-link" href="testimonials.html">Customers</a>
      -->
      <a class="nav-link" href="blogs.html">Blogs</a>
      <a class="nav-link" href="contact.html">Contact</a>
      <!-- P3-06: the desktop .nav-actions block is hidden below 1050px, which removed both
           CTAs on mobile. This copy is shown only inside the open mobile panel. -->
      <div class="nav-actions-mobile"><a class="btn btn-ghost" href="login.html">Log in</a><a class="btn btn-primary" href="signup.html">Start free</a></div>
    </nav>
    <div class="nav-actions"><a class="btn btn-ghost" href="login.html">Log in</a><a class="btn btn-primary" href="signup.html">Start free</a></div>
  </div>`;

const footerMarkup=`<div class="container footer-grid">
  <div class="footer-brand">
    <a class="brand brand-light" href="index.html"><img class="brand-logo" src="assets/moorezy-logo.png?v=20260810b" alt="MOOREZY" width="1536" height="1024"></a>
    <p>The operating system for modern laundry and dry-cleaning businesses.</p>
    <div class="socials"><a href="https://www.linkedin.com/" aria-label="MOOREZY on LinkedIn" rel="noopener">in</a><a href="https://www.facebook.com/" aria-label="MOOREZY on Facebook" rel="noopener">f</a><a href="https://www.instagram.com/" aria-label="MOOREZY on Instagram" rel="noopener">◎</a></div>
  </div>
  <div><h3>Solutions</h3><a href="single-store.html">Single Store</a><a href="multi-store.html">Multi Store</a><a href="new-business.html">New Business</a><a href="factory-plant.html">Factory / Plant</a><a href="franchise.html">Franchise</a><a href="aggregator.html">Aggregator</a><a href="b2b.html">B2B & Corporate</a></div>
  <div><h3>Platform</h3><a href="features.html">All features</a><a href="pos.html">Point of Sale</a><a href="pickup-delivery.html">Pickup & Delivery</a><a href="printing-tags.html">Printing & Tags</a><a href="customer-app.html">Customer App</a><a href="reporting-analytics.html">Reporting</a></div>
  <div><h3>Company</h3><a href="why-moorezy.html">Why MOOREZY</a><a href="how-it-works.html">How it works</a><a href="pricing.html">Pricing</a><a href="faq.html">FAQ</a><!-- UNLINKED (P2-02): <a href="testimonials.html">Customers</a> --><a href="blogs.html">Blogs</a><a href="contact.html">Contact</a></div>
  <div><h3>Get started</h3><p>Explore every feature free for 14 days.</p><a class="btn btn-primary" href="signup.html">Start free trial →</a>
    <form class="newsletter" id="newsletter" novalidate><label class="sr-only" for="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Email address" required autocomplete="email"><button type="submit" aria-label="Subscribe to updates">→</button></form>
    <span class="form-message" role="status"></span>
  </div>
</div>
<div class="container footer-bottom"><span>© 2026 MOOREZY. All rights reserved.</span><div><a href="privacy-policy.html">Privacy</a><a href="terms-and-conditions.html">Terms</a></div></div>`;

class SiteHeader extends HTMLElement{
  connectedCallback(){this.innerHTML=`<header class="site-header" id="top">${navMarkup}</header>`}
}
class SiteFooter extends HTMLElement{
  connectedCallback(){this.innerHTML=`<footer id="site-footer">${footerMarkup}</footer>`}
}
customElements.define('site-header',SiteHeader);
customElements.define('site-footer',SiteFooter);

/* ---- shared chrome behaviour (runs once, tolerant of missing elements) ---- */
const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');

const closeDropdowns=()=>document.querySelectorAll('.dropdown.open').forEach(item=>{
  item.classList.remove('open');
  item.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded','false');
});
const closeMenu=()=>{
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
  document.body.classList.remove('nav-open');
};

menuButton?.addEventListener('click',event=>{
  event.stopPropagation();
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('nav-open',open);
  if(!open)closeDropdowns();
});

document.querySelectorAll('.dropdown-toggle').forEach(button=>button.addEventListener('click',event=>{
  event.stopPropagation();
  const parent=button.parentElement;
  const willOpen=!parent.classList.contains('open');
  closeDropdowns();
  parent.classList.toggle('open',willOpen);
  button.setAttribute('aria-expanded',String(willOpen));
}));

document.addEventListener('click',event=>{
  if(!event.target.closest('.site-nav'))closeMenu();
  closeDropdowns();
});
document.querySelectorAll('.site-nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{
  if(event.key!=='Escape')return;
  closeMenu();closeDropdowns();
  menuButton?.focus();
});

/* Mark the current page in the nav (P3-06 active states). */
const here=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.site-nav a').forEach(link=>{
  if(link.getAttribute('href')===here){
    link.classList.add('is-current');
    link.setAttribute('aria-current','page');
    link.closest('.dropdown')?.querySelector('.dropdown-toggle')?.classList.add('is-current');
  }
});

const backTop=document.querySelector('.back-top');
if(header||backTop){
  const onScroll=()=>{
    header?.classList.toggle('scrolled',scrollY>20);
    backTop?.classList.toggle('show',scrollY>650);
  };
  addEventListener('scroll',onScroll,{passive:true});
  onScroll();
}

/* Newsletter (P3-07). Front-end only until a subscription backend is connected. */
document.querySelector('#newsletter')?.addEventListener('submit',event=>{
  event.preventDefault();
  const form=event.currentTarget;
  const message=form.parentElement.querySelector('.form-message');
  if(!form.reportValidity())return;
  message.textContent='Thanks — we’ll be in touch.';
  form.reset();
});

/* Reveal-on-scroll, shared by every page. Falls back to visible if unsupported. */
function initReveal(root=document){
  const targets=root.querySelectorAll('.reveal:not(.visible)');
  if(!('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('visible'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  targets.forEach(el=>observer.observe(el));
}
window.initReveal=initReveal;
initReveal();
