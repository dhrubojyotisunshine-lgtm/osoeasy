/* ==========================================================================
   MOOREZY MOTION ENGINE
   Loaded last on every page. Tags known components with the shared `data-m`
   utilities from motion.css, then drives them from ONE IntersectionObserver
   and ONE requestAnimationFrame loop that only runs while something is visible.

   Design rules held here:
     - no animation library, ~4KB of plain JS
     - nothing observes or animates off-screen
     - every element is unobserved once it has settled
     - parallax and tilt are desktop + fine-pointer only
     - prefers-reduced-motion exits before anything is armed
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktop = window.matchMedia('(min-width: 1024px)');
  var finePointer = window.matchMedia('(pointer: fine)');

  /* ---------------------------------------------------------------------
     What gets animated, and how. Deliberately not "everything" — these are
     the elements that carry hierarchy or explain the product. Anything not
     listed stays still on purpose.
     [selector, variant, stagger?]  stagger:true -> index each sibling
     --------------------------------------------------------------------- */
  var PLAN = [
    /* Hero — headline, then supporting copy, then CTAs, then the visual */
    ['.hero-copy > *', 'up', true],
    ['.prod-hero-grid > div:first-child > *', 'up', true],
    ['.prod-hero .prod-head.centered > *', 'up', true],
    ['.hero-visual', 'rise', false],
    ['.prod-hero-visual', 'rise', false],
    ['.hero-image-shell', 'scale', false],

    /* Section leads set the rhythm for the block that follows */
    ['.prod-head', 'up', false],
    ['.section-heading', 'up', false],
    ['.subpage-heading', 'up', false],

    /* Product understanding */
    ['.flow > .flow-step', 'rise', true],
    ['.shot-row > .shot', 'rise', true],
    ['.eco-wrap', 'scale', false],
    ['.ps-grid > .ps-card', 'up', true],

    /* Feature and content grids */
    ['.feature-grid > .feature-card', 'rise', true],
    ['.cap-grid > .cap', 'up', true],
    ['.role-grid > .role', 'up', true],
    ['.out-grid > .out', 'up', true],
    ['.benefit-grid > .benefit-card', 'up', true],
    ['.value-row > .value-chip', 'up', true],
    ['.commerce-card', 'up', true],
    ['.mini-solutions > article', 'up', true],
    ['.blog-grid > .blog-card', 'up', true],
    ['.testimonial-cards > .review', 'up', true],
    ['.pricing-grid > .price-card', 'rise', true],
    ['.plan-table-wrap', 'fade', false],

    /* Closing blocks */
    ['.faq-list > .faq-item', 'up', true],
    ['.faq-jump', 'fade', false],
    ['.related', 'up', false],
    ['.contact-grid > *', 'up', true],
    ['.sub-cta .container > *', 'up', true],
    ['.final-cta .container > *', 'up', true]
  ];

  /* Mask/wipe is reserved for a single moment per page so it stays special:
     the first product-screenshot heading. */
  var MASK = '.prod-section .prod-head.centered';

  function tag(el, variant, index) {
    if (el.hasAttribute('data-m')) return;
    el.setAttribute('data-m', variant);
    if (index) el.style.setProperty('--m-i', index);
    el.classList.add('m-armed');
  }

  /* Stagger must restart inside each container. Indexing across the whole
     document meant a second .cap-grid began at index 6+, hit the cap, and every
     card there shared one long delay instead of cascading. */
  function grouped(sel) {
    var split = sel.lastIndexOf('>');
    if (split < 0) return [document.querySelectorAll(sel)];
    var parentSel = sel.slice(0, split).trim();
    var childSel = sel.slice(split + 1).trim();
    var parents = document.querySelectorAll(parentSel);
    var groups = [];
    for (var i = 0; i < parents.length; i++) {
      groups.push(parents[i].querySelectorAll(':scope > ' + childSel));
    }
    return groups;
  }

  function plan() {
    PLAN.forEach(function (rule) {
      grouped(rule[0]).forEach(function (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        /* skip anything already handled by the legacy .reveal path */
        if (n.classList.contains('reveal')) continue;
        /* If the parent is a legacy .reveal, hand over to the staggered children
           so the group animates once rather than fading and staggering together. */
        var par = n.parentElement;
        if (par && par.classList.contains('reveal')) {
          par.classList.remove('reveal');
          par.classList.add('visible');
        }
        /* never hide the skip link or chrome */
        if (n.closest('.site-header') || n.closest('footer')) continue;
        tag(n, rule[1], rule[2] ? Math.min(i, 6) : 0);   /* cap the cascade: 6 x 64ms = 384ms worst case */
      }
      });
    });
    var lead = document.querySelector(MASK);
    if (lead && lead.getAttribute('data-m') === 'up') lead.setAttribute('data-m', 'mask');
  }

  /* ---------------------------------------------------------------------
     Reveal observer — one instance, unobserves on settle, drops will-change
     when the transition finishes so nothing keeps a compositor layer alive.
     --------------------------------------------------------------------- */
  function settle(el) {
    el.classList.add('m-in');
    el.classList.add('visible');            // keeps legacy .reveal styling in sync
    var done = function () {
      el.classList.remove('m-armed');
      el.removeEventListener('transitionend', done);
    };
    el.addEventListener('transitionend', done);
    setTimeout(done, 1400);                 // fallback if no transition fires
  }

  /* Rows that scroll horizontally (.flow, .shot-row on mobile) clip their children,
     so those children never intersect the viewport until the row is swiped. They are
     revealed with their row instead — the CSS --m-i delays keep the cascade. */
  var HROWS = '.flow, .shot-row';

  function startReveal() {
    var pending = [].slice.call(document.querySelectorAll('[data-m]:not(.m-in), .reveal:not(.visible)'));
    if (!pending.length) return;
    if (!('IntersectionObserver' in window)) { pending.forEach(settle); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        settle(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });

    var rowIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var kids = e.target.querySelectorAll('[data-m]:not(.m-in), .reveal:not(.visible)');
        for (var k = 0; k < kids.length; k++) settle(kids[k]);
        rowIO.unobserve(e.target);
      });
    }, { threshold: 0.05 });
    var rows = document.querySelectorAll(HROWS);
    for (var r = 0; r < rows.length; r++) rowIO.observe(rows[r]);

    pending.forEach(function (el) { if (!el.closest(HROWS)) io.observe(el); });

    /* Catch-up: a fast flick or an End-key jump moves the viewport past elements
       entirely, so they never intersect and would stay hidden. On each scroll frame,
       settle anything the viewport has already reached. Detaches once nothing is left. */
    var ticking = false;
    function sweepPending() {
      ticking = false;
      var left = [];
      for (var i = 0; i < pending.length; i++) {
        var el = pending[i];
        if (el.classList.contains('m-in') || el.classList.contains('visible')) continue;
        if (el.getBoundingClientRect().top < window.innerHeight) settle(el);
        else left.push(el);
      }
      pending = left;
      if (!pending.length) window.removeEventListener('scroll', onScroll);
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(sweepPending); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------------------
     Workflow stage emphasis — marks the stage nearest the reading position
     so the sequence explains itself as you scroll past it.
     --------------------------------------------------------------------- */
  function workflow() {
    var steps = document.querySelectorAll('.flow > .flow-step');
    if (!steps.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target.classList.toggle('m-active', e.isIntersecting && e.intersectionRatio > 0.66);
      });
    }, { threshold: [0, 0.66, 1] });
    for (var i = 0; i < steps.length; i++) io.observe(steps[i]);
  }

  /* ---------------------------------------------------------------------
     Ambient CTA drift — the animation is declared paused in CSS and only
     runs while the section is actually on screen.
     --------------------------------------------------------------------- */
  function ambient() {
    var blocks = document.querySelectorAll('.final-cta, .sub-cta');
    if (!blocks.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('m-live', e.isIntersecting); });
    }, { threshold: 0.05 });
    for (var i = 0; i < blocks.length; i++) io.observe(blocks[i]);
  }

  /* ---------------------------------------------------------------------
     Parallax — desktop only, tiny amplitude, and the rAF loop is only alive
     while at least one parallax element is on screen.
     --------------------------------------------------------------------- */
  function parallax() {
    if (!desktop.matches) return;
    var els = document.querySelectorAll('.hero-orb, .cta-orb, .page-orb');
    if (!els.length) return;

    var live = [], ticking = false;
    for (var i = 0; i < els.length; i++) {
      els[i].setAttribute('data-parallax', '');
      els[i].dataset.mRate = (i % 2 ? 0.06 : -0.045);
    }

    function frame() {
      ticking = false;
      var vh = window.innerHeight;
      for (var i = 0; i < live.length; i++) {
        var el = live[i];
        var r = el.getBoundingClientRect();
        var progress = (r.top + r.height / 2 - vh / 2) / vh;   // -1 .. 1 ish
        var shift = Math.max(-34, Math.min(34, progress * vh * el.dataset.mRate));
        el.style.setProperty('--m-p', shift.toFixed(1) + 'px');
      }
      if (live.length) request();
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var idx = live.indexOf(e.target);
        if (e.isIntersecting && idx === -1) live.push(e.target);
        else if (!e.isIntersecting && idx > -1) live.splice(idx, 1);
      });
      if (live.length) request();
    }, { rootMargin: '10% 0px' });
    for (var k = 0; k < els.length; k++) io.observe(els[k]);
  }

  /* ---------------------------------------------------------------------
     Screenshot tilt — desktop + mouse only, capped at 5deg. Gives the real
     app screens a sense of being physical objects without becoming a toy.
     --------------------------------------------------------------------- */
  function tilt() {
    if (!desktop.matches || !finePointer.matches) return;
    var frames = document.querySelectorAll('.shot-frame');
    for (var i = 0; i < frames.length; i++) {
      (function (el) {
        el.addEventListener('pointermove', function (ev) {
          var r = el.getBoundingClientRect();
          var px = (ev.clientX - r.left) / r.width - 0.5;
          var py = (ev.clientY - r.top) / r.height - 0.5;
          el.style.setProperty('--m-ry', (px * 9).toFixed(2) + 'deg');
          el.style.setProperty('--m-rx', (-py * 6).toFixed(2) + 'deg');
          el.classList.add('m-tilt');
        });
        el.addEventListener('pointerleave', function () {
          el.classList.remove('m-tilt');
          el.style.removeProperty('--m-rx');
          el.style.removeProperty('--m-ry');
        });
      })(frames[i]);
    }
  }

  /* --------------------------------------------------------------------- */
  function init() {
    if (reduced.matches) {
      /* Content must be visible immediately; CSS also enforces this. */
      var all = document.querySelectorAll('.reveal');
      for (var i = 0; i < all.length; i++) all[i].classList.add('visible');
      return;
    }
    plan();
    startReveal();
    /* Failsafe — if an observer never fires (odd browser, bfcache restore,
       print), nothing may remain invisible. */
    setTimeout(function () {
      var stuck = document.querySelectorAll('[data-m]:not(.m-in)');
      for (var i = 0; i < stuck.length; i++) settle(stuck[i]);
    }, 2600);
    workflow();
    ambient();
    parallax();
    tilt();
  }

  /* Page scripts render synchronously before this file, so the DOM is ready. */
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  /* Re-arm if a preference change happens mid-session. */
  if (reduced.addEventListener) reduced.addEventListener('change', function () { location.reload(); });

  /* Expose for any late-rendered content. */
  window.MZMotion = { rescan: function () { if (!reduced.matches) { plan(); startReveal(); } } };
  window.initReveal = window.MZMotion.rescan;
})();
