# Aurette — Design System

Modern, wearable gold jewelry for women who buy for themselves — designed to feel personal, not precious.

Aurette is a new family-run jewellery brand based in **Wollongong, Australia**, launching online-first on **Shopify**. It sits in accessible / everyday-luxury: mid-to-premium price tier, premium *feel*, approachable language. The personality is modern rather than ornate, warm rather than cold-luxury, and a little personal — a trusted friend with great taste, not a formal jeweler.

**One product surface exists today:** the Shopify storefront (Home → Shop by category → PDP → About → Care/Sizing → Contact/FAQ → native Shopify cart & checkout). There is no app, no dashboard, and no marketing site separate from the store. The UI kit in this project recreates that storefront and nothing else.

## Sources this system was built from

Everything here derives from the materials supplied with the brief. No codebase and no Figma file were provided.

| Source | What it gave us |
|---|---|
| `uploads/DESIGN.md` | The brand spec: positioning, palette with hex + role, type pairing (Marcellus / Manrope), voice rules, layout density, imagery pillars, site structure, do/don't list. This is the **written** ground truth. |
| `uploads/109faaf9-…jpeg` | A full-page homepage mockup for Aurette. This is the **visual** ground truth — buttons, header, hero, product grid, category tiles, feature strip, social-proof band and footer were all read off it, and its photography was cropped into `assets/img/`. |
| `uploads/a41dc741-…jpeg` | The Aurette logo sheet — four-point star above a serif wordmark on cream. Cropped into `assets/logo-*.png`. |
| `uploads/tiff_home.png`, `tiff_pdp.png`, `tiff_PL.png` | Tiffany & Co. screens, supplied as **competitor reference for photographic polish and layout cleanliness only**. DESIGN.md explicitly says not to copy their density, dark palettes or formal merchandising language, and nothing in this system reproduces their UI or brand assets. |
| `uploads/vc_home.png`, `vc_pdp.png`, `vc_pl.png` | Van Cleef & Arpels screens, same role and same restriction. Used only to confirm structural conventions common to all jewellery e-commerce (centred collection header, four-up grids, gallery-left / details-right PDP). |

Because no code or Figma inventory defined a component list, the component set here is an authored standard set sized to a Shopify jewellery storefront — see **Intentional additions** below.

## Index

| File | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/fonts.css` | Webfont loading (Google Fonts) + the italic-substitution note. |
| `tokens/colors.css` | Base palette, warm neutrals, ink ramp, status, semantic aliases. |
| `tokens/typography.css` | Families, size scale, weights, line heights, tracking, composite `--type-*` roles. |
| `tokens/spacing.css` | 4px scale + layout tokens (container, gutters, section rhythm). |
| `tokens/borders-shadows.css` | Radii, hairline rules, the two shadows, scrims and the protection gradient. |
| `tokens/motion.css` | Durations, easings, the two composite transitions. |
| `tokens/base.css` | Element resets and the two utility classes (`.au-eyebrow`, `.au-italic`). |
| `components/<group>/` | React primitives + `.d.ts` contracts + `.prompt.md` usage notes + one card per group. |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `ui_kits/storefront/` | Click-through recreation of the Shopify storefront. |
| `assets/` | Logo crops and the brand photography library. |
| `SKILL.md` | Agent-Skills front matter so this folder works as a Claude Code skill. |

### Components

**core** — `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `Tag`
**forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `QuantityStepper`
**navigation** — `Breadcrumb`, `Tabs`, `Accordion`, `Pagination`, `CarouselDots`
**feedback** — `Dialog`, `Toast`, `Tooltip`
**commerce** — `ProductCard`, `CategoryTile`, `StarRating`, `FeatureMark`, `SectionHeader`

### Intentional additions

- **`Icon`** — a wrapper was needed because the brand ships no glyph set; it normalises the substituted Lucide icons to hairline stroke weight.
- **`QuantityStepper`** — no source component covered it, but the PDP and cart drawer both require one.
- **`CarouselDots`** — visible in the homepage mockup's hero, so it needed a component even though nothing named it.
- **`FeatureMark`** and **`SectionHeader`** — both are patterns repeated verbatim across the mockup; making them components stops every screen re-implementing the eyebrow and the reassurance strip.

### UI kits

- `ui_kits/storefront/` — Home, Collection (product listing), Product detail, About. Interactive: category and product navigation, gallery switching, filters, quantity, add-to-bag with the cart drawer and toast.

---

## Content fundamentals

**Voice.** Warm, confident, conversational — a knowledgeable friend, not a formal jeweler. Copy talks about *self-expression and everyday wear*, never about heritage or craft mythology.

**Person.** Second person for the reader, first-person plural for the brand. "We create jewellery that feels distinct, effortless and unmistakably you." Never "the customer", never "one".

**Casing.** Sentence case everywhere in content. Uppercase is a *typographic* device applied by CSS to chrome (nav, eyebrows, buttons, micro-labels) — so write labels as `Shop new arrivals`, not `SHOP NEW ARRIVALS`, and let `text-transform` do the work. Headlines are sentence case with a full stop: "Jewellery with character." / "Thoughtfully different."

**Spelling.** Australian English: *jewellery*, *personalise*, *colour*. Prices always carry the currency code — `$129 AUD`.

**Sentence length.** Short. Two clauses maximum. The mockup's longest body line is one sentence: "We create jewellery that feels distinct, effortless and unmistakably you."

**Banned vocabulary** (from DESIGN.md): *exquisite*, *timeless elegance*, *finest craftsmanship*, *artisanal heritage*, *investment piece*. Anything that sounds reverent about the object rather than useful to the wearer.

**Lean into:** "made for you", "designed to elevate your everyday", "wear it in the shower", "goes with everything", "designed in Australia". Claims are concrete and testable — *Waterproof*, *Tarnish resistant*, *Hypoallergenic* — each with a soft human note underneath (*Designed to last*, *Timeless shine*, *Gentle on skin*).

**Microcopy examples.**
- Announcement bar: `Free shipping on orders over $150 AUD`
- Nav: `Shop` · `Collections` · `About` · `Care`
- Primary CTA: `Shop new arrivals` / `Add to bag` (never "Add to cart", never "Buy now")
- Link CTA: `View all` · `Our story` · `Read more reviews` · `Follow us`
- Eyebrows: `New in` · `Why Aurette` · `Loved by thousands` · `Thoughtfully different`
- Empty bag: `Nothing in your bag yet — have a look at what's new.`
- Out of stock: `Sold out for now. Want us to email you?`
- Field error: `That email doesn't look right.`
- Toast: `The Twist Hoops — added to your bag`
- Sizing hint: `Not sure? Between two sizes, go up.`

**Product naming.** Definite article + one descriptive noun phrase: *The Twist Hoops*, *The Oval Pendant*, *The Wave Ring*, *The Link Bracelet*. Collections are named plainly: *Silk Collection*, *Mother of Pearl*, *Moissanite*, *Opal Collection*, *Essentials*.

**Story.** The Wollongong family business is a real differentiator and appears as content — on About, and as a one-line note in supporting copy — not as filler in every section.

**Emoji: never.** Not in UI, not in microcopy, not in marketing copy. The brand has no emoji vocabulary and no unicode-glyph decoration.

**Provisional copy.** Returns and sizing policy language is not finalised. Anywhere it appears, mark it as placeholder rather than inventing policy.

---

## Visual foundations

**Overall.** Modern minimal, product-forward, generous whitespace, restrained grid. UI chrome recedes; photography carries the visual weight. The page reads as considered and premium without being intimidating — nothing about it is heavy, ornate or dark.

**Colour.** Cream `#FAF6EF` is the page. Ink `#1B1811` (a charcoal-*brown*, never black) is type and the primary action fill. Camel `#C19A6B` is the warm accent, taupe `#987654` the secondary/muted tone, champagne `#F1D4A5` a soft highlight ground. Every neutral in the system is warm-shifted — there is no cool grey anywhere. Maximum two background tints per view (cream page + greige band); champagne appears at most once as a highlight. Status colours are desaturated and stay inside the warm family.

Note on the accent: DESIGN.md nominates camel gold as the primary interactive colour, while the supplied homepage mockup renders primary buttons as ink fills with camel reserved for accents, icons and switches. The mockup wins for buttons, since it is the concrete artefact; camel remains the accent, link-hover, and "on" colour. Flagged below.

**Type.** Marcellus for anything editorial — page titles, section titles, product names on the PDP — at light-to-normal weight, negative tracking (`-0.01em`), tight leading (1.06 at hero size). Manrope for everything else, including all UI chrome. The pairing rule is absolute: **Marcellus never appears on a button, a nav item, or a form label.** One emphasised word per headline may be set in serif italic (`.au-italic`).

**Spacing.** 4px base. Sections breathe at 96px vertical (64 tight / 128 loose), product grids gap at 16px, editorial grids at 32px. Container caps at 1280px with 40px desktop gutters, 20px on mobile; prose narrows to 720px. Mobile-first — the primary shopper is browsing on a phone.

**Backgrounds.** Flat warm tints and full-bleed photography only. No gradients as decoration, no repeating patterns, no textures, no hand-drawn illustration, no noise. The one gradient in the system is functional: `--gradient-protection`, a bottom-up ink wash at 55%→0 that keeps white labels legible on category tiles. Text over photography always sits on that gradient — never in a capsule, never on a flat scrim block.

**Cards.** Square corners, no shadow. A card is defined by a hairline rule (`1px solid #E6DFD5`) or by a tinted ground (sand / greige), never by elevation. Product tiles have *no* container at all: image on a sand pad, then name, then price. There is no such thing as a rounded card with a coloured left border in this system.

**Corner radii.** `0` is the default and covers buttons, inputs, cards, tiles, dialogs and badges. `2px` exists for rare soft cases, `999px` for pills (on-image badges), `50%` for dots, avatars and circular icon buttons. Nothing else is rounded.

**Borders.** Hairlines at 1px in three weights of contrast: subtle `#E6DFD5` (dividers, card edges), medium `#E2DAD0` (form controls), strong ink (secondary buttons, active tabs, current page). Rules separate sections and specs; heavy borders and ornate dividers are explicitly out of the brand.

**Shadows.** Two, both for surfaces that genuinely float: `--shadow-overlay` (`0 1px 40px rgba(27,24,17,.10)`) for dialogs and dropdowns, `--shadow-drawer` for the cart drawer. Inner shadows are not used at all.

**Transparency & blur.** Sparing. Blur (`blur(6px)`) appears in exactly one place: the translucent disc behind controls that sit over photography (`IconButton variant="onImage"`). Scrims are warm ink — 24% over imagery, 42% behind modals — never pure black. Unfilled stars drop to 22% opacity; hover reveals (wishlist, second image) animate opacity rather than appearing instantly.

**Animation.** Fades and slow scales, no motion vocabulary beyond that. 160ms for hover colour changes, 240ms for fades and the modal rise (8px), 420ms for the cart drawer slide, 700ms for the product-image scale to 1.03 on hover. Easing is `cubic-bezier(.22,.61,.36,1)` almost everywhere, with a softer out-curve for image and drawer entry. **No bounce, no spring, no overshoot, no parallax, no scroll-jacking, no entrance animations on page load.**

**Hover states.** Links and ghost controls shift to taupe. Primary buttons darken to ink-90. Secondary buttons *invert* (transparent → ink fill, ink → cream text). Form controls raise their border from medium to ink-25, then to full ink on focus. Product tiles scale their image and cross-fade to a second angle. Nothing lightens, nothing lifts, nothing glows.

**Press states.** Colour or opacity, never scale. Buttons drop to 92% opacity; icon buttons to 70%. Nothing shrinks or translates on press.

**Focus.** A 1px taupe outline offset 2px — visible, warm, never a blue browser default.

**Layout rules.** Announcement bar (28px) → sticky header (64px, cream, hairline bottom rule, logo centred with nav left and utilities right) → content. The header is the only fixed element; there is no sticky sidebar, no sticky add-to-bag on desktop. Category tiles run four across; product grids run four across on desktop, two on mobile. The PDP is gallery-left / details-right on desktop, gallery-then-details stacked on mobile.

**Imagery.** Warm-neutral grade, natural directional light, shallow depth of field, cream and skin-tone grounds. Product on-body (ears, hands, necks, wrists) alternating with flat-lay and detail shots — 3–4 angles per piece minimum. No cool or blue casts, no black or moody backgrounds, no heavy grain, no studio gradient sweeps, no colour pops. UGC keeps the same warmth so the Instagram row sits flush with the editorial photography.

---

## Iconography

- **No icon assets shipped with the brand materials.** The homepage mockup contains hairline line-art marks (droplet, shield, leaf, Australia outline) and standard utility glyphs (search, account, bag) but only as flattened pixels inside a JPEG, so they could not be extracted as usable vectors.
- **Substitution (flagged):** the system uses **[Lucide](https://lucide.dev) v0.544.0 loaded from unpkg** as the closest CDN match — same single-weight line-art idiom, geometric, open-ended. The `Icon` component fetches each glyph and **overrides the stroke width down to 1.25** (1 for the four feature marks) because Lucide's default weight of 2 is far too heavy for the brand. Only the 11px checkbox tick keeps stroke 2, purely for legibility.
- **Not matched by Lucide:** the Australia-outline mark in the mockup's "Designed in Australia" feature has no equivalent; `map` stands in and should be replaced with the real vector when it exists.
- **Sizes.** 16px in dense UI, 18px in the header, 22px in tooltips and inline notes, 26–28px for feature marks. Icons are always `currentColor` — never given their own fill, never gold.
- **Style rules.** Line-art only; no filled icons except the review star. No duotone, no rounded-cap novelty sets, no icon backgrounds or containers except the on-image blurred disc.
- **Emoji: never used.** Unicode characters are used as icons in exactly one place: the `/` separator in breadcrumbs.
- **Logo.** `assets/logo-lockup.png`, `assets/logo-mark.png`, `assets/logo-wordmark.png` — all cropped from the supplied brand sheet. DESIGN.md marks the mark as **direction only, no final artwork**, so every lockup here is a placeholder. On ink grounds the wordmark inverts to cream; it is never recoloured gold. No logo was drawn or reconstructed for this system.

## Flags & substitutions

1. **Fonts are loaded from Google Fonts, not from licensed binaries.** Marcellus and Manrope are both genuinely available there, so these are the real families rather than lookalikes — but no font files were supplied, so nothing is self-hosted. Send the licensed webfont files if the storefront needs to self-host.
2. **Serif italic is an addition.** Marcellus has no italic, and the mockup's hero sets one word in serif italic. Cormorant Garamond Italic stands in (`--font-display-italic`). Replace it if the brand licenses a serif with a true italic companion.
3. **Icons are Lucide, not Aurette's own set.** See above.
4. **Primary button colour resolves to ink, not camel**, following the mockup over the written spec. Say the word and it flips.
5. **Photography is low-resolution.** All imagery in `assets/img/` was cropped from a ~941px-wide mockup JPEG, so product shots are roughly 600px on the long edge and soften at large sizes. Replace with the real photography library before any production or print use.
