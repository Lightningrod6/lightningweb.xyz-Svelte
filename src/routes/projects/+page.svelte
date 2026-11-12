<script lang="ts">
	import Feature from '$lib/components/Feature.svelte';
	import SlotNote from '$lib/components/SlotNote.svelte';
	import { projectsPage as c } from '$lib/content';
	const [lead, second, third, ...rest] = c.projects;
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

<section class="wrap mt-12">
	<div class="border-t pt-12" style="border-color: var(--ink)">
	<div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
		<div class="lg:col-span-7"><Feature p={lead} size="lead" /></div>
		<div class="rows lg:col-span-5 lg:border-l lg:pl-10" style="border-color: var(--rule)">
			{#each [second, third] as p (p.name)}
				<div class="py-7 first:pt-0"><Feature {p} size="row" /></div>
			{/each}
		</div>
	</div>

	<div class="scribble mt-14"></div>

	<div class="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
		{#each rest as p (p.name)}
			<Feature {p} size="col" />
		{/each}
	</div>

	<div class="mt-14 max-w-[36rem]"><SlotNote /></div>
	</div>
</section>
