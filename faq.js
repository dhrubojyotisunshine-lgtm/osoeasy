/* P2-04 — dedicated FAQ covering the real objections named in the correction document:
   setup, migration, printers, mobile/POS, multi-store, driver app, online booking,
   payments, training, support and trial.
   Answers are deliberately specific where the behaviour is structural, and openly defer
   where the answer depends on plan or configuration — see CLAIMS-REVIEW.md. */

const faqGroups=[
  ['Getting started',[
    ['How long does setup actually take?',
     'It depends on how much you are bringing with you. A single store with a simple service list can be configured quickly. Several stores, a plant, or thousands of existing customer records take longer. Tell us your setup and we will give you a realistic timeline rather than a marketing one.'],
    ['Can I try it before committing?',
     'Yes. There is a 14-day free trial and no credit card is required to start. Billing is not connected yet, so nothing can be charged to you during this period.'],
    ['Do I need to be technical?',
     'No. Setup is guided, and training is given per role — your counter staff learn the counter, your drivers learn the driver workflow. Nobody has to learn the whole system.'],
    ['What if I only want part of it?',
     'Start with the counter and payments. Pickup and delivery, tagging, the plant workflow and reporting can be switched on later without redoing your setup.']]],

  ['Moving from another system',[
    ['Can you import our existing data?',
     'Customer, service and price list imports are supported. Send us a sample export of what you hold today and we will confirm exactly what can be brought across before you commit to anything.'],
    ['What happens to our order history?',
     'How much history transfers depends on the format your current system can export. This is worth discussing early — it is usually the deciding factor in how a migration is planned.'],
    ['What if the import is wrong?',
     'You verify imported data before go-live, not after. Problems are caught while they are still easy to fix.'],
    ['Will we lose business during the switch?',
     'Cutover is planned so the counter keeps serving. See <a href="setup-migration.html">Setup &amp; Migration</a> for how a move is sequenced.']]],

  ['Hardware and printing',[
    ['Which printers do you support?',
     'MOOREZY is designed to work with standard label and receipt printers. Send us your specific models and we will confirm compatibility <em>before</em> you buy anything — this is a question worth settling in advance rather than discovering afterwards.'],
    ['Do we need barcode scanners?',
     'Only if you want to tag garments. Tagging is what prevents items being lost between intake and handover, so most businesses adopt it, but you can run without it.'],
    ['Do tags survive washing?',
     'That depends on your process. Heat-seal and specialist laundry tags exist for items going through harsh cycles; simpler labels are fine for lighter work. We will advise based on what you actually process.'],
    ['Can we tag only some items?',
     'Yes. Many businesses tag dry-clean and premium items first and extend tagging once the habit is established.']]],

  ['Devices and the counter',[
    ['Does the POS work on a tablet?',
     'The counter interface is designed for desktop, tablet and mobile screens, so you can use the hardware you already own rather than buying a till system.'],
    ['Does it work offline?',
     'Connectivity requirements depend on your configuration. If your location has unreliable internet, raise it with us early — it genuinely affects how your setup should be built.'],
    ['Can two people take orders at once?',
     'Yes. Each staff member has their own account, so activity is attributed to the person who did it.']]],

  ['Multiple stores and plants',[
    ['Can one account cover several stores?',
     'Yes. Stores share a customer base and catalogue, with consolidated reporting and per-store breakdowns. See <a href="multi-store-support.html">Multi-Store Support</a>.'],
    ['Can prices differ between branches?',
     'Yes. The catalogue is shared but price lists can vary by location.'],
    ['We run a plant that serves several stores. Is that supported?',
     'That is a core case. Garments move between store and plant as tracked lots and return to the store they came from. See <a href="factory-plant.html">Factory &amp; Plant</a>.'],
    ['Can a customer drop at one branch and collect at another?',
     'A shared customer base is designed to support this. Confirm your exact workflow with us, since the practical answer depends on how your branches move garments.']]],

  ['Delivery and the driver app',[
    ['Do drivers need a separate app?',
     'Drivers use a dedicated mobile workflow built for the road — today’s stops in order, the address, what to collect, and confirmation at the door. They do not see the rest of your business.'],
    ['Can drivers take payment at the door?',
     'Doorstep collection is supported and records against the correct order, so cash is accounted for the same day rather than reconciled later.'],
    ['Can we limit which areas we deliver to?',
     'Yes. Territories control where pickup can be booked, so you do not accept work you cannot reach.'],
    ['Can customers book a recurring pickup?',
     'Recurring schedules are supported for regular customers, such as weekly wash and fold.']]],

  ['Online booking and payments',[
    ['Can customers book online?',
     'Yes — through the customer app or your online store, including choosing a pickup slot. See <a href="ecommerce.html">Online Store</a>.'],
    ['Which payment methods are available?',
     'Available methods depend on the payment provider configured for your region. We will confirm precisely what applies to you during setup rather than promising something that is not available where you operate.'],
    ['Can we still take cash?',
     'Yes. Cash remains a first-class payment method at the counter and on delivery.'],
    ['Can a customer pay part now and part later?',
     'Yes. Advances and part payments are recorded against the order, and the balance stays visible as an outstanding due.']]],

  ['Training and support',[
    ['How are our staff trained?',
     'Training is role-based. Counter staff, drivers, plant team and owners are each walked through their own daily workflow rather than the entire system.'],
    ['What support do we get after go-live?',
     'Support channels and response times vary by plan. Ask us what your specific setup would include — we would rather set an accurate expectation than an appealing one.'],
    ['Is there documentation?',
     'Guides and onboarding material are provided as part of setup. See <a href="integrations-support.html">Integrations &amp; Support</a>.'],
    ['What if we need something the system does not do?',
     'Tell us. Some needs are configuration, some are integration, and some genuinely are not supported — you will get a straight answer rather than a maybe.']]]
];

const host=document.querySelector('#page-content');
if(host&&document.body.dataset.page==='faq'){
  const cta=`<section class="sub-cta"><div class="container"><h2>Still have a question?</h2><p>If your question is not answered here, ask us directly — we would rather talk it through than have you guess.</p><div class="cta-actions"><a class="btn btn-white btn-large" href="contact.html">Talk to us →</a><a class="btn btn-outline-light btn-large" href="signup.html">Start free trial</a></div></div></section>`;

  host.innerHTML=`
  <section class="prod-hero">
    <div class="container">
      <div class="prod-head centered" style="margin-bottom:0">
        <span class="kicker">FREQUENTLY ASKED</span>
        <h1>The questions people actually ask</h1>
        <p class="lead" style="margin-inline:auto">Setup, migration, printers, devices, multiple stores, drivers, online booking, payments, training and support. Where the honest answer is "it depends", we say so.</p>
      </div>
    </div>
  </section>

  <section class="prod-section">
    <div class="container">
      <nav class="faq-jump" aria-label="FAQ sections">
        ${faqGroups.map(([title])=>`<a href="#faq-${title.toLowerCase().replace(/[^a-z]+/g,'-')}">${title}</a>`).join('')}
      </nav>
    </div>
  </section>

  ${faqGroups.map(([title,items],gi)=>`
  <section class="prod-section${gi%2?' tint':''}" id="faq-${title.toLowerCase().replace(/[^a-z]+/g,'-')}">
    <div class="container">
      <div class="prod-head"><h2>${title}</h2></div>
      <div class="faq-list">${items.map(([q,a])=>
        `<details class="faq-item"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
    </div>
  </section>`).join('')}

  ${cta}`;

  if(location.hash)requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:'smooth',block:'start'}));
  window.initReveal?.(host);
}
