import cloudflare from '@sveltejs/adapter-cloudflare';
import node from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Production stays on Cloudflare Pages. Railway previews build with ADAPTER=node.
const adapter = process.env.ADAPTER === 'node' ? node() : cloudflare();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter,
		paths: {
			// absolute asset URLs (site lives at the domain root)
			relative: false
		}
	}
};

export default config;
