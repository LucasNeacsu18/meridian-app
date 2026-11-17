/* D411 · MERIDIAN MOVED (loaded as a file, not inline: Render's security header blocks inline scripts) to https://lucasneacsu18.github.io/ (Apple Pay works there). This page forwards everyone, keeping where they were going
   (path, ?query from Whop/Phantom, #route) and carrying what this address had saved on the device — the sign-in and the settings — in the URL
   fragment (fragments never reach any server), so nobody is signed out or loses settings. Email sign-in links (#access_token…) pass straight through. */
(function () {
  var T = 'https://lucasneacsu18.github.io/', h = location.hash || '', path = location.pathname.replace(/^\/meridian-app/, '').replace(/^\//, '');
  if (/access_token=|refresh_token=|error_description=|type=recovery|type=signup/.test(h)) { location.replace(T + path + location.search + h); return; }
  var keep = {};
  try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (!k) continue;
    if (/^(sb-|meridian|m2|hud|mira|app\.|tx\.|asset|assets|coin|obs|lib|intel|rail|home)/.test(k) && !/quotes|cache|snapshot/i.test(k)) { var v = localStorage.getItem(k); if (v !== null && v.length < 20000) keep[k] = v; } } } catch (e) { /* private mode */ }
  var p = ''; try { p = btoa(unescape(encodeURIComponent(JSON.stringify(keep)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); } catch (e) { p = ''; }
  location.replace(T + path + location.search + '#m2move=' + p + (h ? '&to=' + encodeURIComponent(h) : ''));
})();
