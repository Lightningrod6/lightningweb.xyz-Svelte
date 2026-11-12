<script lang="ts">
	import { projectsPage, slot } from '$lib/content';
	import PageHead from '$lib/components/PageHead.svelte';
	import ProjectEntry from '$lib/components/ProjectEntry.svelte';
</script>

<svelte:head>
	<title>{projectsPage.title}</title>
</svelte:head>

<PageHead
	mark={projectsPage.eyebrowMark}
	eyebrow={projectsPage.eyebrow}
	heading={projectsPage.heading}
	intro={projectsPage.intro}
/>

<section class="wrap mt-14 sm:mt-20">
	<div class="spread">
		<div class="body border-b border-rule">
			{#each projectsPage.projects as p (p.name)}
				<ProjectEntry {...p} layout="row" level={2} />
			{/each}
			<ProjectEntry
				name={slot.title}
				blurb={slot.blurb}
				tags={slot.tags}
				href={slot.href}
				cta={slot.cta}
				openLabel={slot.label}
				layout="row"
				level={2}
			/>
		</div>
	</div>
</section>
