---
name: Remény Farm – Céges Tyúkcsapat Program
description: Grounded, proof-first B2B landing for a premium free-range corporate hen-flock program.
colors:
  forest: "#004d40"
  forest-deep: "#00352c"
  forest-soft: "#0a5c4d"
  yolk: "#f4b741"
  yolk-deep: "#e0991f"
  yolk-text: "#8a5a00"
  surface: "#fffdf9"
  paper: "#fbf9f3"
  paper-2: "#ece4d1"
  ink: "#23271f"
  ink-soft: "#566055"
  line: "#e4dccb"
  on-forest: "#f1f7f3"
  on-forest-soft: "#cfe0d8"
typography:
  display:
    fontFamily: "Fraunces, Inter, ui-serif, Georgia, serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Inter, ui-serif, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  sm: "11px"
  md: "16px"
  lg: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "46px"
  section: "clamp(60px, 8.5vw, 108px)"
components:
  button-primary:
    backgroundColor: "{colors.yolk}"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.pill}"
    padding: "0.78em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.yolk-deep}"
    textColor: "{colors.forest-deep}"
  button-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.78em 1.4em"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "0.78em 1.4em"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    padding: "30px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7em 0.85em"
  eyebrow-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.yolk-text}"
    typography: "{typography.label}"
---

# Design System: Remény Farm – Céges Tyúkcsapat Program

## 1. Overview

**Creative North Star: "The Working Farm, Not the Brochure"**

This is an editorial-agricultural system: warm paper, deep pasture green, and a single
egg-yolk gold, set in a serif-plus-mono voice that feels like a well-made field report
rather than a SaaS pitch. The surfaces are calm and papery so that real farm
photography and the deep-green "proof" sections carry the emotional weight. Density is
generous, with wide breathing room between sections and a strict 65–75ch measure on
body copy. The register is brand: on this page the design *is* the product pitch.

It explicitly rejects the aesthetics its buyers are tired of: no "stock CSR"
gloss, no gradient hero-metric template, no glassmorphism-as-decoration, no
neon-on-dark tech look, and no grids of identical icon cards. Where a lesser page
would reach for a colored side-stripe or a gradient headline, this one uses a full
1px border, a top accent rule, or simply better typography.

**Key Characteristics:**
- Papery warm neutrals as the default canvas; deep forest green reserved for "proof" and conversion moments.
- One accent (egg yolk gold) used sparingly, never as a background wash.
- Serif display (Fraunces) + humanist sans body (Inter) + monospace labels (IBM Plex Mono).
- Flat by default: 1px borders do the structural work; long soft shadows only lift photography and the featured package.
- Real photography and a live webcam over illustration and stock imagery.

## 2. Colors

A warm, earthy palette: pasture green and egg-yolk gold on cream paper, every neutral
tinted rather than pure.

### Primary
- **Pasture Forest** (`#004d40`): the brand green. Carries dark "proof" sections (stats, live preview, lead form, commitment, footer), the forest button, borders on the featured package, and headings on light.
- **Deep Pasture** (`#00352c`): the darkest surface, used for the deepest sections (live preview, lead form, footer, upgrade panel) and as button text on gold.
- **Pasture Soft** (`#0a5c4d`): a lighter green for tertiary accents and image-load fallbacks.

### Secondary
- **Egg Yolk** (`#f4b741`): the single accent. Primary CTAs, eyebrow tick marks, list bullets in dark sections, the "yolk" of the whole identity. Never a full-bleed background.
- **Yolk Deep** (`#e0991f`): hover state for the primary button and the `:focus-visible` ring color.
- **Yolk Text** (`#8a5a00`): the accessible gold for text on light surfaces (eyebrows, price accents, mono labels), where raw yolk would fail contrast.

### Neutral
- **Surface** (`#fffdf9`): the lightest card and input background.
- **Paper** (`#fbf9f3`): the default page background, a warm off-white.
- **Paper 2** (`#ece4d1`): the alternating section background and soft bullet chips.
- **Ink** (`#23271f`): primary body text, a green-tinted near-black.
- **Ink Soft** (`#566055`): secondary text, captions, and muted list markers.
- **Line** (`#e4dccb`): borders and dividers on light surfaces.
- **On-Forest** family (`#f1f7f3` / `#cfe0d8` / `#d5e2db` / `#a6bbb1`): the tinted light greens for text on dark forest sections, stepped by emphasis.

### Named Rules
**The Yolk Restraint Rule.** The gold is an accent, never a surface. It appears on CTAs,
eyebrow marks, single price highlights, and bullets, and never as a section background.
Its scarcity is what makes it read as the yolk.

**The Tinted Neutral Rule.** No pure `#000` or `#fff`. Every neutral is tinted warm or
green (paper `#fbf9f3`, ink `#23271f`, surface `#fffdf9`). The only literal white
allowed is inside SVG artwork (the egg highlight).

## 3. Typography

**Display Font:** Fraunces (with Inter, Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace fallback)

**Character:** Fraunces brings a warm, slightly old-style serif with optical sizing, a
farm-almanac quality that keeps headlines human rather than corporate. Inter keeps body
copy clean and neutral at 17px. IBM Plex Mono, in uppercase with wide tracking, marks
eyebrows, roles, captions, and data, the "field-report" register.

### Hierarchy
- **Display** (Fraunces 600, `clamp(2.4rem, 5.4vw, 4rem)`, line-height 1.02): the hero H1 only.
- **Headline** (Fraunces 600, `clamp(1.75rem, 3.4vw, 2.75rem)`, line-height 1.05): section H2s.
- **Title** (Inter 700, 1.18rem, line-height 1.25): card and panel H3s. Note the shift to sans at this level.
- **Body** (Inter 400, 17px, line-height 1.6): all running copy, capped at 60–75ch (`.lead` at 60ch, `.head` at 62ch).
- **Label** (IBM Plex Mono 600, 0.72rem, letter-spacing 0.12em, uppercase): eyebrows, roles, table headers, captions, badges.

### Named Rules
**The Fraunces-for-Headlines Rule.** Fraunces carries display and headline only. At H3
and below, type switches to Inter. IBM Plex Mono is reserved for labels, eyebrows,
captions, and data, never for prose.

**The Eyebrow-Tick Rule.** Every section eyebrow is uppercase mono-flavored gold text
preceded by a short 24px gold rule. It is the recurring "you are here" marker.

## 4. Elevation

The system is flat by default. Structure comes from 1px `#e4dccb` borders and tonal
layering (paper vs paper-2 vs forest), not from shadows. Shadows are long, soft, and
low-opacity, and appear only to lift photography, the featured package, and interactive
hover states, always green- or gold-tinted, never neutral gray.

### Shadow Vocabulary
- **Media lift** (`box-shadow: 0 30px 60px -34px rgba(0,53,44,0.55)`): hero image and proof photos, a soft green-cast drop.
- **Feature lift** (`box-shadow: 0 26px 54px -32px rgba(0,53,44,0.42)`): the featured "Team Coop" package and score card.
- **Primary hover glow** (`box-shadow: 0 10px 26px -12px rgba(224,153,31,0.7)`): the gold CTA on hover, a warm gold cast.
- **Selected tab lift** (`box-shadow: 0 18px 40px -28px rgba(0,53,44,0.5)`): the active persona tab.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat with a 1px border. A shadow is a
response to importance (photography, the featured package) or state (hover, selection),
never ambient decoration. If a card has a shadow at rest, it had better be earning it.

## 5. Components

### Buttons
- **Shape:** full pill (999px radius), `0.78em 1.4em` padding, weight 600, no border by default.
- **Primary:** egg-yolk background (`#f4b741`) with deep-pasture text (`#00352c`). The main conversion button.
- **Forest:** forest background (`#004d40`) with paper text (`#fbf9f3`).
- **Ghost:** transparent with a 1.5px forest border and forest text; fills forest on hover.
- **Light:** paper background with deep-pasture text, for use inside dark sections.
- **Hover / Focus:** all lift `translateY(-2px)` with a tinted shadow and a darker shade; `:focus-visible` shows a 3px `#e0991f` gold ring at 2px offset. Hover motion is suppressed under `prefers-reduced-motion`.

### Chips / Labels
- **Eyebrow:** uppercase gold-text (`#8a5a00`) label preceded by a 24px gold rule.
- **Pills:** hero feature points and media channels are pill-shaped, 1px-bordered, on translucent or paper-2 fills. The BIO badge and phase badges use a `color-mix` gold tint with a gold border.

### Cards / Containers
- **Corner Style:** 16px (`--r`) for standard cards, 22px (`--r-lg`) for larger panels and the feature package.
- **Background:** surface (`#fffdf9`) on light sections; deep pasture on dark panels (upgrade, founder offer).
- **Shadow Strategy:** none at rest (see Elevation); soft lift only on the featured package and media.
- **Border:** 1px `#e4dccb`. Accents are **top** borders (4px yolk/forest on audience and persona cards, 2px forest top rules on steps and the method grid), never side stripes. The featured package uses a full 2px forest border, not a stripe.
- **Internal Padding:** 24–30px, `clamp()`-scaled on larger panels.

### Inputs / Fields
- **Style:** surface background, 1.5px `#e4dccb` border, 11px radius, 0.7em/0.85em padding.
- **Focus:** border shifts to forest (`#004d40`), no glow, outline removed in favor of the border shift.
- **Consent / checkbox fields:** sit in a gold-tinted (`color-mix(--yolk 13%, --surface)`) block with `accent-color: var(--forest)`.
- **Success / error:** the form status block uses a soft green tint for success and a soft amber tint for errors, never a red alarm.

### Navigation
- **Style:** sticky top bar, translucent paper (`color-mix(--paper 88%, transparent)`) with a subtle `backdrop-filter` blur, 1px bottom border, 66px tall.
- **Links:** Inter 0.92rem, ink-soft, shifting to forest on hover; the CTA is a pill primary button.
- **Mobile:** a 44x44 hamburger toggle with `aria-expanded`; the menu drops as a full-width translucent panel, links stacked with top rules, Escape-to-close and focus management.

### Signature Components
- **Persona selector:** an ARIA `tablist` of four cards (HR / Marketing / ESG / All three) with roving tabindex and arrow-key navigation; selection re-skins the lead form's intro, badge, submit label, and perspective field.
- **Live brand preview:** two SVG cards (egg stamp + branded coop tarp) that live-render the visitor's typed company name onto the egg and the coop.
- **Egg calculator:** presets plus custom inputs producing a bi-weekly egg-count range with an `aria-live` output and a static crawler-readable fallback line.
- **Sticky CTA bar & cookie banner:** deep-pasture translucent overlays that appear on scroll / first visit; both honor reduced motion and consent-by-default.

## 6. Do's and Don'ts

### Do:
- **Do** keep the yolk gold as an accent only: CTAs, eyebrow marks, bullets, single highlights. Never a section background.
- **Do** tint every neutral (paper `#fbf9f3`, ink `#23271f`, surface `#fffdf9`); the only literal `#fff` allowed is SVG artwork.
- **Do** use full 1px borders or **top** accent rules (2–4px) for emphasis.
- **Do** carry real photography and the live webcam as proof; name Anna and Dávid.
- **Do** state what the program does *not* promise, in the same voice as the rest of the page ("Nem stock CSR", "megtekintésszámot nem garantálunk").
- **Do** keep body copy at 60–75ch and use Fraunces for display, Inter for body, IBM Plex Mono for labels.
- **Do** honor `prefers-reduced-motion` for reveals, smooth scroll, and hover lift, and keep the gold `:focus-visible` ring on every interactive element.

### Don't:
- **Don't** let it read as "stock CSR" or greenwashing: no logo-on-someone-else's-sustainability gloss.
- **Don't** use SaaS landing clichés: no gradient hero-metric template, no glassmorphism as decoration (blur is reserved for the sticky nav/CTA overlays only), no neon-on-dark.
- **Don't** use `background-clip: text` gradient headlines; emphasis comes from weight, size, and the italic gold `.ital` accent.
- **Don't** use `border-left`/`border-right` colored side-stripes on cards, list items, or callouts; use top rules or full borders.
- **Don't** use pure `#000`/`#fff` in CSS, or gray-on-color muted text below 4.5:1 on the dark forest sections.
- **Don't** ship grids of identical icon cards where an editorial or top-ruled variant would differentiate (see how `#honnan` breaks from `#elmeny`).
- **Don't** over-promise (guaranteed reach, fixed egg counts) or use fake-urgency pressure; scarcity here is real capacity.
