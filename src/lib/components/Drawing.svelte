<script lang="ts">
	import type { ArtKind } from '$lib/art';
	let { kind }: { kind: ArtKind } = $props();
	const days = Array.from({ length: 35 }, (_, i) => i);
	const dots: [number, number][] = [];
	for (let y = 0; y < 9; y++) for (let x = 0; x < 22; x++) {
		// a rough continent shape, so the dot field reads as a map
		const cx = x - 11, cy = y - 4;
		if ((cx * cx) / 90 + (cy * cy) / 14 < 1 && !(x > 7 && x < 10 && y > 5) && !(x === 15 && y < 3)) dots.push([30 + x * 16, 40 + y * 16]);
	}
	const bars = Array.from({ length: 46 }, (_, i) => {
		const t = i / 45;
		return Math.max(6, Math.round(Math.abs(Math.sin(i * 0.9) * Math.sin(t * Math.PI) * 70 + Math.sin(i * 2.3) * 10)));
	});
</script>

<svg viewBox="0 0 400 260" class="art" aria-hidden="true" focusable="false">
	{#if kind === 'deadline'}
		<g class="ink" fill="none" stroke-width="1.4">
			<rect x="40" y="46" width="224" height="170" rx="2" />
			<path d="M40 74h224" />
			<path d="M84 34v22M220 34v22" stroke-linecap="round" />
			{#each days as d (d)}
				<rect x={48 + (d % 7) * 30.5} y={82 + Math.floor(d / 7) * 26} width="24" height="20" class="cell" />
			{/each}
		</g>
		<path class="red" fill="none" stroke-width="2.2" stroke-linecap="round" d="M196 150c-8-12 8-22 22-18 13 4 15 19 3 25-13 6-30-1-29-10" />
		<g class="ink" fill="none" stroke-width="1.4">
			<circle cx="320" cy="104" r="44" />
			<path d="M320 104V74M320 104l20 12" stroke-linecap="round" stroke-width="2" />
			<path d="M320 52v6M320 150v6M268 104h6M366 104h6" />
		</g>
		<path class="red" fill="none" stroke-width="1.6" stroke-dasharray="3 5" d="M286 176c-20 18-44 20-62 6" />
	{:else if kind === 'conflicts'}
		{#each dots as [x, y] (x + ':' + y)}
			<circle cx={x} cy={y} r="2.2" class="ink-fill" />
		{/each}
		{#each [[142, 88], [246, 104], [300, 72], [190, 136]] as [x, y] (x)}
			<circle cx={x} cy={y} r="4" class="red-fill" />
			<circle cx={x} cy={y} r="11" class="red" fill="none" stroke-width="1.2" />
		{/each}
		<g class="ink" stroke-width="1.4" stroke-linecap="round">
			<path d="M40 206h150M40 222h210M40 238h120" />
			<path d="M286 206h74M286 222h52M286 238h66" class="muted-stroke" />
		</g>
	{:else if kind === 'api'}
		<g class="ink" fill="none" stroke-width="1.6" stroke-linecap="round">
			<path d="M58 50c-14 0-14 10-14 22v28c0 10-6 14-14 14 8 0 14 4 14 14v28c0 12 0 22 14 22" />
			<path d="M342 50c14 0 14 10 14 22v28c0 10 6 14 14 14-8 0-14 4-14 14v28c0 12 0 22-14 22" />
		</g>
		<g class="ink" stroke-width="5" stroke-linecap="round">
			<path d="M84 66h70M84 92h40M110 118h120M110 144h86M110 170h150M84 196h30" />
		</g>
		<g class="red" stroke-width="5" stroke-linecap="round">
			<path d="M170 66h60M142 92h96M250 118h40" />
		</g>
		<path class="red" fill="none" stroke-width="1.6" d="M268 214h80m-10-8 10 8-10 8" stroke-linecap="round" />
	{:else if kind === 'bot'}
		<g class="ink" fill="none" stroke-width="1.5" stroke-linejoin="round">
			<path d="M48 54h170a10 10 0 0 1 10 10v56a10 10 0 0 1-10 10H96l-24 20v-20H58a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10Z" />
			<path d="M176 144h166a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10h-14v18l-22-18H176a10 10 0 0 1-10-10v-44a10 10 0 0 1 10-10Z" />
		</g>
		<g class="ink" stroke-width="4" stroke-linecap="round">
			<path d="M70 80h120M70 102h80M190 168h120M190 188h70" />
		</g>
		<path class="red" fill="none" stroke-width="2" stroke-linejoin="round" d="M320 40l26 10v20c0 18-12 30-26 36-14-6-26-18-26-36V50Z" />
		<path class="red" fill="none" stroke-width="2" stroke-linecap="round" d="M309 72l8 8 15-16" />
	{:else if kind === 'voice'}
		{#each bars as h, i (i)}
			<rect x={34 + i * 7.2} y={130 - h / 2} width="3.2" height={h} class={i > 16 && i < 23 ? 'red-fill' : 'ink-fill'} />
		{/each}
		<path class="ink" fill="none" stroke-width="1.2" d="M30 130h340" stroke-dasharray="2 4" />
		<g class="ink" fill="none" stroke-width="1.5" stroke-linecap="round">
			<rect x="186" y="186" width="28" height="44" rx="14" />
			<path d="M176 214c0 18 48 18 48 0M200 232v14M188 246h24" />
		</g>
	{:else}
		<rect x="40" y="40" width="320" height="180" class="ink" fill="none" stroke-width="1.4" stroke-dasharray="6 6" />
		<path class="red" stroke-width="2.4" stroke-linecap="round" d="M200 106v48M176 130h48" />
	{/if}
</svg>

<style>
	.art {
		display: block;
		width: 100%;
		height: auto;
		background: var(--card);
	}
	.ink {
		stroke: var(--ink);
	}
	.cell {
		stroke: var(--rule);
	}
	.ink-fill {
		fill: var(--ink);
	}
	.muted-stroke {
		stroke: var(--muted);
	}
	.red {
		stroke: var(--red);
	}
	.red-fill {
		fill: var(--red);
	}
</style>
