<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SlotCard from '$lib/components/SlotCard.svelte';
	import { projectsPage as c } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap rise pt-16 sm:pt-24">
	<p class="eyebrow"><span class="mark">{c.eyebrowMark}</span>{c.eyebrow}</p>
	<h1 class="h1 sentence mt-4">{c.heading}</h1>
	<p class="soft mt-5 max-w-[40rem] text-[1.125rem] leading-relaxed">{c.intro}</p>
</section>

<section class="wrap rise rise-2 mt-12 grid gap-4 sm:grid-cols-2">
	{#each c.projects as p (p.name)}
		<ProjectCard {...p} />
	{/each}
	<SlotCard />
</section>
