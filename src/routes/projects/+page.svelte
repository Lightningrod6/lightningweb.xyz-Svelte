<script lang="ts">
	import { projectsPage as pg } from '$lib/content';
	import PageHead from '$lib/components/PageHead.svelte';
	import ProjectCell from '$lib/components/ProjectCell.svelte';
	import SlotCell from '$lib/components/SlotCell.svelte';
</script>

<svelte:head>
	<title>{pg.title}</title>
</svelte:head>

<PageHead mark={pg.eyebrowMark} eyebrow={pg.eyebrow} heading={pg.heading} intro={pg.intro} />

<section class="rg">
	{#each pg.projects as p (p.name)}
		<ProjectCell project={p} class="col-span-12 md:col-span-6 lg:col-span-4" />
	{/each}
	<SlotCell class="col-span-12" />
</section>
