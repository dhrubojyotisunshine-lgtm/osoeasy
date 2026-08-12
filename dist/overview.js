/* Hub pages: features.html (platform overview) and how-it-works.html (complete laundry workflow).
   Shares the canonical flow definition used on the homepage. */

const mainFlow=[
  ['Customer','A walk-in, an app booking or a corporate account — every order starts on one record.'],
  ['Order','Garments, services, condition notes and due date are captured at the counter or in the app.'],
  ['Pickup','Doorstep collection is assigned to a driver and confirmed at the door.'],
  ['Garment tag','Each item gets a scannable tag so it can be identified through every stage.'],
  ['Processing','Work moves through the store or plant — sorting, cleaning, finishing.'],
  ['Ready','The order is reassembled by scan and marked ready for handover.'],
  ['Delivery','The finished order goes back to the counter or out on a delivery route.'],
  ['Payment','Collected at the counter, at the door, or online before it arrives.'],
  ['Feedback','The customer’s rating and any complaint stay on their record.']
];

const plantFlow=[
  ['Store','Garments are handed over as an identified lot.'],
  ['Plant','The plant confirms what physically arrived.'],
  ['Processing','Cleaning and finishing stages are recorded.'],
  ['Sorting','Items are matched back to their original order by scan.'],
  ['Dispatch','The order returns to the store it came from.']
];

function renderFlow(steps,compact){
  return `<div class="flow${compact?' compact':''}" role="list">${steps.map(([label,note],i)=>
    `<div class="flow-step" role="listitem"><span class="flow-num">${i+1}</span><b>${label}</b><span>${note}</span></div>`).join('')}</div>`;
}
window.renderFlow=renderFlow;
window.mainFlow=mainFlow;

/* P2-09 — business ecosystem. Shows that every part writes to the same shared record
   rather than being separate tools bolted together.
   The SVG is decorative (aria-hidden); .eco-list carries the same information for screen
   readers, and becomes the visible layout on narrow screens where the diagram is unreadable. */
const ecoNodes=[
  ['Point of Sale','pos.html','Orders, pricing, condition'],
  ['Customer App','customer-app.html','Booking, tracking, payment'],
  ['Driver App','driver-app.html','Stops, pickup, collection'],
  ['Garment Tags','printing-tags.html','Item-level identity'],
  ['Plant','factory-plant.html','Sorting, processing, dispatch'],
  ['Inventory','inventory.html','Chemicals and consumables'],
  ['Payments','online-payments.html','Links, cards, dues'],
  ['CRM','customer-management.html','History, segments, feedback'],
  ['Analytics','reporting-analytics.html','Revenue, cost, performance']
];

function ecosystem(){
  const cx=450, cy=290, rx=336, ry=205, n=ecoNodes.length;
  const pts=ecoNodes.map((_,i)=>{
    const a=(-90+i*(360/n))*Math.PI/180;
    return [cx+rx*Math.cos(a), cy+ry*Math.sin(a)];
  });
  const lines=pts.map(([x,y])=>`<line class="eco-link" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`).join('');
  const boxes=ecoNodes.map(([label,,note],i)=>{
    const [x,y]=pts[i], w=150, h=52;
    return `<g class="eco-node"><rect x="${(x-w/2).toFixed(1)}" y="${(y-h/2).toFixed(1)}" width="${w}" height="${h}" rx="13"/>`+
      `<text class="eco-label" x="${x.toFixed(1)}" y="${(y-3).toFixed(1)}">${label}</text>`+
      `<text class="eco-note" x="${x.toFixed(1)}" y="${(y+13).toFixed(1)}">${note}</text></g>`;
  }).join('');
  return `<div class="eco-wrap">
    <svg class="eco-svg" viewBox="0 0 900 580" aria-hidden="true" focusable="false">
      ${lines}
      <circle class="eco-core" cx="${cx}" cy="${cy}" r="92"/>
      <text class="eco-core-a" x="${cx}" y="${cy-8}">One shared</text>
      <text class="eco-core-a" x="${cx}" y="${cy+16}">record</text>
      <text class="eco-core-b" x="${cx}" y="${cy+40}">customer · order · item</text>
      ${boxes}
    </svg>
    <ul class="eco-list">${ecoNodes.map(([label,href,note])=>
      `<li><a href="${href}"><b>${label}</b><span>${note}</span></a></li>`).join('')}</ul>
  </div>`;
}
window.ecosystem=ecosystem;

const groups=[
  ['Counter & orders','Everything that happens while the customer is in front of you.',[
    ['pos.html','Point of Sale','Fast, laundry-specific order capture with correct pricing.'],
    ['printing-tags.html','Printing & Garment Tags','Barcode tags, receipts, invoices and production slips.'],
    ['packages-plans.html','Packages & Plans','Prepaid plans that steady cash flow and build loyalty.'],
    ['online-payments.html','Online Payments','Links, cards, UPI, part payments and outstanding tracking.']]],
  ['Delivery & apps','Reaching customers beyond the storefront.',[
    ['pickup-delivery.html','Pickup & Delivery','Slots, territories, routes and doorstep confirmation.'],
    ['customer-app.html','Customer App & Portal','Booking, tracking, invoices and payment, self-service.'],
    ['driver-app.html','Driver App','One screen for the day’s stops, addresses and collections.']]],
  ['Operations','Running the stores, the plant and the people.',[
    ['store-management.html','Store Management','Catalogue, pricing, daily totals and cash reconciliation.'],
    ['multi-store-support.html','Multi-Store Support','Shared customers and consolidated reporting across sites.'],
    ['factory-plant.html','Factory & Plant','Lot tracking from store to sorting to dispatch.'],
    ['staff-management.html','Staff Management','Individual accounts, roles and permissions.'],
    ['attendance.html','Attendance','Clock in and out, overtime and leave records.'],
    ['expense-management.html','Expense Management','Categorised, approved and reported operating costs.'],
    ['inventory.html','Inventory','Chemicals, consumables, low-stock alerts and transfers.']]],
  ['Customers & growth','Turning orders into relationships.',[
    ['customer-management.html','Customer Management','Profiles, history, balances, feedback and segments.'],
    ['loyalty-referrals.html','Loyalty & Referrals','Points, redemption, referral tracking and win-back.'],
    ['notifications-marketing.html','Notifications & Marketing','Automated updates, reminders and campaigns.'],
    ['ecommerce.html','Online Store','A branded storefront that takes bookings around the clock.']]],
  ['Insight & platform','Understanding the business and connecting it.',[
    ['reporting-analytics.html','Reporting & Analytics','Live dashboards for revenue, orders, costs and staff.'],
    ['integrations-support.html','Integrations & Support','Payments, messaging, printers, exports and onboarding.'],
    ['setup-migration.html','Setup & Migration','Imports, configuration, training and a supported go-live.']]]
];

const ctaBlock=`<section class="sub-cta"><div class="container"><h2>Ready to run a better laundry business?</h2><p>Explore MOOREZY free for 14 days. No credit card required.</p><div class="cta-actions"><a class="btn btn-white btn-large" href="signup.html">Start free trial →</a><a class="btn btn-outline-light btn-large" href="contact.html">Talk to sales</a></div></div></section>`;

const page=document.body.dataset.page;
const host=document.querySelector('#page-content');

if(host&&page==='features'){
  host.innerHTML=`
  <section class="prod-hero">
    <div class="container prod-hero-grid">
      <div>
        <span class="kicker">COMPLETE LAUNDRY PLATFORM</span>
        <h1>Every feature works better together</h1>
        <p class="lead">From the first customer interaction to the final delivery and financial report, one connected platform keeps your whole operation moving. Every module below has its own page — with the workflow, the screens and what it changes for your business.</p>
        <div class="hero-actions"><a class="btn btn-primary btn-large" href="signup.html">Start free →</a><a class="btn btn-ghost btn-large" href="how-it-works.html">See the full workflow</a></div>
      </div>
      <div class="prod-hero-visual reveal">${(typeof mockups!=='undefined'&&mockups.dashboard)?mockups.dashboard():''}</div>
    </div>
  </section>

  <section class="prod-section tint">
    <div class="container">
      <div class="prod-head centered"><span class="kicker">END TO END</span><h2>One order, all the way through</h2><p>Every stage below is recorded in the same system, so nothing is handed over on paper.</p></div>
      ${renderFlow(mainFlow,true)}
    </div>
  </section>

  ${groups.map(([title,note,items])=>`
  <section class="prod-section">
    <div class="container">
      <div class="prod-head"><span class="kicker">${title.toUpperCase()}</span><h2>${title}</h2><p>${note}</p></div>
      <div class="cap-grid">${items.map(([href,name,desc])=>
        `<a class="cap reveal" href="${href}"><span class="cap-mark">✦</span><b>${name}</b><p>${desc}</p><strong class="cap-link">Explore →</strong></a>`).join('')}</div>
    </div>
  </section>`).join('')}

  ${ctaBlock}`;
  window.initReveal?.(host);
}

if(host&&page==='how-it-works'){
  host.innerHTML=`
  <section class="prod-hero">
    <div class="container">
      <div class="prod-head centered" style="margin-bottom:0">
        <span class="kicker">HOW MOOREZY WORKS</span>
        <h1>The complete laundry workflow</h1>
        <p class="lead" style="margin-inline:auto">Follow one order from the moment a customer books it to the moment they pay and rate it — and see which part of MOOREZY handles each step.</p>
      </div>
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <div class="prod-head"><span class="kicker">THE MAIN FLOW</span><h2>Customer to feedback</h2><p>Nine stages, one record. Each stage updates the order, the customer and your reporting at the same time.</p></div>
      ${renderFlow(mainFlow)}
    </div>
  </section>

  <section class="prod-section tint">
    <div class="container">
      <div class="prod-head"><span class="kicker">WHEN YOU RUN A PLANT</span><h2>Store to dispatch</h2><p>If several stores feed one processing plant, garments move as tracked lots and return to the store they came from.</p></div>
      ${renderFlow(plantFlow)}
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <div class="prod-head centered"><span class="kicker">IN THE PRODUCT</span><h2>What the customer sees</h2><p>The booking, scheduling, payment and tracking journey in the MOOREZY customer app.</p></div>
      <div class="shot-row">${[['home','Browse services'],['product-select','Choose garments'],['pickup-schedule','Pick a slot'],['payment-methods','Pay'],['track-order','Track the order'],['invoice','Get the invoice']].map(([f,c])=>
        `<figure class="shot"><div class="shot-frame"><img src="assets/screens/${f}.webp" alt="MOOREZY app screen — ${c}" loading="lazy" decoding="async" width="560" height="1212"></div><figcaption>${c}</figcaption></figure>`).join('')}</div>
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <div class="prod-head centered"><span class="kicker">HOW IT FITS TOGETHER</span><h2>One record, not nine tools</h2><p>Every part of MOOREZY writes to the same customer, order and item record. That is the difference between a platform and a folder full of separate apps.</p></div>
      ${ecosystem()}
      <p class="eco-hint">Each area above links to its full detail.</p>
    </div>
  </section>

  <section class="prod-section tint">
    <div class="container">
      <div class="prod-head"><span class="kicker">THE SAME ORDER, FOUR VIEWS</span><h2>Everyone sees what they need</h2></div>
      <div class="role-grid">
        <article class="role reveal"><i>CS</i><b>Counter staff</b><p>Take the order, capture condition, print tags and collect payment.</p></article>
        <article class="role reveal"><i>DR</i><b>Driver</b><p>See today’s stops in order, confirm pickup and collect at the door.</p></article>
        <article class="role reveal"><i>CU</i><b>Customer</b><p>Book a slot, watch the status change and pay from the app.</p></article>
        <article class="role reveal"><i>OW</i><b>Owner</b><p>See the revenue, the costs and the bottlenecks without being on site.</p></article>
      </div>
      <div class="related" style="margin-top:28px">
        <a href="pos.html">Point of Sale →</a><a href="driver-app.html">Driver App →</a><a href="customer-app.html">Customer App →</a><a href="reporting-analytics.html">Reporting →</a>
      </div>
    </div>
  </section>

  ${ctaBlock}`;
  window.initReveal?.(host);
}
