# lightningweb.xyz

The personal site of Liam Caywood (Lightning) — rebuilt on the modern Svelte stack.

## Stack

- **Svelte 5** (runes) + **SvelteKit 2**
- **Tailwind CSS v4** (CSS-first tokens, no config file)
- **@sveltejs/adapter-cloudflare** — deploys to Cloudflare Pages
- Font: Libre Franklin Variable

## Design

Plain and editorial: Libre Franklin for everything, ink on white with grey secondary text and classic
underlined blue links. Sections open with a heavy rule, projects are ruled rows instead of cards, tags are
plain comma lists, status is a word, and nothing animates. Light by default with a dark mode that follows
the OS. All copy lives in `src/lib/content.ts`.

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