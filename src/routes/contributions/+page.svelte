<script lang="ts">
	import ProjectBlock from '$lib/components/ProjectBlock.svelte';
	import { contributionsPage as c } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="block-red cut-bottom">
	<div class="wrap grid gap-8 pt-14 pb-6 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
		<div>
			<p class="tape">{c.eyebrowMark} {c.eyebrow}</p>
			<h1 class="wide-black h1 mt-6">{c.heading}</h1>
		</div>
		<p class="text-[1.375rem] leading-snug font-semibold">{c.intro}</p>
	</div>
</section>

<section class="wrap count pt-16 pb-24">
	<div class="tick"><ProjectBlock p={c.item} tone="yellow" side /></div>
</section>
