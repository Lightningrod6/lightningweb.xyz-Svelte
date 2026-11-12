<script lang="ts">
	import { aboutPage as pg, site } from '$lib/content';
	import PageHead from '$lib/components/PageHead.svelte';
	import DataPlate from '$lib/components/DataPlate.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
</script>

<svelte:head>
	<title>{pg.title}</title>
</svelte:head>

<PageHead mark={pg.eyebrowMark} eyebrow={pg.eyebrow} heading={pg.heading} />

<!-- short version + personnel file -->
<section class="rg">
	<div class="cell short col-span-12 lg:col-span-7">
		<h2 class="label sq-label">{pg.shortTitle}</h2>
		<p class="lead">{pg.short}</p>
	</div>
	<div class="file col-span-12 lg:col-span-5">
		<div class="file-plate">
			<DataPlate title={pg.fileTitle} led={pg.fileLed} rows={pg.file} />
		</div>
		<a href={site.github} target="_blank" rel="noreferrer" class="cell-link cell-link--volt file-link">
			<span>{pg.githubLabel}</span>
			<Arrow external />
		</a>
	</div>
</section>

<!-- how I work -->
<section class="rg">
	<div class="cell col-span-12 lg:col-span-3">
		<h2 class="label sq-label">{pg.workTitle}</h2>
	</div>
	<ul class="work col-span-12 lg:col-span-9">
		{#each pg.work as w (w.k)}
			<li><span class="work-k label">{w.k}</span><span class="work-v"> — {w.v}</span></li>
		{/each}
	</ul>
</section>

<!-- off the clock -->
<section class="rg">
	<div class="cell col-span-12 off-head">
		<h2 class="label sq-label">{pg.offTitle}</h2>
	</div>
	{#each pg.off as item (item.name)}
		<div class="cell off col-span-12 sm:col-span-6 lg:col-span-3">
			<h3 class="display off-name">{item.name}</h3>
			<p class="body">{item.body}</p>
		</div>
	{/each}
</section>

<!-- timeline -->
<section class="rg">
	<div class="cell tl-head col-span-12">
		<p class="label sq-label">{pg.timelineEyebrow}</p>
		<h2 class="display h2">{pg.timelineTitle}</h2>
	</div>
	<ol class="tl col-span-12">
		{#each pg.milestones as m (m.year)}
			<li class="tl-row">
				<span class="tl-year">{m.year}</span>
				<div class="tl-body">
					<h3 class="tl-title">{m.title}</h3>
					<p class="body">{m.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	.short {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding-block: calc(var(--pad) * 1.25);
	}
	.short .lead {
		max-width: 52ch;
	}

	.file {
		display: grid;
		grid-template-rows: 1fr auto;
		gap: var(--rule);
		background: var(--color-ink);
	}
	.file-link {
		min-height: 6rem;
		font-family: var(--font-mono);
		font-size: 0.85rem;
		letter-spacing: 0.1em;
	}
	.file-link :global(.arrow) {
		width: 1.4rem;
		height: 1.4rem;
	}

	.work li {
		padding: 1.1rem var(--pad);
		font-size: clamp(1.05rem, 1.5vw, 1.3rem);
		font-weight: 500;
		line-height: 1.35;
		letter-spacing: -0.01em;
	}
	.work li + li {
		border-top: var(--hair) solid var(--color-ink);
	}
	.work-k {
		display: inline-block;
		background: var(--color-volt);
		padding: 0.2rem 0.45rem;
		margin-right: 0.15rem;
		vertical-align: 0.15em;
	}
	@media (min-width: 768px) {
		.work li {
			display: grid;
			grid-template-columns: 9rem minmax(0, 1fr);
			align-items: baseline;
		}
		.work-k {
			justify-self: start;
		}
	}

	.off-head {
		padding-block: 0.95rem;
	}
	.off {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 15rem;
	}
	.off-name {
		font-size: clamp(1.6rem, 2.3vw, 2.1rem);
		line-height: 0.92;
		letter-spacing: -0.04em;
	}
	.off .body {
		margin-top: auto;
	}

	.tl-head {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding-top: calc(var(--pad) * 1.4);
	}

	.tl {
		display: grid;
		gap: var(--rule);
		background: var(--color-ink);
	}
	.tl-row {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: var(--rule);
	}
	.tl-row > * {
		grid-column: 1 / -1;
		min-width: 0;
		background: var(--color-paper);
		padding: var(--pad);
	}
	.tl-year {
		font-weight: 700;
		font-size: clamp(3rem, 6.5vw, 6.5rem);
		line-height: 0.8;
		letter-spacing: -0.05em;
		font-variant-numeric: tabular-nums;
		padding-bottom: calc(var(--pad) * 0.6);
		transition: background-color 80ms linear;
	}
	.tl-row:hover .tl-year {
		background: var(--color-volt);
	}
	.tl-body {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.tl-title {
		font-weight: 700;
		font-size: clamp(1.25rem, 2vw, 1.75rem);
		line-height: 1.05;
		letter-spacing: -0.025em;
		text-transform: uppercase;
	}

	@media (min-width: 640px) {
		.tl-year {
			grid-column: span 4 / span 4;
		}
		.tl-body {
			grid-column: span 8 / span 8;
		}
	}
	@media (min-width: 1024px) {
		.tl-year {
			grid-column: span 3 / span 3;
		}
		.tl-body {
			grid-column: span 9 / span 9;
			flex-direction: row;
			align-items: flex-start;
			gap: var(--pad);
		}
		.tl-title {
			flex: 0 0 33%;
		}
	}
</style>
