/* Content for every deep product page.
   Schema: eyebrow, title, intro, mockup (key in ui-mockups.js), problem, solution,
   workflow (P0-04/05/06/09), capabilities, roles (P2-08), outcomes (P2-07), faq (P2-04), related.
   NOTE: capability wording describes intended product behaviour and is pending
   confirmation against the shipped build — see CLAIMS-REVIEW.md before launch. */

const featureData={

'pos':{
  eyebrow:'POINT OF SALE',
  title:'A counter built for laundry, not retail',
  intro:'Generic POS software makes your team fight the tool. MOOREZY captures a laundry order the way your counter actually works — customer, garments, service, condition, due date and payment in one pass.',
  mockup:'pos',
  problem:{title:'What slows a laundry counter down',points:[
    'Order details written on paper, then re-entered into a system later.',
    'Prices differ by garment, fabric and service, so staff guess or ask the owner.',
    'Customer history, dues and preferences live in someone’s memory.',
    'Queues build at peak hours because each order takes too long to record.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Service and garment catalogue with per-item pricing, so nobody guesses.',
    'Customer lookup by phone brings up history, preferences and outstanding balance.',
    'Express charges, discounts, coupons and taxes calculate as the order is built.',
    'Payment is taken or deferred, and the receipt and garment tags print together.']},
  workflow:{title:'Taking an order',steps:[
    ['Find customer','Search by phone or add a new record in seconds.'],
    ['Add garments','Pick services and items; pricing applies automatically.'],
    ['Note condition','Flag stains, damage or special handling before processing.'],
    ['Set due date','Standard or express, with the promised date shown to staff.'],
    ['Take payment','Full, part or on account — cash, card, UPI or payment link.'],
    ['Print & tag','Receipt for the customer, barcode tags for the garments.']]},
  capabilities:[
    ['Service & price catalogue','Build services, garment types, add-ons and multiple price lists for different customer segments.'],
    ['Discounts, coupons & taxes','Apply percentage or value discounts, promo codes and correct tax treatment per line.'],
    ['Customer credit & dues','See outstanding balances at the counter and collect against them during any visit.'],
    ['Order notes & condition','Record stains, damage and handling instructions so the plant sees them with the garment.'],
    ['Staff permissions','Control who can discount, edit prices, cancel orders or open the cash drawer.'],
    ['Receipts & tags together','Complete the order and print the customer receipt plus per-garment tags in one action.']],
  roles:[
    ['Counter staff','Record an order accurately without needing to ask about pricing or policy.'],
    ['Store manager','Review discounts, cancellations and cash handling at the end of each shift.'],
    ['Owner','See what every counter sold today without visiting the store.']],
  outcomes:[
    ['Shorter queues','Orders take less time to record, so peak hours move faster.'],
    ['Fewer pricing errors','The catalogue prices the order, not the person at the counter.'],
    ['Cleaner handover','The plant receives condition notes and due dates with the garments.']],
  faq:[
    ['Can it run on a tablet as well as a desktop?','The counter interface is designed to work on desktop, tablet and mobile screens so you can use the hardware you already have.'],
    ['Can different stores have different prices?','Yes — price lists can be assigned so each store or customer segment uses the right rates.'],
    ['What if a customer collects without paying?','The balance stays on their record as an outstanding due and can be collected on any later visit.']],
  related:[['printing-tags.html','Printing & Garment Tags'],['online-payments.html','Online Payments'],['customer-management.html','Customer Management']]},

'pickup-delivery':{
  eyebrow:'PICKUP & DELIVERY',
  title:'Doorstep service you can actually control',
  intro:'Pickup and delivery grows revenue until it becomes chaos. MOOREZY connects the booking, the driver and the customer so every collection is assigned, tracked and confirmed.',
  mockup:'route',
  problem:{title:'Why doorstep service breaks down',points:[
    'Pickup requests arrive by phone and WhatsApp and get lost.',
    'Drivers are dispatched from memory, so routes double back.',
    'Nobody can answer "where is my order?" without calling the driver.',
    'Cash collected on the road is reconciled days later, if at all.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Customers book a slot from the app or your online store; requests land in one queue.',
    'Requests are assigned to a driver and sequenced into a route.',
    'Each pickup and delivery is confirmed on the driver’s device with a status update.',
    'Collections are recorded against the order, so cash is accounted for the same day.']},
  workflow:{title:'From request to delivered',steps:[
    ['Pickup requested','Customer books a slot, or your team creates the request.'],
    ['Driver assigned','The request joins a driver’s route for that territory and slot.'],
    ['Collected','Driver confirms pickup; garments are logged against the order.'],
    ['Processing','The order moves through the store or plant workflow.'],
    ['Out for delivery','The finished order is routed back to the customer.'],
    ['Delivered & paid','Delivery is confirmed and payment recorded.']]},
  capabilities:[
    ['Slots & territories','Define service areas and time slots so you only promise what you can deliver.'],
    ['Route sequencing','Order the day’s stops sensibly instead of dispatching from memory.'],
    ['Driver workflow','A focused mobile view: today’s stops, customer details, navigation and confirmation.'],
    ['Live order status','Status changes flow to the customer automatically at each stage.'],
    ['Proof of delivery','Capture confirmation at the doorstep so disputes have an answer.'],
    ['Collection on delivery','Record cash or digital payment taken at the door against the right order.']],
  roles:[
    ['Customer','Books a convenient slot and sees where the order is without calling.'],
    ['Driver','Opens one screen showing every stop, address and what to collect.'],
    ['Dispatcher','Assigns routes and sees which stops are done, pending or at risk.'],
    ['Owner','Knows what was collected on the road and what is still owed.']],
  outcomes:[
    ['Wider service area','Structured routes let you serve more addresses in the same day.'],
    ['Fewer status calls','Automatic updates answer the question before it is asked.'],
    ['Accountable cash','Doorstep collections are recorded against orders, not counted later.']],
  faq:[
    ['Do drivers need a separate app?','Drivers use a dedicated mobile workflow designed for the road, separate from the counter interface.'],
    ['Can we limit which areas we serve?','Yes — territories define where pickup can be booked, so you do not accept work you cannot reach.'],
    ['Can a customer set a recurring pickup?','Recurring schedules are supported for regular customers such as weekly wash and fold.']],
  related:[['customer-app.html','Customer App & Portal'],['notifications-marketing.html','Notifications'],['multi-store-support.html','Multi-Store Support']]},

'printing-tags':{
  eyebrow:'PRINTING & GARMENT TAGS',
  title:'Every garment identified, all the way through',
  intro:'Lost and swapped garments cost money and trust. Tagging gives each item a scannable identity from intake to handover, and prints the documents your operation runs on.',
  mockup:'tag',
  problem:{title:'What goes wrong without tagging',points:[
    'Garments are separated for processing and reunited by guesswork.',
    'A missing item is discovered at handover, in front of the customer.',
    'Compensation for lost garments comes straight out of margin.',
    'Handwritten labels are unreadable after washing and pressing.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Each garment gets its own tag carrying the order and item reference.',
    'Scanning at each stage records where the item is and who handled it.',
    'Sorting before dispatch is verified by scan, not by eye.',
    'Receipts, invoices, production slips and labels all print from the same order.']},
  workflow:{title:'Tracking one garment',steps:[
    ['Tag printed','A tag is generated per garment as the order is created.'],
    ['Attached at intake','The tag goes on the item before it leaves the counter.'],
    ['Scanned into processing','The garment is logged into its processing stage.'],
    ['Scanned at each stage','Movement between wash, press and quality check is recorded.'],
    ['Sorted by scan','Items are matched back to their order before dispatch.'],
    ['Handed over','The final scan closes the loop at delivery or collection.']]},
  capabilities:[
    ['Barcode & QR tags','Machine-readable tags so identification does not depend on handwriting.'],
    ['Tag formats','Support for label, heat-seal and temporary tag approaches used in laundry operations.'],
    ['Receipts & invoices','Customer receipts and account invoices printed from the order record.'],
    ['Production slips','Internal documents that tell the plant what to do with each lot.'],
    ['Printer configuration','Configure label size and layout to match the printers you use.'],
    ['Item-level history','See every scan for an item when a customer queries an order.']],
  roles:[
    ['Counter staff','Prints and attaches tags as part of completing the order.'],
    ['Plant operator','Scans items in and out of each processing stage.'],
    ['Manager','Traces any disputed garment through its scan history.']],
  outcomes:[
    ['Fewer lost garments','Items are matched by scan rather than by memory.'],
    ['Faster sorting','Reuniting an order is a scanning task, not a search.'],
    ['Evidence for disputes','Item history shows where a garment was last recorded.']],
  faq:[
    ['Which printers are supported?','MOOREZY is designed to work with standard label and receipt printers; confirm your specific models with our team.'],
    ['Do tags survive washing?','Tag choice depends on your process — heat-seal and specialist laundry tags are used where items go through harsh cycles.'],
    ['Can we tag only some items?','Yes. Many businesses tag dry-clean and premium items first, then extend tagging as the habit settles.']],
  related:[['pos.html','Point of Sale'],['factory-plant.html','Factory & Plant'],['store-management.html','Store Management']]},

'customer-app':{
  eyebrow:'CUSTOMER APP & PORTAL',
  title:'Your customers, served without a phone call',
  intro:'Customers want to book, track and pay without ringing the store. Giving them a self-service channel removes work from your counter and makes your service feel modern.',
  mockup:'customerApp',
  problem:{title:'The cost of phone-only service',points:[
    'Staff answer the same "is it ready?" question all day.',
    'Bookings taken by phone are recorded inconsistently.',
    'Customers cannot see what they have spent or what they owe.',
    'Payment happens only at handover, so collection is slow.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Customers book pickups and choose slots themselves.',
    'Live order status is visible without contacting the store.',
    'Invoices and order history sit in the customer’s account.',
    'Payment can be completed from the app before the order arrives.']},
  workflow:{title:'The customer journey',steps:[
    ['Sign in','The customer accesses their account from app or web.'],
    ['Book a pickup','They choose a service, address and time slot.'],
    ['Track the order','Status updates as the order moves through your operation.'],
    ['Receive notifications','Ready and out-for-delivery alerts arrive automatically.'],
    ['Pay online','The invoice can be settled digitally at any point.'],
    ['Review history','Past orders, invoices and receipts stay available.']]},
  capabilities:[
    ['Self-service booking','Pickup requests with address and slot selection.'],
    ['Live order tracking','Current stage of the order, visible to the customer.'],
    ['Invoices & history','Every past order and document in one account.'],
    ['Online payment','Settle an invoice without waiting for handover.'],
    ['Notifications','Status and reminder messages through supported channels.'],
    ['Saved preferences','Addresses and handling preferences carried across orders.']],
  roles:[
    ['Customer','Books, tracks and pays without calling the store.'],
    ['Counter staff','Handles fewer status calls and more actual orders.'],
    ['Owner','Gains a direct channel to customers for offers and updates.']],
  outcomes:[
    ['Less phone time','Routine questions are answered by the app.'],
    ['Faster collection','Customers can pay before the order reaches them.'],
    ['Repeat bookings','Rebooking takes a few taps, so regulars stay regular.']],
  faq:[
    ['Is the app branded to my business?','Branding options depend on your plan — our team will confirm what is available for your setup.'],
    ['Can customers order without an app?','Yes, the same journey is available through the web portal and your online store.'],
    ['What if a customer prefers to call?','Nothing changes for them — your team records the order at the counter as usual.']],
  related:[['pickup-delivery.html','Pickup & Delivery'],['online-payments.html','Online Payments'],['notifications-marketing.html','Notifications']]},

'factory-plant':{
  eyebrow:'FACTORY & PLANT',
  title:'Make plant operations flow',
  intro:'When several stores feed one plant, the risk is not washing — it is knowing whose garments these are and where they must go back. MOOREZY tracks the lot from store to dispatch.',
  mockup:'plant',
  problem:{title:'Where plant operations lose control',points:[
    'Garments from several stores arrive together and get mixed.',
    'Nobody knows how much work is actually in the building.',
    'Items finish processing but miss the dispatch run back to the store.',
    'Delays are discovered when a customer arrives to collect.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Garments move as identified lots with a recorded origin store.',
    'Each processing stage is recorded, so the workload is visible.',
    'Sorting before dispatch is verified against the order, by scan.',
    'Dispatch back to the originating store is tracked like any other movement.']},
  workflow:{title:'Store to dispatch',steps:[
    ['Store handover','Garments leave the store as a recorded lot.'],
    ['Plant receipt','The plant confirms what physically arrived.'],
    ['Sorting','Items are grouped by service and processing route.'],
    ['Processing','Wash, dry-clean and finishing stages are recorded.'],
    ['Quality check','Items are inspected before they are cleared.'],
    ['Segregate & dispatch','Orders are reassembled and sent back to the right store.']]},
  capabilities:[
    ['Lot tracking','Move garments between store and plant as identified lots.'],
    ['Stage recording','Know how many items sit at each stage of processing.'],
    ['Origin visibility','Every item carries the store it came from.'],
    ['Scan-verified sorting','Reassemble orders by scanning rather than sorting by eye.'],
    ['Dispatch runs','Record what went back to each store and when.'],
    ['Rework handling','Send failed items back through processing with the reason recorded.']],
  roles:[
    ['Plant operator','Records what arrived and moves lots through each stage.'],
    ['Plant manager','Sees the workload in the building and where it is stuck.'],
    ['Store manager','Knows when their orders are coming back.'],
    ['Owner','Sees plant throughput alongside store performance.']],
  outcomes:[
    ['Fewer mix-ups','Origin and order stay attached to the garment.'],
    ['Visible workload','Bottlenecks are apparent while they can still be fixed.'],
    ['Reliable promises','Stores can give customers dates they can keep.']],
  faq:[
    ['Do we need a plant to use MOOREZY?','No. Single stores that process on site use the same order workflow without the plant stages.'],
    ['Can one plant serve many stores?','Yes — that is the model the plant workflow is built for.'],
    ['Can we run a plant that also serves B2B clients?','Yes, corporate accounts can be processed alongside retail work.']],
  related:[['multi-store-support.html','Multi-Store Support'],['printing-tags.html','Garment Tags'],['b2b.html','B2B & Corporate']]},

'online-payments':{
  eyebrow:'ONLINE PAYMENTS',
  title:'Get paid sooner, and know exactly who owes what',
  intro:'Cash at handover slows everything down. Offering digital payment at the point the customer is ready to pay shortens your collection cycle and removes counting from the day.',
  mockup:'payments',
  problem:{title:'Where money gets stuck',points:[
    'Payment only happens when the customer physically collects.',
    'Part payments and advances are tracked on paper.',
    'Nobody can say what is outstanding without checking every order.',
    'Cash from drivers is reconciled long after the run.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Send a payment link the customer can settle from anywhere.',
    'Accept card, UPI and wallet options alongside cash.',
    'Record part payments and advances against the order.',
    'See outstanding balances per customer and per store.']},
  workflow:{title:'Collecting a payment',steps:[
    ['Invoice raised','The order total is confirmed and taxed correctly.'],
    ['Link shared','The customer receives a payment request.'],
    ['Customer pays','Card, UPI, wallet or cash on delivery.'],
    ['Recorded','The payment posts against the order automatically.'],
    ['Reconciled','Collections roll into the day’s financial reporting.']]},
  capabilities:[
    ['Payment links','Request payment for any order without the customer visiting the store.'],
    ['Multiple methods','Cash, card, UPI and wallet options at the counter and the doorstep.'],
    ['Part & advance payments','Take a deposit up front and the balance on delivery.'],
    ['Outstanding tracking','See dues by customer, order and store in one place.'],
    ['Receipts & history','Every payment is receipted and stays on the customer record.'],
    ['Reconciliation','Collections tie back to orders so the day balances.']],
  roles:[
    ['Customer','Pays when convenient, from the app or a link.'],
    ['Driver','Records doorstep collection against the right order.'],
    ['Owner','Sees collections and outstanding balances without a manual tally.']],
  outcomes:[
    ['Shorter collection cycle','Payment is possible before handover, not only at it.'],
    ['Less cash handling','More of the day’s revenue arrives digitally.'],
    ['Clear dues','Outstanding amounts are visible rather than remembered.']],
  faq:[
    ['Which payment methods are available?','Available methods depend on the gateway configured for your region — our team confirms this during setup.'],
    ['Can we still take cash?','Yes. Cash remains a first-class payment method at the counter and on delivery.'],
    ['Can a customer part-pay?','Yes — record an advance and collect the balance later against the same order.']],
  related:[['customer-app.html','Customer App'],['pos.html','Point of Sale'],['reporting-analytics.html','Reporting']]},

'packages-plans':{
  eyebrow:'PACKAGES & PLANS',
  title:'Prepaid plans that steady your cash flow',
  intro:'Selling a package turns an occasional customer into a committed one and brings revenue forward. MOOREZY manages the balance, the usage and the renewal.',
  mockup:'packages',
  problem:{title:'The problem with pay-per-order',points:[
    'Revenue is unpredictable from week to week.',
    'Customers compare price on every single order.',
    'Manual prepaid balances are error-prone and disputed.',
    'Nobody follows up when a plan is about to lapse.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Define packages by value, quantity or specific services.',
    'Balance is deducted automatically as orders are placed.',
    'The customer can see what they have left in their app.',
    'Renewal reminders go out before the plan expires.']},
  workflow:{title:'The package lifecycle',steps:[
    ['Package created','Define price, validity and what it covers.'],
    ['Customer purchases','Bought at the counter or in the app.'],
    ['Balance credited','Value or bookings are added to their account.'],
    ['Services used','Each order draws down the balance automatically.'],
    ['Balance shown','Remaining value stays visible to customer and staff.'],
    ['Renewal','A reminder prompts the customer before expiry.']]},
  capabilities:[
    ['Flexible package types','Value-based, quantity-based or service-specific plans.'],
    ['Validity control','Set how long a package lasts and what happens at expiry.'],
    ['Automatic deduction','Orders draw from the balance without manual adjustment.'],
    ['Customer visibility','Remaining balance is shown in the customer’s account.'],
    ['Renewal reminders','Prompt customers before a plan lapses.'],
    ['Package reporting','See which plans sell and which actually get used.']],
  roles:[
    ['Customer','Buys once, then uses the service without paying each time.'],
    ['Counter staff','Sees the remaining balance while taking the order.'],
    ['Owner','Brings revenue forward and improves customer retention.']],
  outcomes:[
    ['Predictable revenue','Money arrives before the service is consumed.'],
    ['Stronger loyalty','A prepaid balance is a reason to come back.'],
    ['Fewer disputes','Balances are system-tracked, not remembered.']],
  faq:[
    ['Can packages cover only some services?','Yes — a package can be limited to specific services such as wash and fold.'],
    ['What happens when a package expires?','Expiry behaviour is configurable; our team will help you set a policy that suits your business.'],
    ['Can customers buy a package themselves?','Subscription purchase is available in the customer app as well as at the counter.']],
  related:[['customer-app.html','Customer App'],['customer-management.html','Customer Management'],['online-payments.html','Online Payments']]},

'customer-management':{
  eyebrow:'CUSTOMER MANAGEMENT',
  title:'Know every customer, not just every order',
  intro:'The difference between a transaction and a relationship is memory. MOOREZY keeps preferences, history, balances and feedback attached to the customer so service stays personal as you grow.',
  mockup:'crm',
  problem:{title:'What gets lost',points:[
    'Preferences live with whichever staff member served them last.',
    'Nobody knows which customers have stopped coming.',
    'Complaints and compensation are handled without any record.',
    'Offers go to everyone because there is no way to segment.']},
  solution:{title:'How MOOREZY handles it',points:[
    'One record per customer holding contact, address and preferences.',
    'Full order and payment history in the same place.',
    'Feedback, complaints and resolutions recorded against the customer.',
    'Segments let you target the right group with the right message.']},
  workflow:{title:'Building the relationship',steps:[
    ['First order','The customer record is created at the counter or in the app.'],
    ['Preferences captured','Handling notes and addresses are saved for next time.'],
    ['History accumulates','Every order, payment and interaction is attached.'],
    ['Segments applied','Customers group by value, frequency or service used.'],
    ['Targeted follow-up','Relevant offers and reminders go to the right people.']]},
  capabilities:[
    ['Complete profiles','Contact details, addresses, preferences and handling notes.'],
    ['Order & payment history','Everything the customer has bought and paid, in one view.'],
    ['Credit & balances','Outstanding dues and prepaid balances on the record.'],
    ['Feedback & complaints','Log issues and what was done about them.'],
    ['Segmentation','Group customers for targeted communication.'],
    ['Lifetime value','Understand which customers actually matter to the business.']],
  roles:[
    ['Counter staff','Greets the customer already knowing their preferences.'],
    ['Manager','Reviews complaints and how they were resolved.'],
    ['Owner','Sees which customers are growing and which are slipping away.']],
  outcomes:[
    ['More personal service','Preferences follow the customer, not the staff member.'],
    ['Better retention','Lapsing customers can be identified and contacted.'],
    ['Smarter offers','Campaigns target a segment instead of everybody.']],
  faq:[
    ['Can we import our existing customer list?','Customer imports are supported — our team will advise on the format during onboarding.'],
    ['Is customer data shared across stores?','A shared customer base across your locations is supported for multi-store businesses.'],
    ['Can we record garment preferences?','Yes — handling notes and preferences are stored on the customer and surface at the counter.']],
  related:[['notifications-marketing.html','Notifications & Marketing'],['packages-plans.html','Packages & Plans'],['pos.html','Point of Sale']]},

'notifications-marketing':{
  eyebrow:'NOTIFICATIONS & MARKETING',
  title:'Keep customers informed without anyone typing a message',
  intro:'Most customer messages are the same six updates repeated all day. Automate them, and your team gets time back while customers feel better served.',
  mockup:'notifications',
  problem:{title:'The manual-messaging trap',points:[
    'Staff send status updates by hand, or not at all.',
    'Customers call to ask questions the system already knows.',
    'Payment reminders are awkward and get skipped.',
    'Promotions go out rarely because they take effort.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Order milestones trigger messages automatically.',
    'Reminders for pickup, readiness and payment go out on time.',
    'Campaigns target a segment rather than the whole list.',
    'Results are visible so you know what actually worked.']},
  workflow:{title:'Messages that send themselves',steps:[
    ['Order received','The customer gets confirmation immediately.'],
    ['Pickup reminder','A prompt before the scheduled collection.'],
    ['Ready','The customer knows the order is finished.'],
    ['Out for delivery','A heads-up before the driver arrives.'],
    ['Payment reminder','A polite nudge for anything outstanding.'],
    ['Win-back offer','A campaign to customers who have gone quiet.']]},
  capabilities:[
    ['Automated status alerts','Messages tied to order milestones through supported channels.'],
    ['Payment reminders','Automatic follow-up on due and overdue balances.'],
    ['Campaigns','Scheduled promotions to a chosen audience.'],
    ['Coupons & referrals','Promo codes and referral incentives that track back to orders.'],
    ['Audience filters','Target by activity, spend, service or location.'],
    ['Campaign results','See delivery and the bookings a campaign produced.']],
  roles:[
    ['Customer','Stays informed without calling the store.'],
    ['Counter staff','Stops repeating the same updates by hand.'],
    ['Owner','Runs promotions without hiring a marketer.']],
  outcomes:[
    ['Fewer inbound calls','Updates arrive before the customer asks.'],
    ['Faster payment','Reminders go out consistently instead of awkwardly.'],
    ['Reactivated customers','Quiet customers get a reason to return.']],
  faq:[
    ['Which channels are supported?','Supported messaging channels depend on your region and configured providers — confirm with our team.'],
    ['Can customers opt out?','Yes. Marketing messages respect opt-out; transactional order updates are separate.'],
    ['Do we need to write every message?','Standard order updates use templates you can adjust once and then leave alone.']],
  related:[['customer-management.html','Customer Management'],['customer-app.html','Customer App'],['integrations-support.html','Integrations']]},

'reporting-analytics':{
  eyebrow:'REPORTING & ANALYTICS',
  title:'Know what happened today, not last month',
  intro:'Most laundry owners find out about a problem when it has already cost them. Live reporting turns daily activity into decisions you can still act on.',
  mockup:'dashboard',
  problem:{title:'Running blind',points:[
    'Sales figures are assembled manually at month end.',
    'Nobody knows which services or stores actually make money.',
    'Expenses are compared to revenue too late to react.',
    'Staff and driver performance is judged on impression.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Dashboards update as orders and payments happen.',
    'Revenue breaks down by service, store, staff member and customer.',
    'Expenses sit alongside revenue so margin is visible.',
    'Reports export when you need them outside the system.']},
  workflow:{title:'From activity to decision',steps:[
    ['Activity recorded','Orders, payments and expenses capture as they occur.'],
    ['Dashboards update','Headline numbers reflect the current day.'],
    ['Breakdowns explored','Drill into service, store, staff or customer.'],
    ['Trends compared','Measure against previous periods.'],
    ['Action taken','Adjust pricing, staffing or promotion while it still matters.']]},
  capabilities:[
    ['Revenue reporting','Sales by day, service, store and payment method.'],
    ['Order analysis','Volumes, turnaround and order composition.'],
    ['Customer insight','New versus repeat, value and activity.'],
    ['Expense & margin','Operating costs measured against revenue.'],
    ['Staff & driver performance','Activity and output by team member.'],
    ['Exports','Take any report out for accounting or review.']],
  roles:[
    ['Owner','Sees business health without visiting every store.'],
    ['Store manager','Tracks their own numbers against target.'],
    ['Accountant','Exports the figures needed for the books.']],
  outcomes:[
    ['Earlier decisions','Problems surface while they can still be fixed.'],
    ['Clear profitability','You learn which services and stores actually earn.'],
    ['Less admin','Reports assemble themselves instead of being compiled.']],
  faq:[
    ['Can we see all stores in one report?','Yes — consolidated reporting across locations is part of multi-store support.'],
    ['Can reports be exported?','Reports can be exported for accounting and offline review.'],
    ['Is the data live?','Dashboards reflect activity as it is recorded in the system.']],
  related:[['multi-store-support.html','Multi-Store Support'],['expense-management.html','Expense Management'],['staff-management.html','Staff Management']]},

'expense-management':{
  eyebrow:'EXPENSE MANAGEMENT',
  title:'Every cost captured, categorised and approved',
  intro:'Revenue is only half the picture. Recording what you spend — and who approved it — is what turns turnover into understood profit.',
  mockup:'expense',
  problem:{title:'Where margin quietly disappears',points:[
    'Costs are paid in cash and remembered later, or not at all.',
    'Nobody approves spending before it happens.',
    'Store-level costs are invisible at the group level.',
    'Recurring bills are missed until they are overdue.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Expenses are entered against a category, vendor and store.',
    'Approval workflows put a check before money leaves.',
    'Recurring costs are scheduled rather than remembered.',
    'Spending is reported against revenue for real margin.']},
  workflow:{title:'Controlling a cost',steps:[
    ['Expense entered','Recorded with category, vendor and store.'],
    ['Receipt attached','Supporting documentation stays with the record.'],
    ['Approval','A manager reviews before it is accepted.'],
    ['Categorised','The cost lands in the right bucket for reporting.'],
    ['Reported','Spending is compared against revenue and budget.']]},
  capabilities:[
    ['Categories & vendors','Structure spending so reports mean something.'],
    ['Approval workflow','Require sign-off before an expense is accepted.'],
    ['Recurring expenses','Schedule rent, utilities and contracts.'],
    ['Store-level tracking','See what each location actually costs to run.'],
    ['Receipts','Keep documentation attached to the expense.'],
    ['Expense reporting','Trends over time and against revenue.']],
  roles:[
    ['Store staff','Records a cost the moment it is incurred.'],
    ['Manager','Approves or rejects before it is committed.'],
    ['Owner','Sees the cost base across every location.']],
  outcomes:[
    ['Visible margin','Profit is measured, not estimated.'],
    ['Controlled spending','Approval happens before payment, not after.'],
    ['Comparable stores','You can tell which location runs efficiently.']],
  faq:[
    ['Can each store have its own budget?','Store-level tracking lets you monitor spending per location.'],
    ['Can we require approval above a limit?','Approval workflows are supported — our team will help configure thresholds.'],
    ['Does this replace our accounting software?','No. MOOREZY records operational expenses and exports for your accountant.']],
  related:[['reporting-analytics.html','Reporting & Analytics'],['store-management.html','Store Management'],['staff-management.html','Staff Management']]},

'staff-management':{
  eyebrow:'STAFF MANAGEMENT',
  title:'The right access for every person on your team',
  intro:'A counter assistant, a driver and an owner need very different things — and very different permissions. MOOREZY gives each role its own view and keeps activity accountable.',
  mockup:'staff',
  problem:{title:'What goes wrong without roles',points:[
    'Everyone shares one login, so nothing is traceable.',
    'Staff can change prices or cancel orders without oversight.',
    'New joiners see far more than they need to.',
    'Performance is impossible to attribute.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Each person gets their own account and role.',
    'Permissions control who can discount, refund or view reports.',
    'Staff are assigned to the stores they actually work in.',
    'Activity is attributed, so performance is measurable.']},
  workflow:{title:'Onboarding a team member',steps:[
    ['Add employee','Create the person’s record and contact details.'],
    ['Assign role','Counter, driver, plant, manager or admin.'],
    ['Set permissions','Grant only the actions the role requires.'],
    ['Assign location','Link them to the store or plant they work in.'],
    ['Track activity','Orders, collections and output attribute to them.']]},
  capabilities:[
    ['Individual accounts','No shared logins, so activity is traceable.'],
    ['Role-based permissions','Control discounts, refunds, cancellations and reporting access.'],
    ['Store assignment','Staff see the locations they are responsible for.'],
    ['Performance visibility','Sales, production and delivery output per person.'],
    ['Driver access','A road-focused view for delivery staff.'],
    ['Access changes','Adjust or revoke permissions as roles change.']],
  roles:[
    ['Counter staff','Does their job without access to sensitive settings.'],
    ['Driver','Sees only their route and stops.'],
    ['Manager','Oversees a store and approves exceptions.'],
    ['Owner','Controls who can do what across the business.']],
  outcomes:[
    ['Accountability','Every action traces back to a person.'],
    ['Reduced risk','Sensitive operations sit behind permissions.'],
    ['Fair performance review','Output is attributed, not assumed.']],
  faq:[
    ['How many staff accounts can we have?','User limits depend on your plan — see pricing or ask our team.'],
    ['Can one person work across stores?','Yes, staff can be assigned to more than one location.'],
    ['Can we stop staff giving discounts?','Yes — discounting is a permission you can withhold.']],
  related:[['attendance.html','Attendance'],['store-management.html','Store Management'],['reporting-analytics.html','Reporting']]},

'attendance':{
  eyebrow:'ATTENDANCE',
  title:'Hours worked, recorded as they happen',
  intro:'Attendance kept in a notebook becomes a payroll argument. Recording clock-in and clock-out in the same system as the work removes the guesswork.',
  mockup:'attendance',
  problem:{title:'The notebook problem',points:[
    'Hours are reconstructed from memory at month end.',
    'Late arrivals and early departures go unrecorded.',
    'Overtime is disputed because there is no record.',
    'Leave is tracked separately, if at all.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Staff clock in and out against their own account.',
    'Hours, lateness and overtime calculate automatically.',
    'Leave and absence are recorded in the same place.',
    'Attendance reports are ready when payroll is due.']},
  workflow:{title:'A working day',steps:[
    ['Clock in','The shift starts against the staff member’s record.'],
    ['Breaks recorded','Time away is captured during the shift.'],
    ['Clock out','The shift closes and hours calculate.'],
    ['Exceptions flagged','Lateness and overtime are highlighted.'],
    ['Reported','Period totals are ready for payroll.']]},
  capabilities:[
    ['Clock in & out','Shift start and end recorded per person.'],
    ['Break tracking','Time away captured within the shift.'],
    ['Overtime','Hours beyond the scheduled shift are identified.'],
    ['Leave & absence','Planned and unplanned absence recorded.'],
    ['Store-level view','See who is on shift at each location.'],
    ['Attendance reports','Period summaries for payroll and review.']],
  roles:[
    ['Staff member','Clocks in and out; hours are recorded fairly.'],
    ['Store manager','Sees who is present and who is missing right now.'],
    ['Owner','Reviews attendance across locations before payroll.']],
  outcomes:[
    ['Accurate payroll','Hours come from records, not recollection.'],
    ['Fewer disputes','Overtime and lateness have an audit trail.'],
    ['Better cover','Managers see staffing gaps as they occur.']],
  faq:[
    ['Does this calculate payroll?','MOOREZY records attendance and produces reports; payroll processing stays with your existing provider.'],
    ['Can staff clock in from their phone?','Clock-in methods depend on your configuration — our team will confirm what suits your setup.'],
    ['Can we track leave balances?','Leave and absence records are maintained alongside attendance.']],
  related:[['staff-management.html','Staff Management'],['reporting-analytics.html','Reporting'],['expense-management.html','Expense Management']]},

'store-management':{
  eyebrow:'STORE MANAGEMENT',
  title:'One store, fully under control',
  intro:'Before you scale, the single store has to run cleanly: the catalogue, the prices, the cash, the queue and the people. This is where that lives.',
  mockup:'store',
  problem:{title:'What a store loses track of',points:[
    'Prices differ depending on who is at the counter.',
    'The service catalogue exists only in someone’s head.',
    'Cash at close does not match what was sold.',
    'The owner cannot see the store without being in it.']},
  solution:{title:'How MOOREZY handles it',points:[
    'A single catalogue and price list the whole store uses.',
    'Daily order, payment and collection totals in one view.',
    'Cash and digital collections reconcile against orders.',
    'The store is visible remotely, in real time.']},
  workflow:{title:'Running the day',steps:[
    ['Open','Staff sign in and the day begins against the store.'],
    ['Orders taken','Every order posts to the store record.'],
    ['Work progresses','Orders move through processing stages.'],
    ['Collections recorded','Cash and digital payments are captured.'],
    ['Close','Totals reconcile and the day is reported.']]},
  capabilities:[
    ['Service catalogue','One list of services, garments and add-ons.'],
    ['Price lists','Consistent pricing, adjustable by segment.'],
    ['Daily totals','Orders, revenue and collections for the day.'],
    ['Cash reconciliation','Match what was collected to what was sold.'],
    ['Staff on shift','See who is working and what they have handled.'],
    ['Remote visibility','Check the store from anywhere.']],
  roles:[
    ['Counter staff','Works from a catalogue instead of memory.'],
    ['Store manager','Opens, runs and closes the day with clear totals.'],
    ['Owner','Sees the store without being physically present.']],
  outcomes:[
    ['Consistent pricing','The catalogue decides the price, every time.'],
    ['Balanced days','Collections reconcile against orders at close.'],
    ['Remote oversight','The owner is not tied to the counter.']],
  faq:[
    ['Can I start with one store and add more later?','Yes — the same setup extends to multiple stores when you are ready.'],
    ['Can different staff see different things?','Yes, through role-based permissions.'],
    ['Does it work offline?','Connectivity requirements depend on your setup; discuss your situation with our team.']],
  related:[['multi-store-support.html','Multi-Store Support'],['pos.html','Point of Sale'],['staff-management.html','Staff Management']]},

'multi-store-support':{
  eyebrow:'MULTI-STORE SUPPORT',
  title:'One command centre for every location',
  intro:'Two stores are twice the work only if they run as two businesses. Shared customers, shared catalogue and consolidated reporting keep a network manageable.',
  mockup:'multiStore',
  problem:{title:'Why the second store hurts',points:[
    'Each location keeps its own customers and prices.',
    'Comparing performance means assembling spreadsheets.',
    'Garments moving between stores and the plant get lost.',
    'Standards drift, so the customer experience varies.']},
  solution:{title:'How MOOREZY handles it',points:[
    'A shared customer base and catalogue across locations.',
    'Consolidated reporting with per-store breakdowns.',
    'Tracked garment and inventory movement between sites.',
    'The same workflows applied everywhere.']},
  workflow:{title:'Running a network',steps:[
    ['Locations defined','Stores, plants and territories are set up.'],
    ['Shared resources','Customers, catalogue and pricing are common.'],
    ['Work distributed','Orders route to the right processing site.'],
    ['Movement tracked','Transfers between sites are recorded.'],
    ['Consolidated view','Group and per-store performance in one report.']]},
  capabilities:[
    ['Central dashboard','Every location’s activity in a single view.'],
    ['Shared customer base','One customer, recognised at any branch.'],
    ['Common catalogue','Consistent services and pricing across the network.'],
    ['Inter-site transfers','Track garments and stock moving between sites.'],
    ['Territories & drivers','Assign delivery coverage across locations.'],
    ['Consolidated reporting','Compare stores and drill into any of them.']],
  roles:[
    ['Store manager','Runs their location within group standards.'],
    ['Operations lead','Balances work across stores and plants.'],
    ['Owner','Compares locations and spots problems early.']],
  outcomes:[
    ['Manageable growth','A new store adds volume, not chaos.'],
    ['Consistent experience','Customers get the same service everywhere.'],
    ['Comparable performance','Locations are measured on the same basis.']],
  faq:[
    ['How many stores are supported?','Store limits depend on your plan — see pricing or talk to our team.'],
    ['Can stores have different prices?','Yes, price lists can vary by location while the catalogue stays shared.'],
    ['Can a customer collect at a different branch?','A shared customer base is designed to support this; confirm your specific workflow with our team.']],
  related:[['store-management.html','Store Management'],['factory-plant.html','Factory & Plant'],['reporting-analytics.html','Reporting']]},

'integrations-support':{
  eyebrow:'INTEGRATIONS & SUPPORT',
  title:'Connected to your tools, backed by people who know laundry',
  intro:'Software is only part of the answer. What matters is whether it connects to what you already use, and whether someone helps when the counter is busy.',
  mockup:'integrations',
  problem:{title:'Why systems fail in practice',points:[
    'Data is re-typed between the POS and the accounts.',
    'Printers and scanners are not supported, so tagging never starts.',
    'Messaging goes through a separate tool nobody maintains.',
    'Support does not understand how a laundry actually runs.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Integrations for payments, messaging and accounting export.',
    'Support for standard label printers and barcode scanners.',
    'Guided onboarding so the system is configured properly.',
    'A support team that understands laundry operations.']},
  workflow:{title:'Getting connected',steps:[
    ['Scope','We confirm what you use and what needs to connect.'],
    ['Configure','Payment, messaging and hardware are set up.'],
    ['Import','Customers, services and prices are brought across.'],
    ['Train','Your team is walked through their daily workflow.'],
    ['Support','Ongoing help once you are live.']]},
  capabilities:[
    ['Payment gateway','Digital collection through a supported provider.'],
    ['Messaging channels','SMS, email and messaging integrations for order updates.'],
    ['Accounting export','Get financial data out for your accountant.'],
    ['Printers & scanners','Standard label printers and barcode hardware.'],
    ['API access','Programmatic access for custom needs, where required.'],
    ['Onboarding & training','Guided setup, data import and team training.']],
  roles:[
    ['Owner','Gets a system that fits the tools already in use.'],
    ['Manager','Has somewhere to turn when something is not working.'],
    ['Accountant','Receives data in a usable form.']],
  outcomes:[
    ['Less double entry','Systems share data instead of being retyped.'],
    ['Faster go-live','Guided setup shortens the path to running properly.'],
    ['Confident teams','Training means the software is actually used.']],
  faq:[
    ['Which integrations are available today?','Available integrations depend on your region and plan — our team will confirm exactly what applies to you before you commit.'],
    ['Can you migrate our existing data?','Customer, service and price imports are supported; larger migrations are handled case by case.'],
    ['What support is included?','Support levels vary by plan. See pricing, or ask us what your setup would include.']],
  related:[['pricing.html','Pricing'],['contact.html','Talk to us'],['printing-tags.html','Printing & Tags']]},

'driver-app':{
  eyebrow:'DRIVER APP',
  title:'One screen for everything on the road',
  intro:'A driver does not need your whole system — they need today’s stops, the address, what to collect and a way to confirm it. Anything more slows the run down.',
  mockup:'driverApp',
  problem:{title:'How delivery runs go wrong',points:[
    'Stops are shared by phone call and written on paper.',
    'Drivers arrive without knowing what to collect or charge.',
    'Status is only updated when the driver returns to the store.',
    'Cash taken at the door is reconciled from memory.']},
  solution:{title:'How MOOREZY handles it',points:[
    'The day’s route arrives on the driver’s device, in sequence.',
    'Each stop shows the customer, address and expected items.',
    'Pickup and delivery are confirmed at the door, updating status live.',
    'Payment collected on the road is recorded against the order.']},
  workflow:{title:'A driver’s day',steps:[
    ['Route received','Today’s stops appear in order on the driver’s device.'],
    ['Navigate','Address and directions for the next stop.'],
    ['Confirm pickup','Items are logged against the order at collection.'],
    ['Status updates','The customer and store see progress immediately.'],
    ['Collect payment','Cash or digital payment is recorded at the door.'],
    ['Run closed','The day’s collections and stops reconcile.']]},
  capabilities:[
    ['Sequenced stop list','Today’s pickups and deliveries in the order to drive them.'],
    ['Customer & address detail','Everything needed at the door, without a phone call.'],
    ['Navigation handoff','Open the stop address in a maps application.'],
    ['Pickup & delivery confirmation','Confirm at the door so status updates immediately.'],
    ['Doorstep collection','Record cash or digital payment against the order.'],
    ['Driver-only access','Drivers see their route, not your business data.']],
  roles:[
    ['Driver','Works from one clear list instead of calls and paper.'],
    ['Dispatcher','Sees which stops are done, pending or running late.'],
    ['Customer','Gets accurate status because it updates at the door.'],
    ['Owner','Knows what was collected on the road, the same day.']],
  outcomes:[
    ['More stops per run','Sequenced routes remove backtracking and guesswork.'],
    ['Accurate status','Updates happen at the door, not hours later.'],
    ['Accountable collections','Doorstep cash ties to a specific order.']],
  faq:[
    ['Do drivers see customer data?','Drivers see only what their stops require — access is limited by role.'],
    ['Does it work on any phone?','The driver workflow is designed for standard mobile devices; confirm specifics with our team.'],
    ['Can a driver take payment?','Doorstep collection is supported and records against the order.']],
  related:[['pickup-delivery.html','Pickup & Delivery'],['staff-management.html','Staff Management'],['customer-app.html','Customer App']]},

/* ---------------- business types (P1-01 … P1-05) ---------------- */

'single-store':{
  eyebrow:'SINGLE STORE',
  title:'All-in-one software for one very busy shop',
  intro:'A single store does not have a back office. The owner is the manager, the cashier and the complaints department. MOOREZY takes the administrative half of that job away.',
  mockup:'store',
  problem:{title:'What one store struggles with',points:[
    'Orders on paper, prices from memory, totals in someone’s head.',
    'No idea which services actually make money.',
    'Regular customers are recognised by face, not by record.',
    'The owner cannot leave the counter without losing visibility.']},
  solution:{title:'How MOOREZY handles it',points:[
    'One catalogue prices every order the same way, whoever is serving.',
    'Customer history, preferences and dues appear when you search a phone number.',
    'Daily totals reconcile so cash matches what was actually sold.',
    'The store is visible from your phone when you are not in it.']},
  workflow:{title:'A day in one store',steps:[
    ['Open','Staff sign in; the day starts against the store record.'],
    ['Take orders','Garments, services, condition and due date captured at the counter.'],
    ['Tag & process','Items are tagged and moved through processing.'],
    ['Notify','The customer is told automatically when the order is ready.'],
    ['Hand over & collect','Payment is taken and the order closed.'],
    ['Close','Totals reconcile and the day is reported.']]},
  capabilities:[
    ['Laundry-specific POS','Order capture built for garments and services, not retail SKUs.'],
    ['Garment tagging','Every item identified so nothing is lost between intake and handover.'],
    ['Customer records','History, preferences, balances and feedback in one place.'],
    ['Payments','Cash, card, UPI and payment links, with dues tracked.'],
    ['Expenses','Record what the store costs to run, not just what it earns.'],
    ['Daily reporting','Revenue, orders and collections without assembling anything.']],
  roles:[
    ['Owner','Sees the store, the money and the margin without standing in it.'],
    ['Counter staff','Works from a catalogue instead of guessing prices.'],
    ['Customer','Gets updates and can pay without waiting at the counter.']],
  outcomes:[
    ['Consistent pricing','The catalogue decides the price, every single time.'],
    ['Fewer lost garments','Tagging replaces memory as the tracking method.'],
    ['A day that balances','Collections reconcile against orders at close.']],
  faq:[
    ['Is this too much software for one store?','You can start with the counter and payments alone, and switch on delivery, tagging and reporting when you want them.'],
    ['What if I open a second store later?','The same account extends to more locations — see Multi-Store Support.'],
    ['Do I need special hardware?','A computer or tablet is enough to start. Label printers and scanners are added when you begin tagging.']],
  related:[['pos.html','Point of Sale'],['store-management.html','Store Management'],['multi-store-support.html','When you grow']]},

'multi-store':{
  eyebrow:'MULTI STORE',
  title:'The second store should not double the work',
  intro:'Most laundry businesses stall at two or three outlets, because everything that was in the owner’s head now has to exist in two places at once. This is the fix for that.',
  mockup:'multiStore',
  problem:{title:'Why growth gets painful',points:[
    'Each store keeps its own customers, prices and habits.',
    'Comparing branches means assembling numbers by hand.',
    'Garments moving between stores and the plant go missing.',
    'Service quality depends on which branch the customer walks into.']},
  solution:{title:'How MOOREZY handles it',points:[
    'A shared customer base and catalogue across every location.',
    'One dashboard covering all stores, with per-store drill-down.',
    'Tracked transfers between stores and the processing plant.',
    'The same workflow applied everywhere, so standards hold.']},
  workflow:{title:'Running a network',steps:[
    ['Set up locations','Stores, plants and delivery territories are defined.'],
    ['Share resources','Customers, catalogue and pricing become common.'],
    ['Route the work','Orders go to the right processing site.'],
    ['Track movement','Transfers between sites are recorded, not assumed.'],
    ['Compare','Group and per-store performance in one report.']]},
  capabilities:[
    ['Central dashboard','Every location’s activity in a single view.'],
    ['Shared customers','One customer, recognised at any branch.'],
    ['Common catalogue','Consistent services, with prices adjustable per location.'],
    ['Inter-site transfers','Garments and stock tracked as they move.'],
    ['Territories & drivers','Delivery coverage assigned across the network.'],
    ['Consolidated reporting','Compare branches on the same basis.']],
  roles:[
    ['Owner','Compares locations and spots the weak one early.'],
    ['Operations lead','Balances work across stores and the plant.'],
    ['Store manager','Runs their branch within group standards.'],
    ['Customer','Gets the same experience at every branch.']],
  outcomes:[
    ['Growth without chaos','A new store adds volume, not a new set of problems.'],
    ['Comparable branches','Performance measured the same way everywhere.'],
    ['Consistent service','Customers cannot tell which branch is which.']],
  faq:[
    ['Can prices differ between stores?','Yes — the catalogue is shared but price lists can vary by location.'],
    ['Can a customer drop at one branch and collect at another?','A shared customer base is designed for this; confirm your exact workflow with our team.'],
    ['How many stores are supported?','Store limits depend on your plan. See pricing or ask us.']],
  related:[['multi-store-support.html','Multi-Store Support'],['factory-plant.html','Factory & Plant'],['franchise.html','Franchise']]},

'new-business':{
  eyebrow:'NEW BUSINESS',
  title:'Open like you have been doing this for years',
  intro:'A new laundry competes with established shops from day one. Starting with proper processes — rather than fixing them after the mess appears — is the cheapest advantage available to you.',
  mockup:'ecommerce',
  problem:{title:'What new owners get wrong',points:[
    'Paper records, because it seems simpler at low volume.',
    'Prices set by instinct and never reviewed.',
    'No customer list, so every order is a first order.',
    'Habits form in month one that become expensive in year two.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Configure services, pricing and taxes before you open, not after.',
    'Every customer is captured from the first order onward.',
    'Look established: digital receipts, updates and online booking.',
    'Know your numbers from week one instead of reconstructing them.']},
  workflow:{title:'From setup to first orders',steps:[
    ['Configure','Services, garments, prices and taxes are set up.'],
    ['Add your team','Accounts and permissions for the people you hire.'],
    ['Go live','Take the first order through the proper workflow.'],
    ['Reach customers','Online booking and pickup extend past the storefront.'],
    ['Review','See what sells and what costs from the beginning.']]},
  capabilities:[
    ['Guided setup','Get configured without a long implementation project.'],
    ['Professional from day one','Digital receipts, order updates and online payment.'],
    ['Online booking','Take work beyond the people who walk past your door.'],
    ['Customer list from order one','Build the asset that makes year two easier.'],
    ['Cost visibility','Track what you spend while you can still change it.'],
    ['Room to grow','Add stores, a plant or delivery without changing systems.']],
  roles:[
    ['Owner','Starts with the processes an established shop had to learn the hard way.'],
    ['First hires','Learn one consistent workflow rather than personal habits.'],
    ['Customer','Gets a modern experience from a brand-new business.']],
  outcomes:[
    ['Credibility early','You look like an established operator from the first order.'],
    ['No painful migration','The records you need later exist from the start.'],
    ['Informed decisions','Pricing and service choices are based on your own numbers.']],
  faq:[
    ['How quickly can I be running?','A straightforward single store can be configured quickly. Tell us your services and we will be specific.'],
    ['Can I start on the free trial?','Yes — 14 days, no credit card required.'],
    ['What if I do not know my prices yet?','Start with a simple catalogue and refine it. Prices can be changed at any time.']],
  related:[['pos.html','Point of Sale'],['ecommerce.html','Online Store'],['setup-migration.html','Setup & Migration']]},

'b2b':{
  eyebrow:'B2B & CORPORATE',
  title:'High-volume accounts, billed correctly and on time',
  intro:'Hotels, hospitals, salons and corporate clients are not retail customers. They want contract pricing, consolidated invoices, delivery documentation and credit terms — and they will leave over billing errors.',
  mockup:'b2bInvoice',
  problem:{title:'Where B2B laundry loses money',points:[
    'Contract rates live in an email nobody can find.',
    'Invoices are assembled by hand at month end, with mistakes.',
    'Delivery quantities are disputed because there is no signed record.',
    'Overdue balances build up because nobody chases them.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Account-level price lists and credit terms held against the customer.',
    'Periodic invoices generated from actual recorded volume.',
    'Digital delivery challans give both sides the same record.',
    'Automatic reminders on due and overdue balances.']},
  workflow:{title:'Running an account',steps:[
    ['Account set up','Contract pricing, credit terms and contacts are recorded.'],
    ['Collections','Volume is picked up and logged against the account.'],
    ['Processing','Items move through the plant with account origin attached.'],
    ['Delivery & challan','Quantities are documented at handover.'],
    ['Consolidated invoice','A periodic invoice is generated from real volume.'],
    ['Payment & follow-up','Reminders chase anything outstanding.']]},
  capabilities:[
    ['Account price lists','Contract rates per client, applied automatically.'],
    ['Credit terms','Payment periods and limits held on the account.'],
    ['Consolidated invoicing','Periodic invoices built from recorded activity.'],
    ['Delivery challans','Digital documentation of what was delivered.'],
    ['Outstanding tracking','Balances and ageing visible per account.'],
    ['Volume overview','Picked, in-process and delivered quantities per client.']],
  roles:[
    ['Account manager','Knows each client’s rates, volume and balance.'],
    ['Plant team','Processes corporate volume with origin attached.'],
    ['Client','Gets accurate invoices and documented deliveries.'],
    ['Owner','Sees which accounts are profitable and which are slow to pay.']],
  outcomes:[
    ['Accurate invoices','Billing comes from recorded volume, not reconstruction.'],
    ['Faster payment','Correct invoices and automatic reminders shorten the cycle.'],
    ['Fewer disputes','Challans give both sides the same record.']],
  faq:[
    ['Can each client have different rates?','Yes — account-specific price lists are applied automatically.'],
    ['Can we invoice weekly or monthly?','Invoice periods are configurable per account.'],
    ['Can we serve B2B and retail together?','Yes. Corporate volume is processed alongside retail work.']],
  related:[['factory-plant.html','Factory & Plant'],['online-payments.html','Payments'],['customer-management.html','Customer Management']]},

'franchise':{
  eyebrow:'FRANCHISE',
  title:'Standardise the operation, not just the signage',
  intro:'A franchise fails when each outlet runs its own way behind a shared logo. What holds it together is a common process, common pricing and visibility that does not depend on the franchisee reporting honestly.',
  mockup:'multiStore',
  problem:{title:'Why franchises drift',points:[
    'Each franchisee adopts their own workflow and pricing.',
    'Head office sees only what franchisees choose to report.',
    'Service quality varies, but the brand takes the complaint.',
    'Onboarding a new outlet means teaching everything from scratch.']},
  solution:{title:'How MOOREZY handles it',points:[
    'A standard catalogue and workflow applied to every outlet.',
    'Head office sees activity directly, not through reports.',
    'Permissions decide what a franchisee can and cannot change.',
    'A new outlet starts from the proven configuration.']},
  workflow:{title:'Adding an outlet',steps:[
    ['Outlet created','The location is added to the network.'],
    ['Standards applied','Catalogue, pricing and workflow are inherited.'],
    ['Permissions set','What the franchisee may change is defined.'],
    ['Team trained','Staff learn the same process as every other outlet.'],
    ['Monitored','Head office sees performance alongside every other outlet.']]},
  capabilities:[
    ['Standardised setup','New outlets inherit the proven configuration.'],
    ['Central visibility','Head office sees real activity, not submitted numbers.'],
    ['Permission control','Decide what an outlet can change locally.'],
    ['Comparable reporting','Every outlet measured on the same basis.'],
    ['Shared brand experience','Customers get consistent service across the network.'],
    ['Territory management','Delivery coverage assigned per outlet.']],
  roles:[
    ['Franchisor','Sees every outlet and protects the brand standard.'],
    ['Franchisee','Runs their business inside a proven process.'],
    ['Outlet staff','Learn one workflow that transfers anywhere in the network.'],
    ['Customer','Gets the same service at any location.']],
  outcomes:[
    ['Consistent brand','Outlets behave the same because they run the same process.'],
    ['Honest visibility','Performance is observed, not self-reported.'],
    ['Faster openings','A new outlet starts from a working configuration.']],
  faq:[
    ['Can franchisees set their own prices?','That is a permission decision — you can allow it, restrict it, or allow it within limits.'],
    ['Can head office see outlet data directly?','Yes, that is the point of central visibility.'],
    ['Is this different from multi-store?','Multi-store assumes you own the locations. Franchise adds permission boundaries between head office and independent operators.']],
  related:[['multi-store-support.html','Multi-Store Support'],['reporting-analytics.html','Reporting'],['staff-management.html','Permissions']]},

'aggregator':{
  eyebrow:'AGGREGATOR',
  title:'Run a laundry network without building the software',
  intro:'If you take customer orders and fulfil them through partner laundries, your problem is not washing — it is order routing, partner visibility and settling who is owed what.',
  mockup:'integrations',
  problem:{title:'What aggregators struggle with',points:[
    'Orders arrive centrally but are fulfilled by someone else.',
    'No shared view of what each partner is actually doing.',
    'Commission and settlement are calculated in spreadsheets.',
    'The customer blames you for a partner’s mistake.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Orders are captured centrally and routed to a fulfilling partner.',
    'Partner activity is visible in the same system, not reported separately.',
    'Order value and commission are recorded as the work happens.',
    'The customer experience stays yours, whoever does the washing.']},
  workflow:{title:'An aggregated order',steps:[
    ['Customer orders','The booking is taken through your brand.'],
    ['Routed to partner','The order is assigned to a fulfilling laundry.'],
    ['Processed','The partner completes the work in the same system.'],
    ['Delivered','The order returns to the customer under your brand.'],
    ['Settled','Value and commission are recorded for reconciliation.']]},
  capabilities:[
    ['Central order capture','All demand arrives through one branded channel.'],
    ['Partner routing','Assign orders to the laundry that will fulfil them.'],
    ['Partner visibility','See what each partner has in progress.'],
    ['Commission tracking','Record order value and your share as work completes.'],
    ['Unified customer experience','Booking, tracking and payment stay under your brand.'],
    ['Network reporting','Compare partners on volume, turnaround and quality.']],
  roles:[
    ['Aggregator','Owns the customer and the demand, without owning plants.'],
    ['Partner laundry','Receives routed work and processes it in one system.'],
    ['Customer','Deals with one brand throughout.']],
  outcomes:[
    ['Scale without capex','Grow volume without building processing capacity.'],
    ['Real partner visibility','Performance is observed rather than reported.'],
    ['Cleaner settlement','Commission comes from recorded orders.']],
  faq:[
    ['Is the aggregator model fully supported?','Aggregator workflows depend on your specific commercial model — talk to us about how yours works before you commit.'],
    ['Can partners use their own pricing?','Partner-level pricing arrangements are configurable; confirm your model with our team.'],
    ['Who owns the customer data?','You do. Partners see the orders they fulfil.']],
  related:[['multi-store-support.html','Multi-Store Support'],['integrations-support.html','Integrations'],['contact.html','Talk to us']]},

/* ---------------- remaining feature depth (P1-08, P1-09, P1-18, P1-19) ---------------- */

'loyalty-referrals':{
  eyebrow:'LOYALTY & REFERRALS',
  title:'Make coming back the easy choice',
  intro:'Winning a laundry customer costs far more than keeping one. Points, referrals and offers give a regular customer a reason not to try the shop that opened down the road.',
  mockup:'loyalty',
  problem:{title:'Why customers drift away',points:[
    'Nothing is lost by switching to a competitor.',
    'Happy customers recommend you, but nobody tracks or rewards it.',
    'Discounts are given ad hoc at the counter, with no record.',
    'You find out a good customer left months after they did.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Points accumulate automatically as customers spend.',
    'Referrals are tracked back to the customer who made them.',
    'Coupons and offers are issued as codes, not verbal promises.',
    'Lapsing customers can be identified and contacted.']},
  workflow:{title:'The loyalty loop',steps:[
    ['Customer orders','Points accrue automatically against their record.'],
    ['Balance visible','The customer sees their points in the app.'],
    ['Reward redeemed','Points are applied against a future order.'],
    ['Referral shared','They invite someone, tracked with a code.'],
    ['Referral converts','Both sides receive the agreed reward.'],
    ['Win-back','Quiet customers get a targeted offer.']]},
  capabilities:[
    ['Points earning','Accrual rules tied to spend or order count.'],
    ['Redemption','Apply earned value against future orders.'],
    ['Referral tracking','Attribute new customers to the person who referred them.'],
    ['Coupons & promo codes','Issue trackable offers instead of counter discounts.'],
    ['Customer-visible balance','Points shown in the customer app.'],
    ['Win-back campaigns','Target customers who have stopped ordering.']],
  roles:[
    ['Customer','Earns something for staying, and for recommending you.'],
    ['Counter staff','Applies rewards from the record rather than deciding on the spot.'],
    ['Owner','Sees which offers actually produced repeat orders.']],
  outcomes:[
    ['Switching has a cost','A points balance is a reason to come back.'],
    ['Referrals become measurable','Word of mouth is tracked, not hoped for.'],
    ['Controlled discounting','Offers are issued as codes, with a record.']],
  faq:[
    ['Can we choose how points are earned?','Accrual rules are configurable — our team will help you set something sustainable.'],
    ['Can we run a referral scheme without points?','Yes, referrals and points are separate mechanisms.'],
    ['Do offers expire?','Validity is configurable per offer.']],
  related:[['customer-management.html','Customer Management'],['notifications-marketing.html','Campaigns'],['packages-plans.html','Packages & Plans']]},

'inventory':{
  eyebrow:'INVENTORY',
  title:'Know what you are using, and what it costs',
  intro:'Detergent, starch, covers, hangers and spares are bought constantly and tracked rarely. Consumables are where a laundry quietly leaks margin.',
  mockup:'inventory',
  problem:{title:'What goes untracked',points:[
    'Nobody knows current stock until something runs out mid-shift.',
    'Consumption per order is never measured, so waste is invisible.',
    'Stock is bought reactively, at whatever price is available.',
    'Each store holds its own supply with no shared view.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Items are recorded with stock in, stock out and current level.',
    'Low-stock alerts fire before you run out, not after.',
    'Store-wise stock shows where supply actually sits.',
    'Transfers between locations are recorded rather than informal.']},
  workflow:{title:'Tracking a consumable',steps:[
    ['Item defined','The consumable is added with its unit and reorder level.'],
    ['Stock in','Purchases are recorded against a vendor.'],
    ['Consumed','Usage draws down the recorded level.'],
    ['Low-stock alert','A warning fires at the reorder threshold.'],
    ['Transfer or reorder','Move stock between sites or purchase more.'],
    ['Reported','Consumption and cost are visible over time.']]},
  capabilities:[
    ['Chemicals & consumables','Track detergent, starch, solvent and finishing supplies.'],
    ['Accessories & packaging','Hangers, covers, tags and packaging materials.'],
    ['Stock in / stock out','Record purchases and consumption against items.'],
    ['Low-stock alerts','Reorder thresholds per item.'],
    ['Store-wise stock','See where supply is held across locations.'],
    ['Transfers','Move stock between stores and the plant with a record.']],
  roles:[
    ['Store staff','Records what was used and flags what is running low.'],
    ['Plant manager','Sees consumption against processing volume.'],
    ['Owner','Understands consumable cost as a share of revenue.']],
  outcomes:[
    ['Fewer stockouts','You reorder on a threshold, not on a crisis.'],
    ['Visible waste','Consumption per volume becomes measurable.'],
    ['Better buying','Purchasing is planned rather than reactive.']],
  faq:[
    ['Does this track garments too?','No — garments are tracked through tagging. Inventory covers consumables and supplies.'],
    ['Can each store hold its own stock?','Yes, stock is tracked per location with transfers between them.'],
    ['Can we link consumption to orders?','Consumption tracking depends on your configuration — discuss your process with our team.']],
  related:[['expense-management.html','Expense Management'],['factory-plant.html','Factory & Plant'],['reporting-analytics.html','Reporting']]},

'ecommerce':{
  eyebrow:'ONLINE STORE',
  title:'Sell laundry services while the shop is shut',
  intro:'Your storefront reaches the people who walk past it. An online store reaches everyone else — and takes the booking at eleven at night when your counter is closed.',
  mockup:'ecommerce',
  problem:{title:'The limits of a physical counter',points:[
    'You only reach people who pass your door.',
    'Bookings stop when the shutter comes down.',
    'Phone orders tie up staff and get recorded inconsistently.',
    'Customers cannot see prices before they commit.']},
  solution:{title:'How MOOREZY handles it',points:[
    'A branded storefront listing your services and prices.',
    'Customers book a pickup slot themselves, at any hour.',
    'Payment can be taken online before the order is collected.',
    'Orders land in the same system as counter orders.']},
  workflow:{title:'An online order',steps:[
    ['Browse','The customer sees your services and prices.'],
    ['Select garments','They build the order themselves.'],
    ['Choose a slot','Pickup date and time within your coverage.'],
    ['Pay or defer','Online payment, or settle on delivery.'],
    ['Fulfil','The order enters your normal workflow.'],
    ['Track & reorder','Status, history and repeat booking in their account.']]},
  capabilities:[
    ['Service listing','Your catalogue and prices presented publicly.'],
    ['Online booking','Self-service pickup requests with slot selection.'],
    ['Pickup slots','Only offer times and areas you can actually serve.'],
    ['Online payment','Take payment at booking or on delivery.'],
    ['Customer login','Order history, invoices and saved addresses.'],
    ['One order pipeline','Online orders behave like counter orders.']],
  roles:[
    ['Customer','Books without calling, at any time of day.'],
    ['Counter staff','Receives complete orders instead of taking them by phone.'],
    ['Owner','Gains a sales channel that does not need staffing.']],
  outcomes:[
    ['Orders outside opening hours','Demand is captured when you are closed.'],
    ['Less phone time','Bookings arrive complete and consistent.'],
    ['Wider reach','You are not limited to passing trade.']],
  faq:[
    ['Is the storefront branded to my business?','Branding options depend on your plan — our team will confirm what applies to you.'],
    ['Do I need a separate website?','The store can work alongside an existing site or stand on its own.'],
    ['Can I limit delivery areas?','Yes — territories control where pickup can be booked.']],
  related:[['customer-app.html','Customer App'],['pickup-delivery.html','Pickup & Delivery'],['online-payments.html','Online Payments']]},

'setup-migration':{
  eyebrow:'SETUP & MIGRATION',
  title:'Moving your business across, without losing it',
  intro:'The reason owners stay on a system they dislike is the fear of moving. This is what moving actually involves, so you can judge it honestly rather than guess.',
  mockup:'integrations',
  problem:{title:'Why businesses avoid switching',points:[
    'Years of customer records sit in the old system.',
    'Nobody wants to rebuild a price list by hand.',
    'Staff have to learn something new while still serving customers.',
    'A bad cutover means lost orders and angry customers.']},
  solution:{title:'How MOOREZY handles it',points:[
    'Customers, services and prices are imported rather than retyped.',
    'Configuration is done with you before you go live, not after.',
    'Staff are trained on their own role, not the whole system.',
    'Go-live is planned so the counter keeps running.']},
  workflow:{title:'A managed move',steps:[
    ['Scope','We confirm what you run today and what needs to come across.'],
    ['Configure','Services, prices, taxes and workflows are set up.'],
    ['Import','Customer, service and price data is brought in.'],
    ['Verify','You check the imported data before anything goes live.'],
    ['Train','Each role is walked through their daily workflow.'],
    ['Go live','Cutover, with support through the first days.']]},
  capabilities:[
    ['Customer import','Bring your existing customer list across.'],
    ['Service & price import','Rebuild the catalogue from your data, not by hand.'],
    ['Staff setup','Accounts, roles and permissions configured before launch.'],
    ['Configuration support','Services, taxes and workflows set up with you.'],
    ['Role-based training','Counter, driver, plant and owner each trained on their part.'],
    ['Go-live support','Help through the first days of running live.']],
  roles:[
    ['Owner','Knows what the move involves before committing to it.'],
    ['Manager','Verifies imported data is correct before cutover.'],
    ['Staff','Learn only the part of the system they use.']],
  outcomes:[
    ['History preserved','Customer relationships come with you.'],
    ['No manual rebuild','The catalogue is imported, not retyped.'],
    ['A calm cutover','The counter keeps serving through the change.']],
  faq:[
    ['What data can you import?','Customer, service and price imports are supported. Send a sample export and we will confirm precisely what comes across.'],
    ['How long does a migration take?','It depends on data volume and how many locations you run. Tell us your setup and we will give you a realistic timeline.'],
    ['What if the import is wrong?','You verify imported data before go-live, so problems are caught before they matter.']],
  related:[['integrations-support.html','Integrations & Support'],['contact.html','Talk to us'],['pricing.html','Pricing']]},

'why-moorezy':{
  eyebrow:'WHY MOOREZY',
  title:'Built for laundry, not adapted to it',
  intro:'Most laundry businesses run on software designed for retail, plus a notebook for everything it cannot do. MOOREZY starts from how a laundry actually works — garments, condition, turnaround, plant and doorstep — so the notebook is not needed.',
  mockup:'dashboard',
  problem:{title:'What generic software misses',points:[
    'Retail POS has products and quantities, not garments and condition.',
    'Nothing tracks an individual item through processing.',
    'Delivery, plant and counter each end up in separate tools.',
    'The gaps get filled with paper, memory and phone calls.']},
  solution:{title:'What a laundry-specific platform does',points:[
    'Orders are captured as garments with services, condition and due dates.',
    'Every item can be tagged and followed to handover.',
    'Counter, driver, plant and customer work from the same record.',
    'Reporting reflects laundry economics, not shop takings.']},
  workflow:{title:'How the pieces connect',steps:[
    ['One customer record','Every order, payment, preference and complaint in one place.'],
    ['One order pipeline','Counter, app and online orders behave identically.'],
    ['One item trail','Tagging follows garments through processing.'],
    ['One team, right access','Each role sees what their job needs.'],
    ['One set of numbers','Revenue, cost and margin from the same data.']]},
  capabilities:[
    ['Laundry-native ordering','Garments, services, condition and turnaround — not retail SKUs.'],
    ['Item-level tracking','Follow individual garments, not just orders.'],
    ['Every channel, one pipeline','Counter, app and online orders in the same queue.'],
    ['Roles that match the work','Counter, driver, plant, manager and owner views.'],
    ['Operations and money together','Expenses and revenue measured on the same basis.'],
    ['Room to grow','One store, many stores, a plant, franchise or B2B on one platform.']],
  roles:[
    ['Owner','Runs the business on records rather than recollection.'],
    ['Manager','Sees the day as it happens, not at the end of it.'],
    ['Staff','Works from one clear process across every branch.'],
    ['Customer','Books, tracks and pays without phoning anyone.']],
  outcomes:[
    ['The notebook disappears','What lived on paper lives in the system.'],
    ['Growth stops hurting','A second store adds volume, not a second way of working.'],
    ['Decisions on evidence','Pricing and staffing based on your own numbers.']],
  faq:[
    ['We are small. Is this overkill?','Start with the counter and payments. Delivery, tagging, plant and reporting switch on when you want them.'],
    ['We already use something. Is moving painful?','See Setup & Migration — imports, verification and a supported go-live.'],
    ['What if we run a plant and stores?','That is a core case: garments move as tracked lots and return to the right store.']],
  related:[['how-it-works.html','How it works'],['features.html','All features'],['setup-migration.html','Setup & Migration']]}

};

/* Real product screenshots, mapped to the feature they genuinely illustrate (P0-03, P3-02).
   Files live in assets/screens/ and were exported from the O So Easy app design. */
const featureShots={
'customer-app':[['home','Home & services'],['all-services','Service catalogue'],['product-select','Garment selection'],['track-order','Live order tracking'],['invoice','Itemised invoice'],['profile','Account & preferences']],
'pickup-delivery':[['pickup-schedule','Pickup date & time'],['delivery-schedule','Delivery scheduling'],['delivery-address','Address capture'],['track-order','Status tracking']],
'online-payments':[['payment-methods','Payment options'],['payment-card','Card checkout'],['payment-success','Confirmation'],['invoice','Receipt & balance']],
'packages-plans':[['subscription','Subscription tiers'],['invoice','Balance & dues']],
'pos':[['product-select','Garment & service picker'],['cart','Order cart & coupons'],['edit-product-damage','Condition capture'],['edit-product-color','Garment attributes']],
'customer-management':[['profile','Customer profile'],['edit-profile','Profile details'],['saved-address','Saved addresses']],
'printing-tags':[['invoice','Printed invoice layout']],
'reporting-analytics':[['active-order','Order register']],
'integrations-support':[['contact-us','In-app support channels']],
'ecommerce':[['home','Branded storefront'],['all-services','Service listing'],['product-select','Self-service order building'],['cart','Cart & coupons'],['payment-methods','Online payment']],
'loyalty-referrals':[['home','Offers in the customer app'],['profile','Customer account']],
'single-store':[['product-select','Order building'],['cart','Cart & pricing'],['invoice','Itemised invoice']],
'new-business':[['home','Customer-facing storefront'],['all-services','Your service catalogue']],
'b2b':[['invoice','Consolidated invoice']]
};

