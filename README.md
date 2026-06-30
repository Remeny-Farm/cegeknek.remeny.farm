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
- Custom fields: dolgozoi letszam, iroda helyszin, csomag, konstruktori bajnoksag, megjegyzes
- Secret binding: `MAILERLITE_API_KEY`

A `cegeknek.remeny.farm` DNS rekord Cloudflare proxied modban van, hogy a Worker route fusson, mikozben a statikus oldalt tovabbra is a GitHub Pages szolgalja ki.
