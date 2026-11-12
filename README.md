# lightningweb.xyz

The personal site of Liam Caywood (Lightning) — rebuilt on the modern Svelte stack.

## Stack

- **Svelte 5** (runes) + **SvelteKit 2**
- **Tailwind CSS v4** (CSS-first tokens, no config file)
- **@sveltejs/adapter-cloudflare** — deploys to Cloudflare Pages
- Fonts: IBM Plex Mono (headings, labels, data), IBM Plex Sans (body copy)

## Design

Operator console: a graphite canvas with hairline-bordered, titled panes, like a well-made
internal tool or status page. One accent (phosphor amber) for brand, active tab and primary
actions, plus semantic status colours (live, in development, contribution, offline). Projects
render as a service list (status, name, blurb, tag chips, row action), the timeline as a log
with a year column, the ticker as a status strip and the footer as a status bar. Spacing sits
on an 8px grid; numerals are tabular. A light variant follows `prefers-color-scheme`. Motion
is limited to the live-status pulse, row hover and the ticker, and all of it respects
`prefers-reduced-motion`. Every visible string lives in `src/lib/content.ts`.

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