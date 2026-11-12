<script lang="ts">
	import { communityPage as pg, site } from '$lib/content';
	import PageHead from '$lib/components/PageHead.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
</script>

<svelte:head>
	<title>{pg.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<PageHead mark={pg.eyebrowMark} eyebrow={pg.eyebrow} heading={pg.heading} intro={pg.intro} />

<section class="rg">
	<div class="finds col-span-12 lg:col-span-7">
		<h2 class="finds-head label">{pg.findsTitle}</h2>
		<ul>
			{#each pg.finds as f (f)}
				<li>{f}</li>
			{/each}
		</ul>
	</div>

	<div class="cell join bg-volt col-span-12 lg:col-span-5">
		<h2 class="display join-title">{pg.joinTitle}</h2>
		<p class="join-body">{pg.joinBody}</p>
		<div class="join-actions">
			<a href={pg.discord} target="_blank" rel="noreferrer" class="btn btn--ink">
				<span>{pg.joinCta}</span>
				<Arrow external />
			</a>
			<a href={site.github} target="_blank" rel="noreferrer" class="btn btn--clear">
				<span>{pg.codeCta}</span>
				<Arrow external />
			</a>
		</div>
	</div>
</section>

<style>
	.finds {
		display: flex;
		flex-direction: column;
	}
	.finds-head {
		padding: 0.95rem var(--pad);
		background: var(--color-ink);
		color: var(--color-paper);
	}
	.finds ul {
		flex: 1;
		display: grid;
		grid-auto-rows: minmax(min-content, 1fr);
	}
	.finds li {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.25rem var(--pad);
		font-size: clamp(1.1rem, 1.5vw, 1.35rem);
		font-weight: 500;
		line-height: 1.3;
		letter-spacing: -0.012em;
	}
	.finds li + li {
		border-top: var(--hair) solid var(--color-ink);
	}
	.finds li::before {
		content: '';
		flex: none;
		width: 0.7em;
		height: 0.7em;
		margin-top: 0.3em;
		background: var(--color-volt);
		outline: var(--hair) solid var(--color-ink);
		outline-offset: -1px;
	}

	.join {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		padding-block: calc(var(--pad) * 1.4);
	}
	.join-title {
		font-size: clamp(2.4rem, 4.4vw, 4.25rem);
		line-height: 0.88;
	}
	.join-body {
		font-size: 1.05rem;
		line-height: 1.5;
		max-width: 44ch;
	}
	.join-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: auto;
	}
</style>
