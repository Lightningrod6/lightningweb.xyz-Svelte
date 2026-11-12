<script lang="ts">
	import Drawing from './Drawing.svelte';
	import { artFor } from '$lib/art';
	let { name, href }: { name: string; href: string } = $props();
	const art = $derived(artFor(name));
	const ext = $derived(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
</script>

<a {href} {...ext} class="plate block" tabindex="-1" aria-hidden="true">
	{#if art.shot}
		<img src={art.shot} alt="" width="1200" height="760" class="aspect-[400/260] object-cover object-top" />
	{:else}
		<Drawing kind={art.kind} />
	{/if}
</a>
