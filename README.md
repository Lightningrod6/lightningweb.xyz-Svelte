# lightningweb.xyz

The personal site of Liam Caywood (Lightning) — rebuilt on the modern Svelte stack.

## Stack

- **Svelte 5** (runes) + **SvelteKit 2**
- **Tailwind CSS v4** (CSS-first tokens, no config file)
- **@sveltejs/adapter-cloudflare** — deploys to Cloudflare Pages
- Fonts: Libre Caslon Display and Libre Caslon Text (headings, notes), Libre Franklin Variable (text)

## Design

Editorial, like a well-made newspaper: Caslon display headings over Franklin text on newsprint paper, editor's
red for marks and margin notes, a deep green band, and underlined links. Projects get a real screenshot where the
site is up and an ink drawing where it isn't, laid out in an uneven grid with a lead story. Hand-drawn rules and
numbered margin notes are drawn in CSS and SVG, so the copy stays exactly as written. Nothing animates. Light by
default with a dark mode that follows the OS. All copy lives in `src/lib/content.ts`.

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