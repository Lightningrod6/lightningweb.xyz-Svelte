<script lang="ts">
	import { contributionsPage, statusLabel } from '$lib/content';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ServiceList from '$lib/components/ServiceList.svelte';
	import ServiceRow from '$lib/components/ServiceRow.svelte';

	const item = contributionsPage.item;
</script>

<svelte:head>
	<title>{contributionsPage.title}</title>
</svelte:head>

<PageHeader
	mark={contributionsPage.eyebrowMark}
	eyebrow={contributionsPage.eyebrow}
	heading={contributionsPage.heading}
	intro={contributionsPage.intro}
/>

<section class="wrap">
	<ServiceList>
		<ServiceRow {...item} label={statusLabel[item.status]} />
	</ServiceList>
</section>
