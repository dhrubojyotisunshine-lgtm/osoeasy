/* Product interface mockups.
   Each entry recreates a specific MOOREZY screen so no two features share a visual (P3-02).
   These are swap-ready: replacing a mockup with a real capture means returning an img tag
   pointing at the screen file instead of the markup below — the surrounding layout is unchanged. */

const win=(title,body,chip='')=>`<div class="ui-win"><div class="ui-bar"><span class="ui-dots"><i></i><i></i><i></i></span><span class="ui-title">${title}</span>${chip?`<span class="ui-chip">${chip}</span>`:''}</div><div class="ui-body">${body}</div></div>`;
const phone=(title,body)=>`<div class="ui-phone"><div class="ui-phone-top"><span></span></div><div class="ui-phone-head">${title}</div><div class="ui-phone-body">${body}</div></div>`;

const bars=(values,labels=[])=>{
  const max=Math.max(...values);
  return `<div class="ui-bars">${values.map((v,i)=>`<span style="--h:${Math.round(v/max*100)}%"><i></i>${labels[i]?`<small>${labels[i]}</small>`:''}</span>`).join('')}</div>`;
};
const spark=values=>{
  const max=Math.max(...values),min=Math.min(...values),span=max-min||1;
  const pts=values.map((v,i)=>`${(i/(values.length-1)*100).toFixed(1)},${(34-(v-min)/span*30).toFixed(1)}`).join(' ');
  return `<svg class="ui-spark" viewBox="0 0 100 38" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}"/></svg>`;
};
const donut=(pct,label)=>`<div class="ui-donut" style="--pct:${pct}"><svg viewBox="0 0 42 42" aria-hidden="true"><circle class="ui-donut-track" cx="21" cy="21" r="16"/><circle class="ui-donut-value" cx="21" cy="21" r="16"/></svg><b>${pct}%</b><small>${label}</small></div>`;
const rows=items=>`<div class="ui-rows">${items.map(([a,b,state])=>`<div class="ui-row"><span>${a}</span><span>${b}</span>${state?`<b class="ui-state ${state[1]}">${state[0]}</b>`:''}</div>`).join('')}</div>`;
const tiles=items=>`<div class="ui-tiles">${items.map(([label,value,trend])=>`<div class="ui-tile"><small>${label}</small><b>${value}</b>${trend?`<span>${trend}</span>`:''}</div>`).join('')}</div>`;

const mockups={
  /* Counter checkout: customer, service selection, live cart, totals, tender. */
  pos:()=>win('Point of Sale — New order',`<div class="ui-pos">
    <div class="ui-pos-left">
      <div class="ui-search">Ritu Sharma · +91 98••• 4410 <b>Regular</b></div>
      <div class="ui-cats"><b>Wash & Fold</b><span>Dry Clean</span><span>Steam Press</span><span>Premium</span></div>
      <div class="ui-grid">${['Shirt','Trouser','Saree','Suit 2pc','Bedsheet','Curtain','Jacket','Tie'].map(s=>`<span>${s}</span>`).join('')}</div>
    </div>
    <div class="ui-pos-right">
      <div class="ui-cart-title">Order cart</div>
      ${rows([['Shirt × 4','₹320'],['Suit 2pc × 1','₹450'],['Saree × 2','₹560']])}
      <div class="ui-total"><span>Subtotal</span><b>₹1,330</b></div>
      <div class="ui-total muted"><span>Express +20%</span><b>₹266</b></div>
      <div class="ui-total muted"><span>GST</span><b>₹287</b></div>
      <div class="ui-total grand"><span>Payable</span><b>₹1,883</b></div>
      <div class="ui-actions"><button class="ui-btn">Cash</button><button class="ui-btn">UPI</button><button class="ui-btn primary">Charge</button></div>
    </div>
  </div>`,'Counter'),

  /* Driver route: map with sequenced stops and the assigned-driver strip. */
  route:()=>win('Delivery — Route planning',`<div class="ui-route">
    <div class="ui-map" role="img" aria-label="Optimised pickup route with five sequenced stops">
      <svg viewBox="0 0 320 170" aria-hidden="true">
        <path class="ui-road" d="M18 140 C70 60,120 150,168 92 S258 42,300 74"/>
        <g class="ui-stops"><circle cx="18" cy="140" r="7"/><circle cx="98" cy="104" r="7"/><circle cx="168" cy="92" r="7"/><circle cx="238" cy="58" r="7"/><circle cx="300" cy="74" r="7"/></g>
      </svg>
      <span class="ui-pin start">Store</span><span class="ui-pin end">Stop 5</span>
    </div>
    <div class="ui-route-side">
      ${tiles([['Stops today','14'],['Route time','2h 40m']])}
      ${rows([['1 · Ritu S.','09:20',['Picked','ok']],['2 · Arjun M.','09:45',['Picked','ok']],['3 · Neha R.','10:10',['En route','warn']],['4 · Karan P.','10:35',['Pending','idle']]])}
      <div class="ui-driver"><i>DK</i><span><b>Deepak K.</b><small>Van · MH-04 8821</small></span></div>
    </div>
  </div>`,'Live'),

  /* Garment tagging: printed barcode label plus the tag queue. */
  tag:()=>win('Printing — Garment tags',`<div class="ui-tag-wrap">
    <div class="ui-label">
      <div class="ui-label-head"><b>MOOREZY</b><span>Wash & Fold</span></div>
      <div class="ui-barcode" role="img" aria-label="Garment barcode OSO-24081-03">${Array.from({length:34},(_,i)=>`<i style="--w:${i%4===0?3:i%3===0?2:1}px"></i>`).join('')}</div>
      <div class="ui-label-code">OSO-24081-03</div>
      <div class="ui-label-meta"><span>Ritu Sharma</span><span>Shirt · White</span><span>Due 14 Aug</span></div>
    </div>
    <div class="ui-tag-side">
      <div class="ui-cart-title">Tag queue · Order #OSO-24081</div>
      ${rows([['Shirt · White','01',['Tagged','ok']],['Shirt · Blue','02',['Tagged','ok']],['Suit jacket','03',['Printing','warn']],['Saree · Silk','04',['Queued','idle']]])}
      <div class="ui-printer"><span>▤</span><div><b>Counter printer</b><small>Label 50×25mm · connected</small></div></div>
    </div>
  </div>`,'Barcode'),

  /* Customer-facing order tracking on mobile. */
  customerApp:()=>phone('Your order',`<div class="ui-track-card"><small>Order #OSO-24081</small><b>Out for delivery</b><span>8 garments · ₹1,883</span></div>
    <ol class="ui-track">
      <li class="done"><b>Pickup requested</b><span>Mon, 09:02</span></li>
      <li class="done"><b>Picked up</b><span>Mon, 09:20</span></li>
      <li class="done"><b>In processing</b><span>Mon, 14:10</span></li>
      <li class="done"><b>Ready</b><span>Wed, 11:30</span></li>
      <li class="active"><b>Out for delivery</b><span>Wed, 16:05</span></li>
      <li><b>Delivered</b><span>Expected 18:00</span></li>
    </ol>
    <div class="ui-app-actions"><button class="ui-btn">Reschedule</button><button class="ui-btn primary">Pay ₹1,883</button></div>`),

  /* Driver-facing mobile workflow: today's run, stop detail, collection. */
  driverApp:()=>phone('Today’s route',`<div class="ui-track-card"><small>Wednesday · West route</small><b>14 stops</b><span>6 pickups · 8 deliveries</span></div>
    <div class="ui-drv-tabs"><b>Pickups</b><span>Deliveries</span></div>
    ${rows([['1 · Ritu S. · Andheri','09:20',['Done','ok']],['2 · Arjun M. · Versova','09:45',['Done','ok']],['3 · Neha R. · Juhu','10:10',['Next','warn']],['4 · Karan P. · Bandra','10:35',['Pending','idle']]])}
    <div class="ui-drv-stop">
      <b>Stop 3 · Neha R.</b>
      <small>Flat 902, Sea Breeze, Juhu</small>
      <div class="ui-drv-actions"><button class="ui-btn">Call</button><button class="ui-btn">Navigate</button></div>
      <div class="ui-drv-collect"><span>Collect on delivery</span><b>₹1,240</b></div>
      <button class="ui-btn primary ui-drv-confirm">Confirm pickup</button>
    </div>`),

  /* Owner analytics dashboard. */
  dashboard:()=>win('Reports — Business overview',`<div class="ui-dash">
    ${tiles([['Revenue (30d)','₹8,42,500','▲ 12.4%'],['Orders','1,284','▲ 6.1%'],['Avg. order','₹656','▲ 2.8%'],['Outstanding','₹41,200','▼ 9.0%']])}
    <div class="ui-dash-split">
      <div class="ui-panel"><div class="ui-panel-head">Revenue by week</div>${bars([48,62,55,74,69,88,81],['W1','W2','W3','W4','W5','W6','W7'])}</div>
      <div class="ui-panel"><div class="ui-panel-head">Service mix</div>${donut(64,'Wash & Fold')}<div class="ui-legend"><span><i class="a"></i>Wash & Fold</span><span><i class="b"></i>Dry clean</span><span><i class="c"></i>Press</span></div></div>
    </div>
  </div>`,'30 days'),

  /* Plant sorting and dispatch board. */
  plant:()=>win('Plant — Processing board',`<div class="ui-lanes">
    ${[['Received','18 lots','a'],['Sorting','12 lots','b'],['Processing','9 lots','c'],['Quality check','6 lots','d'],['Dispatch','7 lots','e']].map(([t,c,k])=>`<div class="ui-lane ${k}"><b class="ui-lane-title">${t}</b><small>${c}</small><div class="ui-lane-cards"><i></i><i></i><i></i></div></div>`).join('')}
  </div>
  <div class="ui-plant-foot">${rows([['Lot PL-3391 · Andheri store','42 garments',['Sorting','warn']],['Lot PL-3392 · Bandra store','28 garments',['Processing','ok']],['Lot PL-3393 · Powai store','35 garments',['Dispatch','ok']]])}</div>`,'Live'),

  /* Staff roles and permissions. */
  staff:()=>win('Team — Roles & permissions',`<div class="ui-staff">
    ${rows([['Priya N. · Counter','Store: Andheri',['Active','ok']],['Deepak K. · Driver','Route: West',['On duty','ok']],['Sana M. · Plant','Plant: Central',['Active','ok']],['Rohit V. · Manager','All stores',['Admin','warn']]])}
    <div class="ui-perm"><div class="ui-panel-head">Counter role can</div><div class="ui-perm-grid"><span class="on">Create orders</span><span class="on">Take payment</span><span class="on">Print tags</span><span>Edit prices</span><span>View reports</span><span>Manage staff</span></div></div>
  </div>`,'6 members'),

  /* Attendance clock-in register. */
  attendance:()=>win('Attendance — Today',`<div class="ui-att">
    ${tiles([['Present','14'],['Late','2'],['On leave','1'],['Overtime','6h']])}
    ${rows([['Priya N.','09:02 → 18:04',['8h 02m','ok']],['Deepak K.','08:48 → 19:12',['10h 24m','warn']],['Sana M.','09:31 → 18:00',['Late 31m','warn']],['Karan P.','—',['On leave','idle']]])}
  </div>`,'Live'),

  /* Expense entry and approval. */
  expense:()=>win('Expenses — Approvals',`<div class="ui-exp">
    ${tiles([['This month','₹1,24,800'],['Pending approval','₹18,400'],['vs budget','▼ 4.2%']])}
    ${rows([['Detergent · Acme Supplies','₹42,000',['Approved','ok']],['Electricity · Andheri','₹28,600',['Approved','ok']],['Van fuel · West route','₹11,900',['Pending','warn']],['Machine service','₹18,400',['Pending','warn']]])}
    ${bars([40,55,48,62,58,71],['Mar','Apr','May','Jun','Jul','Aug'])}
  </div>`,'Monthly'),

  /* Single-store control panel. */
  store:()=>win('Store — Andheri West',`<div class="ui-dash">
    ${tiles([['Orders today','48'],['Ready for pickup','17'],['Collected','₹32,400'],['Staff on shift','6']])}
    ${rows([['Counter queue','4 waiting',['Open','ok']],['Service catalog','62 services',['Synced','ok']],['Price list','Standard 2026',['Active','ok']],['Cash drawer','₹8,200',['Balanced','ok']]])}
  </div>`,'Open'),

  /* Multi-store comparison. */
  multiStore:()=>win('Network — All stores',`<div class="ui-dash">
    ${tiles([['Stores','12'],['Plants','2'],['Orders today','486'],['Network revenue','₹3,18,400']])}
    <div class="ui-panel"><div class="ui-panel-head">Store performance</div>
    ${rows([['Andheri West','₹52,400',['▲ 14%','ok']],['Bandra','₹47,900',['▲ 8%','ok']],['Powai','₹38,200',['▼ 3%','warn']],['Thane','₹31,600',['▲ 5%','ok']]])}</div>
  </div>`,'12 stores'),

  /* Customer record / CRM. */
  crm:()=>win('Customer — Ritu Sharma',`<div class="ui-crm">
    <div class="ui-crm-head"><i>RS</i><div><b>Ritu Sharma</b><small>Andheri West · Customer since 2024</small></div><span class="ui-state ok">Loyalty · Gold</span></div>
    ${tiles([['Orders','48'],['Lifetime value','₹62,400'],['Avg. order','₹1,300'],['Balance','₹0']])}
    ${rows([['Preference','No starch on cotton'],['Address','Flat 402, Sunview'],['Last order','#OSO-24081'],['Feedback','5★ · "Always on time"']])}
  </div>`,'Profile'),

  /* Payment collection. */
  payments:()=>win('Payments — Collect',`<div class="ui-pay">
    <div class="ui-pay-card"><small>Payment link · Order #OSO-24081</small><b>₹1,883</b><span>Sent to +91 98••• 4410</span><div class="ui-pay-methods"><span>UPI</span><span>Card</span><span>Wallet</span><span>Net banking</span></div><button class="ui-btn primary">Share link</button></div>
    <div class="ui-pay-side">
      ${tiles([['Collected today','₹32,400'],['Outstanding','₹41,200']])}
      ${rows([['#OSO-24081','₹1,883',['Paid','ok']],['#OSO-24079','₹940',['Part paid','warn']],['#OSO-24072','₹2,150',['Overdue','warn']],['#OSO-24068','₹610',['Paid','ok']]])}
    </div>
  </div>`,'Reconciled'),

  /* Prepaid package balance. */
  packages:()=>win('Packages — Customer balance',`<div class="ui-pkg">
    <div class="ui-pkg-card"><small>Monthly Care · Prepaid</small><b>₹4,000 pack</b><span>Valid to 30 Sep 2026</span>
      <div class="ui-meter" style="--pct:62"><i></i></div><small class="ui-pkg-left">₹2,480 remaining · 62%</small></div>
    ${rows([['12 Aug · Wash & Fold','−₹640'],['06 Aug · Dry clean','−₹450'],['28 Jul · Steam press','−₹280'],['01 Jul · Package purchased','+₹4,000']])}
    <div class="ui-renew"><span>Renewal reminder scheduled</span><b>25 Sep</b></div>
  </div>`,'Active'),

  /* Automated messaging + campaign. */
  notifications:()=>win('Notifications & campaigns',`<div class="ui-notif">
    <div class="ui-thread">
      <div class="ui-msg out"><b>Order received</b><span>Hi Ritu, we've got your order #OSO-24081.</span></div>
      <div class="ui-msg out"><b>Out for delivery</b><span>Your order arrives today between 4–6pm.</span></div>
      <div class="ui-msg out"><b>Payment reminder</b><span>₹1,883 is due. Pay securely here.</span></div>
    </div>
    <div class="ui-camp">
      <div class="ui-panel-head">Monsoon dry-clean offer</div>
      ${rows([['Audience','Inactive 60+ days'],['Sent','1,240'],['Delivered','1,216'],['Bookings','96']])}
      ${bars([22,48,66,54,72],['D1','D2','D3','D4','D5'])}
    </div>
  </div>`,'Automated'),

  /* Inventory / consumables. */
  inventory:()=>win('Inventory — Consumables',`<div class="ui-dash">
    ${tiles([['SKUs tracked','86'],['Low stock','7'],['Value on hand','₹2,14,000']])}
    ${rows([['Detergent (20L)','18 units',['In stock','ok']],['Starch (5L)','4 units',['Low','warn']],['Poly covers','1,200 pcs',['In stock','ok']],['Hangers','260 pcs',['Low','warn']],['Stain remover','0 units',['Out','warn']]])}
  </div>`,'Tracked'),

  /* Loyalty points, tier and referral tracking. */
  loyalty:()=>win('Loyalty — Ritu Sharma',`<div class="ui-loyal">
    <div class="ui-loyal-card"><small>Points balance</small><b>780</b><span>Gold tier · 220 to Platinum</span>
      <div class="ui-meter" style="--pct:78"><i></i></div></div>
    <div class="ui-loyal-side">
      ${tiles([['Earned (90d)','1,240'],['Redeemed','460'],['Referrals','3']])}
      ${rows([['Order #OSO-24081','+94',['Earned','ok']],['Redeemed on #24079','−250',['Used','idle']],['Referral: A. Mehta','+200',['Bonus','ok']],['Order #OSO-24068','+61',['Earned','ok']]])}
      <div class="ui-refer"><span>Referral code</span><b>RITU-2026</b></div>
    </div>
  </div>`,'Gold'),

  /* Consolidated B2B invoice. */
  b2bInvoice:()=>win('Invoice — Grandview Hotel',`<div class="ui-inv">
    <div class="ui-inv-head"><div><b>Grandview Hotel</b><small>Account #B2B-018 · Net 30</small></div><span class="ui-state warn">Due 30 Sep</span></div>
    ${rows([['Bed linen · 1,240 pcs','₹62,000'],['Towels · 860 pcs','₹25,800'],['Staff uniforms · 210 pcs','₹18,900'],['Table linen · 340 pcs','₹13,600']])}
    <div class="ui-total"><span>Subtotal</span><b>₹1,20,300</b></div>
    <div class="ui-total muted"><span>Contract discount</span><b>−₹9,600</b></div>
    <div class="ui-total muted"><span>GST</span><b>₹19,926</b></div>
    <div class="ui-total grand"><span>Invoice total</span><b>₹1,30,626</b></div>
    <div class="ui-renew"><span>Period: 1–30 Sep 2026 · 2,650 items</span><b>Challans: 14</b></div>
  </div>`,'Monthly'),

  /* Connected systems. */
  integrations:()=>win('Integrations',`<div class="ui-int">
    ${[['Payment gateway','Connected','ok'],['SMS gateway','Connected','ok'],['WhatsApp Business','Connected','ok'],['Email delivery','Connected','ok'],['Accounting export','Available','idle'],['Label printers','Connected','ok'],['Barcode scanners','Connected','ok'],['Open API & webhooks','Available','idle']].map(([n,s,k])=>`<div class="ui-int-card"><b>${n}</b><span class="ui-state ${k}">${s}</span></div>`).join('')}
  </div>`,'Platform'),

  /* Online storefront. */
  ecommerce:()=>win('Your online store',`<div class="ui-shop">
    <div class="ui-shop-hero"><b>Fresh clothes.<br>Zero hassle.</b><button class="ui-btn primary">Schedule pickup</button></div>
    <div class="ui-shop-grid">${[['Wash & Fold','₹80/kg'],['Dry clean','from ₹150'],['Steam press','₹25/pc'],['Shoe care','from ₹300']].map(([n,p])=>`<div class="ui-shop-card"><span></span><b>${n}</b><small>${p}</small></div>`).join('')}</div>
    <div class="ui-slots"><span>Today 4–6pm</span><span class="on">Tomorrow 9–11am</span><span>Tomorrow 6–8pm</span></div>
  </div>`,'24/7')
};
window.mockups=mockups;
