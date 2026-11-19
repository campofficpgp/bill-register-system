/*! Bill Register — professional layout: grouped left menu, breadcrumb, tidy toolbar, one button style. Screen only; features unchanged. */
(function(){
 'use strict';
 function init(){
  if(document.getElementById('brx-css')) return;
  var G = [
    ['acc','Accounts','حسابات',['bill','cash','stock','ledger']],
    ['rep','Reports','رپورٹس',['reports','monthly','statement','budget','es']],
    ['pay','Pay & Staff','تنخواہ و عملہ',['payfix','bm26','bm26s','employees','leave','attendance']],
    ['oth','Other','دیگر',['fieldsmgr','help']]
  ];
  var IC = {bill:'ic-receipt',cash:'ic-money',stock:'ic-box',ledger:'ic-book',reports:'ic-chart',monthly:'ic-calendar',statement:'ic-file',budget:'ic-calc',es:'ic-scale',
    payfix:'ic-sliders',bm26:'ic-list',bm26s:'ic-listcheck',employees:'ic-users',leave:'ic-calclock',attendance:'ic-usercheck',fieldsmgr:'ic-gear',help:'ic-help'};
  function svg(id){ return '<svg class="gi" aria-hidden="true" focusable="false"><use href="#'+id+'"/></svg>'; }
  var css = document.createElement('style'); css.id = 'brx-css';
  css.textContent = [
  /* layout: left section menu + work area */
  '@media screen and (min-width:961px){',
  '.shell.brx-shell{display:grid!important;grid-template-columns:236px minmax(0,1fr)!important;gap:20px!important;align-items:start!important;padding:16px 20px!important}',
  'html body nav.sidenav.brx{position:sticky!important;top:12px!important;display:block!important;flex-wrap:nowrap!important;overflow:auto!important;max-height:calc(100vh - 24px);padding:10px 8px!important;background:#fff!important;border:1px solid #e2e8f0!important;border-radius:14px!important;box-shadow:0 4px 14px rgba(15,23,42,.06)!important}',
  'html body nav.sidenav.brx>.tab-btn{display:flex!important;align-items:center;gap:10px;width:100%;padding:8px 10px!important;margin:1px 0!important;border:0!important;border-radius:8px!important;background:transparent!important;color:#334155!important;font-size:13.5px!important;font-weight:500!important;text-align:left;box-shadow:none!important;white-space:normal!important}',
  'html body nav.sidenav.brx>.tab-btn[style*="none"]{display:none!important}',
  'html body nav.sidenav.brx>.tab-btn:hover{background:#f1f5f9!important;color:#0f172a!important}',
  'html body nav.sidenav.brx>.tab-btn.active{background:#e6f4f1!important;color:#0f5e57!important;font-weight:700!important;box-shadow:inset 3px 0 0 #0f766e!important}',
  'html body nav.sidenav.brx>.tab-btn.active *{color:#0f5e57!important}',
  '.brx .brx-ic{flex:none;width:18px;height:18px;display:inline-flex;color:#64748b}.brx .brx-ic svg{width:18px;height:18px}',
  '.brx .tab-btn.active .brx-ic{color:#0f766e}',
  '.brx .brx-head{font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;padding:12px 10px 4px;display:flex;justify-content:space-between}',
  '.brx .brx-head:first-child{padding-top:4px}.brx .brx-head .u{letter-spacing:0;text-transform:none;font-weight:600;font-family:"Noto Nastaliq Urdu","Jameel Noori Nastaleeq",serif}',
  '.brx .tab-btn .dot{display:none!important}',
  '.brx-crumb{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#64748b;margin:0 0 10px}.brx-crumb b{color:#0f172a}.brx-crumb .sep{opacity:.5}',
  /* toolbar: one tidy card */
  '.tool-strip.br-toolbar{background:#fff!important;border:1px solid #e2e8f0!important;border-radius:14px!important;margin:12px 20px 0!important;padding:10px 14px!important;box-shadow:0 2px 8px rgba(15,23,42,.04)!important;display:flex!important;align-items:center!important;gap:12px!important;flex-wrap:wrap!important}',
  '.tool-strip.br-toolbar>.sub{display:none!important}',
  '.tool-strip .br-tools{display:flex!important;align-items:flex-end!important;gap:10px!important;flex-wrap:wrap!important;flex:1 1 auto}',
  '.tool-strip .br-tools label,.tool-strip .office-field label{font-size:11px!important;font-weight:700!important;color:#64748b!important;text-transform:uppercase;letter-spacing:.04em}',
  '.tool-strip .userbar{margin-left:auto!important;display:flex!important;align-items:center!important;gap:8px!important;padding-left:12px;border-left:1px solid #e2e8f0}',
  '.shell.brx-shell>main{padding:4px 0 70px!important}.shell.brx-shell .panel-head{flex-wrap:nowrap!important;align-items:flex-start!important;gap:16px!important}.shell.brx-shell .panel-head>div:first-child{min-width:0;flex:1}.shell.brx-shell .br-head-actions{flex:none;display:flex;align-items:center;gap:8px}',
  'html body nav.sidenav.brx{top:56px!important;max-height:calc(100vh - 70px)!important}',
  'html body nav.sidenav.brx>.tab-btn{width:100%!important;max-width:none!important;min-width:0!important;box-sizing:border-box!important;justify-content:flex-start!important;text-align:left!important}',
  '.brx-find{padding:2px 2px 6px}.brx-find input{width:100%;box-sizing:border-box;height:34px;border:1px solid #e2e8f0;border-radius:8px;padding:0 10px;font-size:13px;background:#f8fafc}.brx-find input:focus{outline:none;border-color:#0f766e;box-shadow:0 0 0 3px rgba(15,118,110,.15);background:#fff}html body nav.sidenav.brx>.brx-hide{display:none!important}',
  '.brx-ub{display:flex!important;align-items:center;gap:6px;margin:0 8px 0 0!important;padding:0!important;border:0!important;background:none!important;color:#fff!important;font-size:12px}.brx-ub>span:first-child{color:rgba(255,255,255,.85)!important}.brx-ub b{color:#fff!important}.brx-ub .btn,.brx-ub button{min-height:30px!important;padding:4px 10px!important;font-size:12px!important;background:rgba(255,255,255,.12)!important;border:1px solid rgba(255,255,255,.3)!important;color:#fff!important;border-radius:8px!important;text-decoration:none!important}.brx-ub .btn:hover,.brx-ub button:hover{background:rgba(255,255,255,.22)!important}.tool-strip.br-toolbar{padding:8px 14px!important}',
  '}',
  '@media screen and (max-width:960px){.brx .brx-head,.brx .brx-find,.brx-crumb{display:none!important}.brx .brx-ic{width:15px;height:15px}.brx .brx-ic svg{width:15px;height:15px}}',
  '@media print{.brx-crumb,.brx-find,.brx-head{display:none!important}}',
  /* buttons: one family everywhere in the Bill Register */
  '.shell main .btn,.shell main button.btn,.tool-strip button,.tool-strip .btn{border-radius:8px!important;font-weight:600!important;min-height:34px;transition:background .15s,border-color .15s,box-shadow .15s}',
  '.shell main .btn.ghost,.shell main .btn.secondary,.tool-strip .btn.ghost{background:#fff!important;color:#0f5e57!important;border:1px solid #cbd5e1!important}',
  '.shell main .btn.ghost:hover,.shell main .btn.secondary:hover,.tool-strip .btn.ghost:hover{border-color:#0f766e!important;background:#f0fdfa!important}',
  '.shell main .btn.brx-danger{color:#b42318!important;border-color:#f3c3bd!important;background:#fff!important}.shell main .btn.brx-danger:hover{background:#fef3f2!important;border-color:#b42318!important}',
  /* sub-tabs inside a tab: segmented control */
  '.t30-subtabs,.pf-subtabs,.aom-subtabs{display:inline-flex!important;gap:4px!important;padding:4px!important;background:#eef2f6!important;border-radius:10px!important;border:1px solid #e2e8f0!important}',
  '.t30-sub,.pf-sub,.aom-sub{border:0!important;background:transparent!important;color:#475569!important;border-radius:7px!important;padding:7px 14px!important;font-weight:600!important;box-shadow:none!important}',
  '.t30-sub.active,.pf-sub.active,.aom-sub.active{background:#fff!important;color:#0f5e57!important;box-shadow:0 1px 3px rgba(15,23,42,.15)!important}'
  ].join('\n');
  document.head.appendChild(css);

  var nav = document.querySelector('nav.sidenav'); if(!nav) return;
  nav.classList.add('brx'); nav.parentNode.classList.add('brx-shell');
  var btns = {}; Array.prototype.forEach.call(nav.querySelectorAll('.tab-btn'), function(b){ btns[b.getAttribute('data-tab')] = b; });
  G.forEach(function(g){
    var h = document.createElement('div'); h.className = 'brx-head'; h.setAttribute('data-g', g[0]);
    h.innerHTML = '<span>' + g[1] + '</span><span class="u">' + g[2] + '</span>';
    nav.appendChild(h);
    g[3].forEach(function(k){ var b = btns[k]; if(!b) return; nav.appendChild(b); delete btns[k];
      if(!b.querySelector('.brx-ic')){ var s = document.createElement('span'); s.className = 'brx-ic'; s.innerHTML = svg(IC[k] || 'ic-file'); b.insertBefore(s, b.firstChild); }
      b.setAttribute('data-g', g[0]);
    });
  });
  Object.keys(btns).forEach(function(k){ nav.appendChild(btns[k]); });
  /* breadcrumb above the work area */
  var main = document.querySelector('.shell > main');
  var cr = document.createElement('div'); cr.className = 'brx-crumb'; main.insertBefore(cr, main.firstChild);
  function crumb(){
    var a = nav.querySelector('.tab-btn.active'); if(!a) return;
    var g = G.filter(function(x){ return x[0] === a.getAttribute('data-g'); })[0];
    var c = [].filter.call(a.querySelectorAll('.en,.ur,[data-i18n]'), function(x){ return x.offsetParent !== null; })[0] || a.querySelector('.en') || a; var nm = c.textContent.trim();
    cr.innerHTML = '<span>Bill Register</span><span class="sep">›</span><span>' + (g ? g[1] + ' · ' + g[2] : '') + '</span><span class="sep">›</span><b>' + nm + '</b>';
  }
  crumb(); nav.addEventListener('click', function(){ setTimeout(crumb, 50); });
  /* delete-type buttons get a red outline so they are never confused with normal buttons */
  function danger(){ Array.prototype.forEach.call(document.querySelectorAll('.shell main .btn'), function(b){ if(/^\s*(🗑|delete|remove|clear account|حذف|ڈیلیٹ)/i.test(b.textContent)) b.classList.add('brx-danger'); }); }
  danger(); setTimeout(danger, 1500);
  /* find-a-tab box */
  var w = document.createElement('div'); w.className = 'brx-find';
  w.innerHTML = '<input type="search" placeholder="Find a tab · ٹیب تلاش کریں" aria-label="Find a tab">';
  nav.insertBefore(w, nav.firstChild);
  var inp = w.querySelector('input');
  inp.addEventListener('input', function(){
    var q = inp.value.trim().toLowerCase(), shown = {};
    Array.prototype.forEach.call(nav.querySelectorAll('.tab-btn'), function(b){ if(b.style.display === 'none') return; var ok = !q || b.textContent.toLowerCase().indexOf(q) >= 0; b.classList.toggle('brx-hide', !ok); if(ok) shown[b.getAttribute('data-g')] = 1; });
    Array.prototype.forEach.call(nav.querySelectorAll('.brx-head'), function(h){ h.classList.toggle('brx-hide', !!q && !shown[h.getAttribute('data-g')]); });
  });
  inp.addEventListener('keydown', function(e){ if(e.key !== 'Enter') return; var f = [].filter.call(nav.querySelectorAll('.tab-btn'), function(b){ return b.offsetParent && !b.classList.contains('brx-hide'); })[0]; if(f){ f.click(); inp.value = ''; inp.dispatchEvent(new Event('input')); } });
  /* signed-in name, Home, Ads, Log out go up into the header bar (wide screens) */
  if(window.innerWidth >= 961){ var ub = document.querySelector('.tool-strip .userbar'), lb = document.getElementById('langBtn'), rc = lb && lb.parentElement; if(ub && rc && !rc.contains(ub)){ rc.insertBefore(ub, lb); ub.classList.add('brx-ub'); } }
 }
 if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

