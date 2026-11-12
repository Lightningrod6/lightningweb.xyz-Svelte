<script lang="ts">
	import ProjectRows from '$lib/components/ProjectRows.svelte';
	import { contributionsPage as c } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<h1 class="h1 sentence">{c.heading}</h1>
	<p class="kicker mt-4">{c.eyebrowMark} {c.eyebrow}</p>
	<p class="soft mt-5 max-w-[40rem] text-[1.125rem] leading-relaxed">{c.intro}</p>
</section>

<section class="wrap mt-12">
	<ProjectRows projects={[c.item]} />
</section>
