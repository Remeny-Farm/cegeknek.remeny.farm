# Biztonsági HTTP-fejlécek – Cloudflare beállítás

A `cegeknek.remeny.farm` HTML dokumentumát a **GitHub Pages** szolgálja ki, de a
zóna **Cloudflare-proxizott** (a `/api/lead` route már egy Cloudflare Workerre
mutat). Mivel a GitHub Pages nem enged egyedi válaszfejléceket, a biztonsági
fejléceket a dokumentumra a **Cloudflare** oldalán tesszük rá.

A `/api/lead` Worker-válaszok már tartalmaznak biztonsági fejléceket
(`worker.js` → `jsonHeaders`); az alábbi az oldal **HTML-dokumentumára** vonatkozik.

## A beállítandó fejlécek

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://c.clarity.ms https://c.bing.com; font-src 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://c.bing.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

> **CSP megjegyzés:** a `script-src`/`style-src` `'unsafe-inline'`-t tartalmaz, mert
> az oldal jelenleg teljesen beágyazott (inline) JS/CSS-t használ. Ez elfogadható
> alap, de gyengíti a CSP-t. Későbbi szigorítás: a szkriptek külső fájlba emelése +
> hash/nonce. A `frame-ancestors 'none'` a clickjacking ellen véd (ezt csak valódi
> HTTP-fejléc tudja, `<meta>` nem).
>
> A Google Analytics és a Microsoft Clarity csak süti-hozzájárulás után tölt be;
> a CSP a Google (`googletagmanager.com`, `*.google-analytics.com`) és a
> Clarity/Bing (`www.clarity.ms`, `*.clarity.ms`, `c.bing.com`) hosztokat
> engedélyezi.

---

## A) Ajánlott: Cloudflare Transform Rule (kód nélkül)

Cloudflare dashboard → a `remeny.farm` zóna → **Rules → Transform Rules →
Modify Response Header → Create rule**.

1. **Rule name:** `Security headers – cegeknek`
2. **If incoming requests match:**
   `Hostname` `equals` `cegeknek.remeny.farm`
   (vagy: „Custom filter expression": `http.host eq "cegeknek.remeny.farm"`)
3. **Then – Set static** (minden fenti fejléchez egy sor):
   - `Strict-Transport-Security` = `max-age=63072000; includeSubDomains; preload`
   - `X-Content-Type-Options` = `nosniff`
   - `X-Frame-Options` = `DENY`
   - `Referrer-Policy` = `strict-origin-when-cross-origin`
   - `Permissions-Policy` = `camera=(), microphone=(), geolocation=()`
   - `Content-Security-Policy` = *(a fenti egysoros CSP érték)*
4. **Deploy.**

> HSTS-t a Cloudflare **SSL/TLS → Edge Certificates → HTTP Strict Transport
> Security (HSTS)** kapcsolójával is be lehet állítani; ha ott bekapcsolod, a
> Transform Rule HSTS sora elhagyható. A `preload` csak akkor maradjon bent, ha
> tudatosan vállaljátok a HSTS preload listára kerülést (nehezen visszavonható).

---

## B) Alternatíva: Cloudflare Worker a dokumentumhoz

Ha a teljes oldalt Workeren keresztül szolgálnátok ki (a jelenlegi Worker csak a
`/api/lead`-et kezeli), a következő minta ráteszi a fejléceket az origó
(GitHub Pages) válaszára:

```js
const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms; " +
    "style-src 'self' 'unsafe-inline'; img-src 'self' data: https://c.clarity.ms https://c.bing.com; font-src 'self'; " +
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://c.bing.com; " +
    "frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
};

export default {
  async fetch(request) {
    const resp = await fetch(request); // origó = GitHub Pages
    const headers = new Headers(resp.headers);
    for (const [k, v] of Object.entries(SECURITY_HEADERS)) headers.set(k, v);
    return new Response(resp.body, { status: resp.status, headers });
  },
};
```

A Transform Rule egyszerűbb és nem igényel plusz Workert, ezért az az ajánlott út.

---

## Ellenőrzés

```bash
curl -sI https://cegeknek.remeny.farm/ | grep -iE \
  'strict-transport|content-security|x-frame|x-content-type|referrer-policy|permissions-policy'
```

- Minden fenti fejléc jelenjen meg a válaszban.
- <https://securityheaders.com> → `cegeknek.remeny.farm` → cél: **A / A+**.
- Clickjacking-teszt: az oldalt egy külső `<iframe src="https://cegeknek.remeny.farm">`-be
  ágyazva a böngésző blokkolja (`frame-ancestors 'none'` + `X-Frame-Options: DENY`).
- A süti-sávban „Elfogadom" után a GA-kérések (`googletagmanager.com`,
  `*.google-analytics.com`) és a Clarity-kérések (`www.clarity.ms`,
  `*.clarity.ms`, `c.bing.com`) nem ütköznek CSP-hibába a konzolon.
