# lightningweb.xyz

The personal site of Liam Caywood (Lightning) — rebuilt on the modern Svelte stack.

## Stack

- **Svelte 5** (runes) + **SvelteKit 2**
- **Tailwind CSS v4** (CSS-first tokens, no config file)
- **@sveltejs/adapter-cloudflare** — deploys to Cloudflare Pages
- Fonts: Space Grotesk Variable (display and body), JetBrains Mono Variable (labels and data)

## Design

Swiss grid / bold. A warm white poster framed in black ink, with one flat voltage yellow
(`#FFE500`) used only as solid blocks. Every section is a 12-column grid whose gaps are the
rules: the grid background is ink and the cells are paper, so 3px rules divide every cell and
collapse cleanly to a single column on phones. Space Grotesk at very large sizes with negative
tracking for headings (page titles scale to the frame width), JetBrains Mono for labels, tags,
data keys and status. Project tiles, CTAs and footer links are whole-cell links that invert to
yellow or black on hover. Status is a small square marker (filled, half, hollow, slashed).
No gradients, no rounded corners, no shadows, no blur. All copy lives in `src/lib/content.ts`.

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