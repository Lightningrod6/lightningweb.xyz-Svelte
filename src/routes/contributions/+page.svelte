<script lang="ts">
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { contributionsPage as c } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<p class="label">{c.eyebrowMark} {c.eyebrow}</p>
	<h1 class="h1 sentence mt-3">{c.heading}</h1>
	<p class="mt-5">{c.intro}</p>
</section>

<section class="wrap mt-12">
	<ProjectList projects={[c.item]} />
</section>
