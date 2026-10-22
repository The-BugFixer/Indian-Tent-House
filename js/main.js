/* Indian Tent House ITH-V8: behaviour (parda, 3D ring, build scene, language, forms). No dependencies. */
(function () {
  'use strict';
  var S = window.SITE, C = S.C, G = S.G, R = S.R;
  var $ = function (s, e) { return (e || document).querySelector(s); };
  var $$ = function (s, e) { return [].slice.call((e || document).querySelectorAll(s)); };
  var root = document.documentElement; root.classList.remove('nojs');
  var reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var lang = 'en'; try { lang = localStorage.getItem('ith-lang') || 'en'; } catch (e) {}
  var t = function (en, hi) { return lang === 'hi' ? hi : en; };
  var safe = function (u) { try { var x = new URL(u, location.href); return /^https?:$/.test(x.protocol) ? x.href : '#'; } catch (e) { return '#'; } };
  var curCtl = { pause: function () {}, resume: function () {} };

  /* ---------- contact links (values come from config.js) ---------- */
  var wa = function (txt) { return 'https://wa.me/' + String(C.wa).replace(/\D/g, '') + '?text=' + encodeURIComponent(txt || 'Hello Indian Tent House, I would like to know more about your event setups.'); };
  $$('[data-wa]').forEach(function (a) { a.href = wa(); a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-tel]').forEach(function (a) { a.href = 'tel:' + String(C[a.dataset.tel].h).replace(/[^\d+]/g, ''); });
  $$('[data-tn]').forEach(function (s) { s.textContent = C[s.dataset.tn].n; });
  $$('[data-mail]').forEach(function (a) { a.href = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(C.email) ? 'mailto:' + C.email : '#'; });
  $$('[data-map]').forEach(function (a) { a.href = safe(C.maps); });
  $$('[data-dir]').forEach(function (a) { a.href = safe(C.dir); });
  $$('[data-rev]').forEach(function (a) { a.href = safe(C.review); });
  $$('[data-gbp]').forEach(function (a) { a.href = safe(C.gbp); });
  $$('[data-t]').forEach(function (e) { e.textContent = C[e.dataset.t] || ''; });
  $('#yr').textContent = new Date().getFullYear();
  $$('a[target="_blank"]').forEach(function (a) { a.rel = 'noopener noreferrer'; });

  /* ---------- reviews ---------- */
  $('#rv').innerHTML = R.map(function (r, i) {
    return '<article class="card rv" style="--d:' + i * .08 + 's"><div class="star" aria-label="' + r.s + ' stars">' + '&#9733;'.repeat(r.s) + '</div><p class="rvq">&ldquo;' + esc(r.t) + '&rdquo;</p><span class="rvn">' + esc(r.n) + '</span><span class="rvr">' + esc(r.r) + '</span></article>';
  }).join('');

  /* ---------- language (EN / हिंदी) ---------- */
  $$('[data-hi]').forEach(function (el) { el.dataset.en = el.innerHTML; });
  function setLang(l) {
    lang = l; root.lang = l;
    $$('[data-hi]').forEach(function (el) { el.innerHTML = l === 'hi' ? el.dataset.hi : el.dataset.en; });
    $$('[data-lang]').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === l); });
    try { localStorage.setItem('ith-lang', l); } catch (e) {}
    rg.front = -1;
  }
  $$('[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });

  /* ---------- navigation ---------- */
  var nav = $('#nav'), burger = $('#burger'), hdr = $('#hdr');
  function closeNav() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  burger.addEventListener('click', function () { var o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
  $$('#nav a').forEach(function (a) { a.addEventListener('click', closeNav); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
  addEventListener('resize', function () { if (innerWidth > 1000) closeNav(); });
  $('#open').addEventListener('click', function () { scrollTo({ top: innerHeight * .9, behavior: reduced ? 'auto' : 'smooth' }); });

  /* ---------- reveal + counters ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); setTimeout(function () { e.target.classList.add('done'); }, 1100); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -5% 0px' }) : null;
  $$('.rv').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  var counted = false;
  function startCounts() {
    if (counted) return; counted = true;
    $$('[data-count]').forEach(function (el) {
      var end = +el.dataset.count, dec = +(el.dataset.dec || 0), t0 = performance.now();
      (function tick(now) { var k = clamp((now - t0) / 1500, 0, 1), v = end * (1 - Math.pow(1 - k, 3)); el.textContent = dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-IN'); if (k < 1) requestAnimationFrame(tick); })(t0);
    });
  }

  /* ---------- card tilt ---------- */
  if (fine && !reduced) $$('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; c.style.setProperty('--ry', ((x - .5) * 7).toFixed(2) + 'deg'); c.style.setProperty('--rx', ((.5 - y) * 5).toFixed(2) + 'deg'); });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });

  /* ---------- dialog ---------- */
  var dlg = $('#dlg'), dlgOpen = false;
  var labels = { wed: ['Royal Wedding', 'शाही विवाह'], stage: ['Stage & Mandap', 'स्टेज और मंडप'], sang: ['Party & Sangeet', 'पार्टी और संगीत'], furn: ['Utensils & Furnishings', 'बर्तन और साज-सामान'] };
  var lbl = function (c) { return labels[c] ? t(labels[c][0], labels[c][1]) : ''; };
  function openDlg(i) {
    var g = G[i];
    $('#dc').innerHTML = '<img src="' + esc(g.img) + '" alt="' + esc(g.t) + '"><span class="lbl">' + lbl(g.c) + ' · ' + esc(g.m) + '</span><h3>' + esc(g.t) + '</h3><p>' + esc(g.d || '') + '</p>';
    $('#dw').href = wa('Hello, I like the "' + g.t + '" setup. Please share details and a quote.');
    dlgOpen = true; curCtl.pause(); if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  $('#dx').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function () { dlgOpen = false; curCtl.resume(); });

  /* ---------- 3D photo ring ---------- */
  var wrap = $('#ringwrap'), ringEl = $('#ring'), cap = $('#rcap'), inView = false;
  var rg = { items: [], n: 0, step: 24, R: 500, ang: 0, tgt: null, vel: 0, drag: false, moved: 0, lx: 0, partial: false, front: -1, hover: false };
  var ringSrc = function (p) { return String(p).replace(/^images\/([^\/]+)\.\w+$/, 'images/ring/$1.webp'); };
  function buildRing(f) {
    rg.items = G.map(function (g, i) { return { g: g, i: i }; }).filter(function (x) { return f === 'all' || x.g.c === f; });
    var n = rg.n = rg.items.length, small = innerWidth < 700, cw = small ? 190 : 250, ch = small ? 258 : 340;
    var minStep = small ? 26 : 24; rg.partial = n * minStep < 359.5; rg.step = rg.partial ? minStep : 360 / n;
    rg.R = Math.round((cw / 2) / Math.tan(Math.PI * rg.step / 360)) + (small ? 22 : 36);
    wrap.style.setProperty('--R', rg.R + 'px'); wrap.style.setProperty('--cw', cw + 'px'); wrap.style.setProperty('--ch', ch + 'px');
    ringEl.innerHTML = rg.items.map(function (x, k) { return '<button class="rc" type="button" data-k="' + k + '" style="--a:' + (k * rg.step) + 'deg" aria-label="' + esc(x.g.t) + '"><img src="' + esc(ringSrc(x.g.img)) + '" data-o="' + esc(x.g.img) + '" alt="' + esc(x.g.t) + '" decoding="async" draggable="false"></button>'; }).join('');
    $$('.rc img', ringEl).forEach(function (im) { im.addEventListener('error', function () { if (im.dataset.o && im.getAttribute('src') !== im.dataset.o) { im.src = im.dataset.o; im.parentNode.classList.add('plain'); } }); });
    rg.ang = 0; rg.tgt = null; rg.vel = 0; rg.front = -1; rg.far = [];
  }
  function frontIdx() { var k = Math.round(-rg.ang / rg.step); return rg.partial ? clamp(k, 0, rg.n - 1) : ((k % rg.n) + rg.n) % rg.n; }
  function goTo(k) { var base = -k * rg.step; if (!rg.partial) base += 360 * Math.round((rg.ang - base) / 360); rg.tgt = base; }
  function step(d) { var k = rg.front + d; goTo(rg.partial ? clamp(k, 0, rg.n - 1) : ((k % rg.n) + rg.n) % rg.n); }
  function renderCap() {
    var x = rg.items[rg.front]; if (!x) return;
    cap.innerHTML = '<span class="lbl">' + lbl(x.g.c) + ' · ' + esc(x.g.m) + '</span><h3>' + esc(x.g.t) + '</h3><button class="btn btn-gold btn-sm" type="button" id="cv">' + t('View details', 'विवरण देखें') + '</button><p class="gnote">' + t('Items for every type of wedding are available.', 'हर प्रकार के विवाह से जुड़ा सामान उपलब्ध है।') + '</p>';
    $('#cv').addEventListener('click', function () { openDlg(x.i); });
  }
  function ringTick() {
    if (inView) {
      if (rg.tgt !== null) { rg.ang += (rg.tgt - rg.ang) * .12; if (Math.abs(rg.tgt - rg.ang) < .05) { rg.ang = rg.tgt; rg.tgt = null; } }
      else if (!rg.drag) { rg.ang += rg.vel; rg.vel *= .94; if (Math.abs(rg.vel) < .01) rg.vel = 0; if (!reduced && !rg.hover && !rg.partial && !dlgOpen) rg.ang -= .035; }
      if (rg.partial) rg.ang = clamp(rg.ang, -(rg.n - 1) * rg.step, 0);
      ringEl.style.setProperty('--ang', rg.ang.toFixed(2) + 'deg');
      var cards = ringEl.children;
      for (var i = 0; i < cards.length; i++) {
        var rel = (((i * rg.step + rg.ang) % 360) + 540) % 360 - 180, far = Math.abs(rel) > 95;
        if (rg.far[i] !== far) { rg.far[i] = far; cards[i].classList.toggle('far', far); }
      }
      var k = frontIdx();
      if (k !== rg.front) { rg.front = k; renderCap(); }
    }
    requestAnimationFrame(ringTick);
  }
  buildRing('all'); ringTick();
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { inView = es[0].isIntersecting; }, { rootMargin: '120px' }).observe(wrap); else inView = true;
  $$('.chip').forEach(function (b) { b.addEventListener('click', function () { $$('.chip').forEach(function (x) { x.classList.toggle('on', x === b); }); buildRing(b.dataset.f); }); });
  wrap.addEventListener('pointerdown', function (e) { rg.drag = true; rg.moved = 0; rg.lx = e.clientX; rg.vel = 0; rg.tgt = null; wrap.classList.add('drag'); });
  addEventListener('pointermove', function (e) { if (!rg.drag) return; var dx = e.clientX - rg.lx; rg.lx = e.clientX; rg.moved += Math.abs(dx); rg.ang += dx * .32; rg.vel = dx * .2; });
  ['pointerup', 'pointercancel'].forEach(function (ev) { addEventListener(ev, function () { rg.drag = false; wrap.classList.remove('drag'); }); });
  wrap.addEventListener('mouseenter', function () { rg.hover = true; }); wrap.addEventListener('mouseleave', function () { rg.hover = false; });
  ringEl.addEventListener('click', function (e) {
    var b = e.target.closest('.rc'); if (!b || rg.moved > 6) return;
    var k = +b.dataset.k; if (k === rg.front) openDlg(rg.items[k].i); else goTo(k);
  });
  $('#prev').addEventListener('click', function () { step(-1); }); $('#next').addEventListener('click', function () { step(1); });
  addEventListener('resize', (function () { var w = innerWidth; return function () { if (Math.abs(innerWidth - w) > 80) { w = innerWidth; buildRing($('.chip.on').dataset.f); } }; })());

  /* ---------- build scene: the mandap rises, comes alive and tilts in 3D ---------- */
  var B = $('#process'), rig = $('#rig'), NS = 'http://www.w3.org/2000/svg', bView = false, bp = 0, tiltX = 6, tiltY = 0, pmx = 0, pmy = 0;
  var stepLi = $$('#steps li'), pfill = $('#pfill'), lastIdx = -1;
  var ease = function (v) { return 1 - Math.pow(1 - v, 3); };
  var back = function (v) { var c = 1.70158; return 1 + (c + 1) * Math.pow(v - 1, 3) + c * Math.pow(v - 1, 2); };
  var g = function (id) { return document.getElementById(id); };
  var mk = function (tag, at, parent) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); parent.appendChild(e); return e; };
  var lightsG = [], P = [[60, 120], [210, 18], [360, 120]];
  for (var i = 0; i <= 10; i++) { var u = i / 10, x = (1 - u) * (1 - u) * 60 + 2 * (1 - u) * u * 210 + u * u * 360, y = (1 - u) * (1 - u) * 120 + 2 * (1 - u) * u * 18 + u * u * 120; var gg = mk('g', {}, g('lights')); var cc = mk('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 3.6, fill: '#ffd66b', 'class': 'tw' }, gg); cc.style.animationDelay = (i * .23) + 's'; lightsG.push(gg); }
  [[90, 132, 120, 170, 150, 142], [270, 142, 300, 170, 330, 132], [150, 146, 210, 190, 270, 146]].forEach(function (s, n) {
    for (var k = 1; k <= 5; k++) { var u2 = k / 6, a = (1 - u2) * (1 - u2), b2 = 2 * (1 - u2) * u2, c2 = u2 * u2; var c = mk('circle', { cx: (a * s[0] + b2 * s[2] + c2 * s[4]).toFixed(1), cy: (a * s[1] + b2 * s[3] + c2 * s[5]).toFixed(1), r: 2.4, fill: '#ffd66b', 'class': 'tw' }, g('swl')); c.style.animationDelay = ((n * 5 + k) * .17) + 's'; }
  });
  for (var s = 0; s < 12; s++) { var sp = mk('circle', { cx: 90 + Math.random() * 240, cy: 130 + Math.random() * 120, r: (1.4 + Math.random() * 1.4).toFixed(1), fill: '#f3d98b', 'class': 'spark' }, g('fx')); sp.style.animationDelay = (Math.random() * 4).toFixed(2) + 's'; sp.style.animationDuration = (3 + Math.random() * 2.5).toFixed(2) + 's'; }
  for (var q = 0; q < 7; q++) { var pe = mk('ellipse', { cx: 90 + Math.random() * 240, cy: 14, rx: 3.2, ry: 5, fill: q % 2 ? '#f2a900' : '#e8761f', 'class': 'petal' }, g('fx')); pe.style.setProperty('--dx', (Math.random() * 60 - 30).toFixed(0) + 'px'); pe.style.animationDelay = (Math.random() * 8).toFixed(2) + 's'; pe.style.animationDuration = (6 + Math.random() * 3).toFixed(2) + 's'; }
  $$('.dr').forEach(function (e) { e.style.strokeDasharray = 1; });
  var pl = [['pl1', 90], ['pl2', 150], ['pl3', 270], ['pl4', 330]];
  pl.forEach(function (a) { var e = g(a[0]); e.style.transformOrigin = a[1] + 'px 262px'; });
  g('fl1').style.transformOrigin = '62px 262px'; g('fl2').style.transformOrigin = '358px 262px';
  g('dome').style.transformOrigin = '210px 69px'; g('cl').style.transformOrigin = '105px 120px'; g('cr').style.transformOrigin = '315px 120px'; g('carpet').style.transformOrigin = '210px 273px';
  function updBuild() {
    var r = B.getBoundingClientRect(), tot = B.offsetHeight - innerHeight, p = bp = reduced ? 1 : clamp(-r.top / tot, 0, 1);
    var d = function (a, b) { return clamp((p - a) / (b - a), 0, 1); };
    g('fp').style.strokeDashoffset = 1 - d(0, .1); g('ms').style.strokeDashoffset = 1 - d(.03, .12);
    g('fl1').style.transform = 'scale(' + back(d(.05, .14)) + ')'; g('fl2').style.transform = 'scale(' + back(d(.07, .16)) + ')';
    pl.forEach(function (a, i) { g(a[0]).style.transform = 'scaleY(' + back(d(.14 + i * .035, .3 + i * .035)) + ')'; });
    g('rf').style.strokeDashoffset = 1 - d(.26, .42); g('ar').style.strokeDashoffset = 1 - d(.3, .44); g('fn').style.strokeDashoffset = 1 - d(.4, .48);
    g('dome').style.transform = 'scaleY(' + ease(d(.46, .64)) + ')';
    g('cl').style.transform = 'scaleY(' + ease(d(.52, .7)) + ')'; g('cr').style.transform = 'scaleY(' + ease(d(.54, .72)) + ')';
    g('carpet').style.transform = 'scaleX(' + ease(d(.6, .72)) + ')'; g('bkd').style.opacity = d(.5, .62);
    g('glow').style.opacity = d(.72, .84);
    lightsG.forEach(function (e, i) { e.style.opacity = d(.74 + i * .014, .78 + i * .014); });
    g('swg').style.opacity = d(.8, .88); g('chd').style.opacity = d(.84, .9); g('diy').style.opacity = d(.88, .94); g('fx').style.opacity = d(.9, 1);
    pfill.style.width = (p * 100).toFixed(1) + '%';
    var idx = p < .14 ? 0 : p < .46 ? 1 : p < .72 ? 2 : 3;
    if (idx !== lastIdx) { lastIdx = idx; stepLi.forEach(function (li, i) { li.classList.toggle('on', i === idx); }); }
  }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { bView = es[0].isIntersecting; }, { rootMargin: '100px' }).observe(B); else bView = true;
  addEventListener('pointermove', function (e) { pmx = (e.clientX / innerWidth - .5) * 2; pmy = (e.clientY / innerHeight - .5) * 2; }, { passive: true });
  (function tilt() {
    if (bView && !reduced) {
      tiltY += ((pmx * 9) + (bp - .5) * 18 - tiltY) * .06; tiltX += (6 - pmy * 4 - tiltX) * .06;
      rig.style.transform = 'translateY(' + (Math.sin(performance.now() / 1400) * 3).toFixed(2) + 'px) rotateX(' + tiltX.toFixed(2) + 'deg) rotateY(' + tiltY.toFixed(2) + 'deg)';
    }
    requestAnimationFrame(tilt);
  })();

  /* ---------- scroll driver: parda, header, garland, active link ---------- */
  var stage = $('#stage'), welcome = $('#welcome'), garland = $('#garland'), links = $$('#nav a'), secs = links.map(function (a) { return $(a.getAttribute('href')); }), lastY = scrollY, ticking = false;
  function onScroll() {
    ticking = false;
    var y = scrollY, vh = innerHeight, doc = document.documentElement.scrollHeight - vh;
    var p = reduced ? 1 : clamp(y / (vh * .8), 0, 1);
    stage.style.setProperty('--p', p.toFixed(4));
    welcome.style.visibility = p > .97 ? 'hidden' : 'visible';
    if (p > .45) startCounts();
    hdr.classList.toggle('solid', y > vh * .95);
    garland.style.width = (doc > 0 ? clamp(y / doc, 0, 1) * 100 : 0) + '%';
    var cur = 0; secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < vh * .4) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur && y > vh * .9); });
    if (inView && !reduced) { rg.ang -= (y - lastY) * .06; }
    lastY = y; updBuild();
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);

  /* ---------- royal cursor: gold diamond + ring, labels, petal burst on click (mouse only) ---------- */
  if (fine && !reduced) {
    var cur = $('#cur'), cdp = $('#cdp'), crp = $('#crp'), cl = $('span', crp), cx = -100, cy = -100, dx = cx, dy = cy, rx = cx, ry = cy, seen = false, act = true;
    root.classList.add('has-cur');
    addEventListener('pointermove', function (e) { if (e.pointerType === 'touch') return; cx = e.clientX; cy = e.clientY; if (!seen) { seen = true; dx = rx = cx; dy = ry = cy; } if (act) cur.classList.add('on'); }, { passive: true });
    document.addEventListener('pointerover', function (e) {
      var tg = e.target; if (!tg.closest) return;
      var rc = tg.closest('.rc'), dc = tg.closest('[data-cur]'), lab = rc ? (rc.classList.contains('front') ? 'View' : 'Turn') : (dc ? dc.dataset.cur : '');
      cur.classList.toggle('lab', !!lab); if (lab) cl.textContent = lab;
      cur.classList.toggle('hov', !lab && !!tg.closest('a,button,select,summary,.chip,label'));
    });
    document.addEventListener('pointerdown', function () { cur.classList.add('down'); }); document.addEventListener('pointerup', function () { cur.classList.remove('down'); });
    document.addEventListener('mouseleave', function () { cur.classList.remove('on'); }); document.addEventListener('mouseenter', function () { if (seen && act) cur.classList.add('on'); });
    document.addEventListener('click', function (e) {
      if (!act || e.detail === 0) return;
      for (var i = 0; i < 10; i++) {
        var pt = document.createElement('i'); pt.className = 'pt'; pt.style.left = e.clientX + 'px'; pt.style.top = e.clientY + 'px'; cur.appendChild(pt);
        var ang = Math.random() * Math.PI * 2, dist = 36 + Math.random() * 52;
        pt.animate([{ transform: 'translate(-50%,-50%) rotate(0deg) scale(1)', opacity: 1 }, { transform: 'translate(calc(-50% + ' + Math.cos(ang) * dist + 'px),calc(-50% + ' + (Math.sin(ang) * dist + 22) + 'px)) rotate(' + Math.random() * 360 + 'deg) scale(.3)', opacity: 0 }], { duration: 650 + Math.random() * 350, easing: 'cubic-bezier(.2,.8,.2,1)' }).onfinish = (function (n) { return function () { n.remove(); }; })(pt);
      }
    });
    curCtl.pause = function () { act = false; cur.classList.remove('on'); root.classList.remove('has-cur'); };
    curCtl.resume = function () { act = true; root.classList.add('has-cur'); };
    (function move() { dx += (cx - dx) * .55; dy += (cy - dy) * .55; rx += (cx - rx) * .17; ry += (cy - ry) * .17; cdp.style.transform = 'translate(' + dx + 'px,' + dy + 'px)'; crp.style.transform = 'translate(' + rx + 'px,' + ry + 'px)'; requestAnimationFrame(move); })();
  }

  /* ---------- About: 3D tilt on the arch photo (mouse only) ---------- */
  var arch = $('.archw .arch'), aboutS = $('#about');
  if (fine && !reduced && arch) {
    aboutS.addEventListener('pointermove', function (e) { var r = arch.getBoundingClientRect(), x = (e.clientX - (r.left + r.width / 2)) / innerWidth, y = (e.clientY - (r.top + r.height / 2)) / innerHeight; arch.style.transform = 'perspective(900px) rotateY(' + clamp(x * 26, -9, 9).toFixed(2) + 'deg) rotateX(' + clamp(-y * 20, -7, 7).toFixed(2) + 'deg)'; });
    aboutS.addEventListener('pointerleave', function () { arch.style.transform = ''; });
  }

  /* ---------- enquiry form -> WhatsApp (nothing is sent to any server) ---------- */
  var form = $('#lead'), note = $('#note');
  var one = function (s, n) { return String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n); };
  function openExternal(url) { var a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; document.body.appendChild(a); a.click(); a.remove(); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(form), d = {}; f.forEach(function (v, k) { d[k] = v; });
    if (d._gotcha) return;
    var name = one(d.n, 60);
    if (!name) { note.className = 'note err'; note.textContent = t('Please enter your name.', 'कृपया अपना नाम लिखें।'); return; }
    var gu = parseInt(d.g, 10), guests = isFinite(gu) ? clamp(gu, 1, 100000) : '-', date = /^\d{4}-\d{2}-\d{2}$/.test(d.d || '') ? d.d : '-';
    var req = String(d.r || '').replace(/[\u0000-\u0009\u000b-\u001f\u007f<>]/g, ' ').trim().slice(0, 400);
    var msg = ('*New enquiry: Indian Tent House*\nName: ' + name + '\nOccasion: ' + one(d.o, 40) + '\nDate: ' + date + '\nGuests: ' + guests + '\nVenue: ' + (one(d.v, 100) || '-') + (req ? '\n\n' + req : '')).slice(0, 1500);
    openExternal(wa(msg));
    note.className = 'note ok'; note.textContent = t('Opening WhatsApp. Press Send there to deliver your enquiry.', 'WhatsApp खुल रहा है। वहाँ Send दबाकर अपनी पूछताछ भेजें।'); form.reset();
  });

  if (lang === 'hi') setLang('hi');
  onScroll();
})();
