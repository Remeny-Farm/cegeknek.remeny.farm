# Product

## Register

brand

## Users

Hungarian B2B decision-makers at roughly 30 to 250-person companies, evaluating an
unusual premium program for their teams. Three overlapping buyers, one page:

- **HR / employer-branding leads** who want a benefit people actually talk about on Monday, not the tenth gift voucher.
- **Marketing / brand managers** who want content and brand presence that produces itself, on a channel their audience already watches.
- **ESG / sustainability leads** who need real, measured, auditable work, not "stock CSR" they can be called out for.
- **Founders / executives** signing off on a 12-month, capacity-limited commitment.

Their context: skeptical, comparing this to conventional perks and agency campaigns,
looking for proof before they'll believe a farm-based corporate program is real,
premium, and defensible internally (procurement, HR, comms, legal).

## Product Purpose

A single-page Hungarian sales landing for Remény Farm's **Céges Tyúkcsapat Program**
(Corporate Hen-Flock Program). Companies lease a branded, free-range **mobile coop**
for 12 months: their logo travels on a coop that rotates across regenerating pasture,
a live webcam into the office, bi-weekly "egg day" delivery on 30-count trays,
employee adoption codes, and custom company egg-stamping. It bundles employer
branding, marketing, and ESG on top of certified regenerative farm work with
EOV-based ecological monitoring.

The page exists to convert skeptical B2B visitors into **qualified leads**: form
submissions routed through a Cloudflare Worker to MailerLite, or booked 20-minute
intro calls. Success is a founding-partner cohort of a few serious companies, not
raw traffic.

## Brand Personality

Grounded, honest, and quietly premium. Three words: **earnest, credible,
unpretentious-premium**.

Voice: direct Hungarian in the informal second-person plural ("ti / nektek"),
confident but never hyped. The brand's signature move is naming what it does *not*
promise ("Nem stock CSR", "megtekintésszámot nem garantálunk", "nem fix
tojásdarabszám: élő állat, nem gép"). Emotional goals: trust, a spark of delight
(real animals, a real farm, named founders Anna and Dávid), and the confidence that
this is genuine and auditable rather than greenwashed.

## Anti-references

- **"Stock CSR" / greenwashing.** A logo bolted onto someone else's sustainability
  story. The entire page is built as the opposite of this.
- **Generic SaaS landing clichés.** Gradient hero-metric templates, glassmorphism as
  decoration, neon-on-dark tech aesthetics, identical icon-card grids.
- **Corporate stock-photo blandness.** This uses real photography of the farm, the
  founders, the eggs, and the coop, never stock imagery.
- **Over-promising marketing.** Guaranteed viral reach or fixed egg counts. The page
  explicitly refuses to promise either.
- **Cheap "benefit voucher" energy.** This is premium and genuinely capacity-limited
  (live animals, booked coop capacity), and the page must feel that way.

## Design Principles

1. **Proof over promise.** Every claim is backed by a number, a photo, a
   certification, or an explicit "this we don't guarantee." Radical honesty is the
   differentiation, not a disclaimer.
2. **Show the real farm.** Real photography, a live webcam, named founders. The
   realness *is* the product; never abstract it into icons and adjectives.
3. **One program, three lenses.** Let HR, marketing, and ESG buyers self-select their
   angle (the persona selector) without fragmenting the single offer.
4. **Earn the premium.** Scarcity is real (animal capacity, not fake urgency). Justify
   price with substance and specifics, never pressure tactics.
5. **Trust and compliance are features.** GDPR consent-by-default, self-hosted fonts,
   documented cold chain, food-safety papers on request. Legal rigor is part of the
   brand promise, not overhead.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**. Hungarian language throughout (`lang="hu"`, latin-ext font
subsets for accented characters). `prefers-reduced-motion` is honored for scroll
reveals, smooth scroll, sticky CTA, and hover choreography. Keyboard-accessible nav,
ARIA tablist persona selector, and forms with visible labels and required indicators.
Skip link and a global gold `:focus-visible` ring. Analytics are consent-gated
(Google Consent Mode v2, denied by default), so privacy is the default state.
