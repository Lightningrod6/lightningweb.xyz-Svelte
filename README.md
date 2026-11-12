# lightningweb.xyz

The personal site of Liam Caywood (Lightning) — rebuilt on the modern Svelte stack.

## Stack

- **Svelte 5** (runes) + **SvelteKit 2**
- **Tailwind CSS v4** (CSS-first tokens, no config file)
- **@sveltejs/adapter-cloudflare** — deploys to Cloudflare Pages
- Font: Archivo Variable (its widest, heaviest cut for headlines)

## Design

Loud on purpose, like a gig poster for a storm: flat blocks of night navy, lightning yellow, signal red and
sky blue, extra-wide black headlines, thick ink borders, square corners and a few diagonal cuts. Projects sit in
an uneven mosaic of colored blocks with big outlined numbers, tags are crooked square stickers, and the stack line
scrolls across a red band. No gradients, glass or glow, and motion stops for reduced-motion users. All copy lives
in `src/lib/content.ts`.

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