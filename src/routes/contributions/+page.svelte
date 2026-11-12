<script lang="ts">
	import { contributionsPage as pg } from '$lib/content';
	import PageHead from '$lib/components/PageHead.svelte';
	import ProjectCell from '$lib/components/ProjectCell.svelte';
</script>

<svelte:head>
	<title>{pg.title}</title>
</svelte:head>

<PageHead mark={pg.eyebrowMark} eyebrow={pg.eyebrow} heading={pg.heading} intro={pg.intro} />

<section class="rg">
	<ProjectCell project={pg.item} wide class="col-span-12" />
</section>
