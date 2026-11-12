<script lang="ts">
	import ProjectBlock from '$lib/components/ProjectBlock.svelte';
	import SlotBlock from '$lib/components/SlotBlock.svelte';
	import { projectsPage as c } from '$lib/content';
	const tones = ['yellow', 'red', 'sky', 'cream', 'yellow', 'navy'] as const;
	const spans = ['lg:col-span-7 lg:row-span-2', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4'];
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="block-sky cut-bottom">
	<div class="wrap grid gap-8 pt-14 pb-6 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
		<div>
			<p class="tape">{c.eyebrowMark} {c.eyebrow}</p>
			<h1 class="wide-black mega mt-6">{c.heading}</h1>
		</div>
		<p class="text-[1.375rem] leading-snug font-semibold">{c.intro}</p>
	</div>
</section>

<section class="wrap count pt-16 pb-24">
	<div class="grid gap-5 lg:grid-cols-12">
		{#each c.projects as p, i (p.name)}
			<div class="tick {spans[i] ?? 'lg:col-span-4'}"><ProjectBlock {p} tone={tones[i] ?? 'cream'} big={i === 0} /></div>
		{/each}
		<div class="lg:col-span-12"><div class="max-w-[40rem]"><SlotBlock /></div></div>
	</div>
</section>
