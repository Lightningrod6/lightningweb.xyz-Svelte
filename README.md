# lightningweb.xyz

The personal site of Liam Caywood (Lightning) — rebuilt on the modern Svelte stack.

## Stack

- **Svelte 5** (runes) + **SvelteKit 2**
- **Tailwind CSS v4** (CSS-first tokens, no config file)
- **@sveltejs/adapter-cloudflare** — deploys to Cloudflare Pages
- Fonts: Fraunces Variable (display and reading serif), Inter Tight Variable (body and UI)

## Design

Editorial: a small independent publication rather than a template. Warm off-white paper and
near-black ink (a deep warm charcoal in dark mode), Fraunces set large with tight leading for
display type, Inter Tight for body and UI, and letterspaced small-caps labels for eyebrows and
data keys. One accent, a signal yellow, is used only as a highlighter: the swipe under the hero,
link underlines on hover, the `//` tab and the live status dot. Asymmetric grid with eyebrows
hanging in a margin column on wide screens, hairline rules, projects as an index with the name
large and the blurb as a dek, status as a small dot and label, data plates as colophon-style
definition lists, and the timeline as a year ledger. Motion is limited to a gentle load fade,
the highlighter swipe, underline transitions and a slow marquee, all off under
`prefers-reduced-motion`. All copy lives verbatim in `src/lib/content.ts`.

## Developing

```bash
npm install
npm run dev
```

## Building

```bash
npm run check   # svelte-check
npm run build   # production build into dist/ (Cloudflare Pages output)
```

## Pages

- `/` — hero, system status plate, featured projects, about teaser, community strip
- `/projects` — everything wired up
- `/about-me` — personnel file
- `/contributions` — voice acting cameo
- `/community` — the Discord hub