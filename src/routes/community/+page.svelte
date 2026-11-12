<script lang="ts">
	import { communityPage, site } from '$lib/content';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Pane from '$lib/components/Pane.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
</script>

<svelte:head>
	<title>{communityPage.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<PageHeader
	mark={communityPage.eyebrowMark}
	eyebrow={communityPage.eyebrow}
	heading={communityPage.heading}
	intro={communityPage.intro}
/>

<section class="wrap split">
	<Pane title={communityPage.findsTitle}>
		<ul class="finds">
			{#each communityPage.finds as f (f)}
				<li>{f}</li>
			{/each}
		</ul>
	</Pane>

	<div class="join">
		<div>
			<h2 class="h2">{communityPage.joinTitle}</h2>
			<p class="prose">{communityPage.joinBody}</p>
		</div>
		<div class="actions">
			<a href={communityPage.discord} target="_blank" rel="noreferrer" class="btn btn-primary">
				{communityPage.joinCta}
				<Arrow class="arrow" />
			</a>
			<a href={site.github} target="_blank" rel="noreferrer" class="btn">{communityPage.codeCta}</a>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		gap: var(--space-3);
		align-items: stretch;
	}
	.finds {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.finds li {
		position: relative;
		padding: 12px var(--space-2) 12px 40px;
		font-family: var(--sans);
		font-size: 0.9375rem;
		line-height: 1.5rem;
		color: var(--text);
	}
	.finds li + li {
		border-top: 1px solid var(--line);
	}
	/* square bullet drawn in CSS */
	.finds li::before {
		content: '';
		position: absolute;
		left: var(--space-2);
		top: 21px;
		width: 6px;
		height: 6px;
		background: var(--accent);
	}

	.join {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-3) var(--space-2);
		border: 1px solid var(--line);
		border-left: 2px solid var(--accent);
		border-radius: 2px;
		background: var(--surface);
	}
	.join .h2 {
		margin-top: 0;
	}
	.join .prose {
		margin-top: var(--space-2);
	}
	.actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	@media (min-width: 640px) {
		.join {
			padding: var(--space-4);
		}
	}
	@media (min-width: 900px) {
		.split {
			grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
			gap: var(--space-4);
		}
	}
</style>
