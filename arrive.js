/* D411 → D435 · arriving from an old Meridian address: store what it carried (sign-in, settings) unless this address already has its own, then tidy
   the URL. A file, not inline: Render's security header blocks inline scripts. Runs before the app starts. */
(function () { var h = location.hash; if (h.indexOf('m2move=') < 0) return; var m = /m2move=([^&]*)/.exec(h), to = /[&#]to=([^&]*)/.exec(h);
  try { var j = JSON.parse(decodeURIComponent(escape(atob((m && m[1] || '').replace(/-/g, '+').replace(/_/g, '/'))))); for (var k in j) { if (localStorage.getItem(k) === null) localStorage.setItem(k, j[k]); } } catch (e) { /* nothing carried */ }
  history.replaceState(null, '', location.pathname + location.search + (to ? decodeURIComponent(to[1]) : '')); })();
