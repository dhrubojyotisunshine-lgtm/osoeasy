const featureMenu=`<div class="dropdown-menu mega feature-menu">
  <a href="features.html"><b>Overview</b><small>Explore the complete platform</small></a>
  <a href="features.html#pos">Point of Sale</a>
  <a href="features.html#pickup-delivery">Pickup & Delivery</a>
  <a href="features.html#staff-management">Staff Management</a>
  <a href="features.html#attendance">Attendance Management</a>
  <a href="features.html#expense-management">Expense Management</a>
  <a href="features.html#store-management">Store Management</a>
  <a href="features.html#multi-store-support">Multi-Store Support</a>
  <a href="features.html#customer-management">Customer Management</a>
  <a href="features.html#reporting-analytics">Reporting & Analytics</a>
  <a href="features.html#online-payments">Online Payments</a>
  <a href="features.html#packages-plans">Packages & Plans</a>
  <a href="features.html#printing-tags">Printing & Tags</a>
  <a href="features.html#notifications-marketing">Notifications & Marketing</a>
  <a href="features.html#integrations-support">Integrations & 24/7 Support</a>
</div>`;

class SiteHeader extends HTMLElement{
  connectedCallback(){this.innerHTML=`<header class="site-header scrolled"><div class="container nav-wrap">
    <a class="brand" href="index.html"><img class="brand-logo" src="assets/moorezy-logo-white.png" alt="MOOREZY"></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-item dropdown"><button class="nav-link dropdown-toggle" aria-expanded="false">Solutions <span>⌄</span></button><div class="dropdown-menu"><a href="why-moorezy.html"><b>Why MOOREZY?</b><small>Discover the platform</small></a><a href="single-store.html">Single Store</a><a href="multi-store.html">Multi Store</a><a href="new-business.html">New Business</a><a href="b2b.html">B2B Business</a></div></div>
      <div class="nav-item dropdown"><button class="nav-link dropdown-toggle" aria-expanded="false">Features <span>⌄</span></button>${featureMenu}</div>
      <a class="nav-link" href="testimonials.html">Testimonials</a><a class="nav-link" href="pricing.html">Pricing</a><a class="nav-link" href="blogs.html">Blogs</a><a class="nav-link" href="contact.html">Contact</a>
    </nav>
    <div class="nav-actions"><a class="btn btn-ghost" href="login.html">Log in</a><a class="btn btn-primary" href="signup.html">Start free</a></div>
  </div></header>`}
}

class SiteFooter extends HTMLElement{
  connectedCallback(){this.innerHTML=`<footer><div class="container footer-grid"><div class="footer-brand"><a class="brand brand-light" href="index.html"><img class="brand-logo" src="assets/moorezy-logo-white.png" alt="MOOREZY"></a><p>The operating system for modern laundry and dry-cleaning businesses.</p></div><div><h3>Solutions</h3><a href="single-store.html">Single Store</a><a href="multi-store.html">Multi Store</a><a href="new-business.html">New Business</a><a href="b2b.html">B2B</a></div><div><h3>Product</h3><a href="features.html">Features</a><a href="pricing.html">Pricing</a><a href="testimonials.html">Testimonials</a></div><div><h3>Company</h3><a href="why-moorezy.html">About</a><a href="contact.html">Contact</a><a href="blogs.html">Blog</a></div><div><h3>Ready to grow?</h3><p>Explore every feature free for 14 days.</p><a class="btn btn-primary" href="signup.html">Start free trial →</a></div></div><div class="container footer-bottom"><span>© 2026 MOOREZY. All rights reserved.</span><div><a href="privacy-policy.html">Privacy</a><a href="terms-and-conditions.html">Terms</a></div></div></footer>`}
}

customElements.define('site-header',SiteHeader);
customElements.define('site-footer',SiteFooter);
