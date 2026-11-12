<script lang="ts">
	import { projectsPage, slot, statusLabel } from '$lib/content';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ServiceList from '$lib/components/ServiceList.svelte';
	import ServiceRow from '$lib/components/ServiceRow.svelte';
</script>

<svelte:head>
	<title>{projectsPage.title}</title>
</svelte:head>

<PageHeader
	mark={projectsPage.eyebrowMark}
	eyebrow={projectsPage.eyebrow}
	heading={projectsPage.heading}
	intro={projectsPage.intro}
/>

<section class="wrap">
	<ServiceList>
		{#each projectsPage.projects as p (p.name)}
			<ServiceRow {...p} label={statusLabel[p.status]} />
		{/each}
		<ServiceRow
			vacant
			name={slot.title}
			blurb={slot.blurb}
			tags={slot.tags}
			href={slot.href}
			status="idle"
			label={slot.label}
			cta={slot.cta}
		/>
	</ServiceList>
</section>
