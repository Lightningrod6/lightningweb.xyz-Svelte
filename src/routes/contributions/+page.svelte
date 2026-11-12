<script lang="ts">
	import Feature from '$lib/components/Feature.svelte';
	import { contributionsPage as c } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap grid gap-8 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:gap-10">
	<div class="lg:col-span-7">
		<p class="kicker">{c.eyebrowMark} {c.eyebrow}</p>
		<h1 class="h1 sentence mt-4">{c.heading}</h1>
	</div>
	<p class="serif soft text-[1.375rem] leading-snug lg:col-span-5">{c.intro}</p>
</section>

<section class="wrap mt-12 border-t pt-12" style="border-color: var(--ink)">
	<Feature p={c.item} size="wide" />
</section>
