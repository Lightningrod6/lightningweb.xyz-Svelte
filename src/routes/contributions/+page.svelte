<script lang="ts">
	import { contributionsPage } from '$lib/content';
	import PageHead from '$lib/components/PageHead.svelte';
	import ProjectEntry from '$lib/components/ProjectEntry.svelte';
</script>

<svelte:head>
	<title>{contributionsPage.title}</title>
</svelte:head>

<PageHead
	mark={contributionsPage.eyebrowMark}
	eyebrow={contributionsPage.eyebrow}
	heading={contributionsPage.heading}
	intro={contributionsPage.intro}
/>

<section class="wrap mt-14 sm:mt-20">
	<div class="spread">
		<div class="body border-b border-rule">
			<ProjectEntry {...contributionsPage.item} layout="row" level={2} />
		</div>
	</div>
</section>
