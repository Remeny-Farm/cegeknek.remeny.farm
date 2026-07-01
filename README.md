# cegeknek.remeny.farm

Statikus B2B sales landing a Remeny Farm Ceges Tyukcsapat Programhoz.

- Domain: `cegeknek.remeny.farm`
- Hosting: GitHub Pages
- Design: Liget / Remeny Farm statikus landing vizualis nyelv

## Lead capture

Az ajanlatkero form nem kozvetlen MailerLite API-t hiv a frontendbol, mert az API kulcs nem kerulhet publikus HTML-be.

- Frontend endpoint: `POST /api/lead`
- Cloudflare Worker: `cegeknek-remeny-farm-leads`
- Worker fajl: `worker.js`
- Route: `cegeknek.remeny.farm/api/lead`
- MailerLite group: `Ceges Tyukcsapat - Erdeklodok` (`191694239954896441`)
- Custom fields: dolgozoi letszam, iroda helyszin, csomag, nezopont, konstruktori bajnoksag, adatkezeles, megjegyzes
- FONTOS: a `ceges_tyukcsapat_nezopont` es `ceges_tyukcsapat_adatkezeles` mezoket a MailerLite-ban (Subscribers -> Fields) letre kell hozni, kulonben az API csendben eldobja az erteket.
- Secret binding: `MAILERLITE_API_KEY`

A `cegeknek.remeny.farm` DNS rekord Cloudflare proxied modban van, hogy a Worker route fusson, mikozben a statikus oldalt tovabbra is a GitHub Pages szolgalja ki.

## Jogi / GDPR megfeleles

- **Suti-hozzajarulas:** a Google Analytics (`G-5VBCSBQPNL`) csak hozzajarulas utan tolt be. Google Consent Mode v2 alapertelmezetten mindent tilt (`analytics_storage: denied`); a lablecben megjeleno suti-sav "Elfogadom" gombja engedelyezi (`window.rfEnableAnalytics`). A dontes a `rf-cookie-consent` localStorage kulcsban tarolodik. A lablec "Suti beallitasok" linkje (`data-cookie-settings`) barmikor ujranyitja a savot.
- **Self-hosted betutipusok:** az Inter es IBM Plex Mono a `fonts/` mappabol tolt be (nincs Google Fonts CDN -> nincs latogatoi IP a Google fele). A `@font-face` szabalyok az `index.html` inline `<style>` blokkjaban vannak; latin + latin-ext subset (magyar ekezetek).
- **Impresszum:** `impresszum.html` (Ekertv. szerinti cegadatok).
- **Suti tajekoztato:** `suti-tajekoztato.html`.
- **Adatvedelmi tajekoztato:** kulso oldal, `remenyfarm.hu/adatvedelem/`. Ellenorizni, hogy nevesiti a MailerLite-ot es a Google Analytics-et.
- **Worker consent-gate:** a `/api/lead` `privacyConsent: false` eseten `422 consent_required` valaszt ad, nem tovabbit MailerLite-ba.
- **Biztonsagi fejlecek:** a HTML dokumentumra Cloudflare-en at (Transform Rule vagy Worker) — lasd `cloudflare-headers.md`. A `worker.js` valaszai mar tartalmaznak biztonsagi fejleceket.

Megjegyzes: a jogi szovegek (`impresszum.html`, `suti-tajekoztato.html`) tervezetek, publikalas elott jogi/adatvedelmi atnezes ajanlott. Az adoszam (`26667089-2-10`) a hivatalos cegadatokkal osszevetendo.
