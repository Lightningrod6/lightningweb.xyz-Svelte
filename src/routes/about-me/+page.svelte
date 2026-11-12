<script lang="ts">
	import { aboutPage, site } from '$lib/content';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Pane from '$lib/components/Pane.svelte';
	import KvTable from '$lib/components/KvTable.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
</script>

<svelte:head>
	<title>{aboutPage.title}</title>
</svelte:head>

<PageHeader mark={aboutPage.eyebrowMark} eyebrow={aboutPage.eyebrow} heading={aboutPage.heading} />

<section class="wrap layout">
	<div class="col">
		<Pane title={aboutPage.shortTitle}>
			<p class="prose pad">{aboutPage.short}</p>
		</Pane>

		<Pane title={aboutPage.workTitle}>
			<ul class="work">
				{#each aboutPage.work as w (w.k)}
					<li>
						<span class="k">{w.k}</span><span class="v"> — {w.v}</span>
					</li>
				{/each}
			</ul>
		</Pane>

		<Pane title={aboutPage.offTitle}>
			<ul class="off">
				{#each aboutPage.off as item (item.name)}
					<li>
						<h3>{item.name}</h3>
						<p>{item.body}</p>
					</li>
				{/each}
			</ul>
		</Pane>
	</div>

	<aside class="side">
		<Pane title={aboutPage.fileTitle}>
			<KvTable rows={aboutPage.file} />
		</Pane>
		<a href={site.github} target="_blank" rel="noreferrer" class="btn gh">
			{aboutPage.githubLabel}
			<Arrow class="arrow" />
		</a>
	</aside>
</section>

<!-- timeline as a log -->
<section class="wrap timeline">
	<div class="section-head">
		<div>
			<p class="eyebrow">{aboutPage.timelineEyebrow}</p>
			<h2 class="h2">{aboutPage.timelineTitle}</h2>
		</div>
	</div>

	<div class="logframe">
		<ol class="log">
			{#each aboutPage.milestones as m (m.year)}
				<li>
					<span class="year">{m.year}</span>
					<div class="entry">
						<h3>{m.title}</h3>
						<p>{m.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.layout {
		display: grid;
		gap: var(--space-3);
		align-items: start;
	}
	.col,
	.side {
		display: grid;
		gap: var(--space-3);
		min-width: 0;
	}
	.pad {
		margin: 0;
		padding: var(--space-2);
	}

	/* how I work: label, then " — " + text */
	.work {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.work li {
		padding: 12px var(--space-2);
		font-family: var(--sans);
		font-size: 0.9375rem;
		line-height: 1.5rem;
	}
	.work li + li {
		border-top: 1px solid var(--line);
	}
	.k {
		font-family: var(--mono);
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--accent-text);
	}
	.v {
		color: var(--text-2);
	}
	@container (min-width: 28rem) {
		.work li {
			display: grid;
			grid-template-columns: 6.5rem minmax(0, 1fr);
			gap: var(--space-1);
			align-items: baseline;
		}
	}

	/* off-clock: hairline grid of cells */
	.off {
		display: grid;
		gap: 1px;
		margin: 0;
		padding: 0;
		list-style: none;
		background: var(--line);
	}
	.off li {
		padding: var(--space-2);
		background: var(--surface);
	}
	.off h3,
	.entry h3 {
		margin: 0;
		font-family: var(--mono);
		font-size: 0.9375rem;
		font-weight: 500;
		line-height: 1.5rem;
		color: var(--text);
	}
	.off p,
	.entry p {
		margin: 4px 0 0;
		font-family: var(--sans);
		font-size: 0.9375rem;
		line-height: 1.5rem;
		color: var(--text-2);
		max-width: 64ch;
	}

	.gh {
		justify-content: space-between;
		width: 100%;
		min-height: 48px;
	}

	.timeline {
		padding-top: var(--space-8);
	}
	.logframe {
		container-type: inline-size;
		border: 1px solid var(--line);
		border-radius: 2px;
		background: var(--surface);
	}
	.log {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.log li {
		position: relative;
		display: grid;
		gap: 4px;
		padding: var(--space-2);
	}
	.log li + li {
		border-top: 1px solid var(--line);
	}
	.year {
		font-family: var(--mono);
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.5rem;
		color: var(--accent-text);
	}
	.entry {
		position: relative;
		min-width: 0;
	}

	@container (min-width: 36rem) {
		.log {
			padding-block: var(--space-1);
		}
		.log li {
			grid-template-columns: 5rem minmax(0, 1fr);
			gap: var(--space-3);
			padding: var(--space-2) var(--space-3);
		}
		.log li + li {
			border-top: 0;
		}
		/* continuous rail between the year column and the entries */
		.log li::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: calc(var(--space-3) + 5rem + 12px);
			width: 1px;
			background: var(--line-strong);
		}
		.log li:first-child::after {
			top: 24px;
		}
		.log li:last-child::after {
			bottom: auto;
			height: 24px;
		}
		/* node on the rail for each entry; the latest one is filled */
		.entry::before {
			content: '';
			position: absolute;
			z-index: 1;
			left: -15px;
			top: 8px;
			width: 7px;
			height: 7px;
			background: var(--surface);
			box-shadow: inset 0 0 0 1.5px var(--accent);
		}
		.log li:last-child .entry::before {
			background: var(--accent);
		}
	}

	@media (min-width: 640px) {
		.off {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 768px) {
		.timeline {
			padding-top: var(--space-12);
		}
	}
	@media (min-width: 1024px) {
		.layout {
			grid-template-columns: minmax(0, 1fr) minmax(0, 22rem);
			gap: var(--space-4);
		}
		.side {
			position: sticky;
			top: calc(var(--bar-h) + var(--space-3));
		}
	}
</style>
