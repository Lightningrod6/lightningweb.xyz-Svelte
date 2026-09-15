import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	ssr: {
		noExternal: [
			'gsap',
			'@gsap/shockingly'
		],
	},
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/socket.io': {
				target: 'http://localhost:3000', // Your socket.io server URL
				ws: true, // Enable WebSocket proxying
			},
		},
	},
});
