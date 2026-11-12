<script lang="ts">
	import { aboutPage, site } from '$lib/content';
	import Arrow from '$lib/components/Arrow.svelte';
	import Colophon from '$lib/components/Colophon.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
</script>

<svelte:head>
	<title>{aboutPage.title}</title>
</svelte:head>

<PageHead mark={aboutPage.eyebrowMark} eyebrow={aboutPage.eyebrow} heading={aboutPage.heading} />

<!-- short version + personnel file -->
<section class="wrap mt-14 sm:mt-20">
	<div class="spread">
		<div class="margin">
			<h2 class="label muted">{aboutPage.shortTitle}</h2>
		</div>
		<div class="body grid gap-14 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] xl:gap-14">
			<p class="prose-serif dropcap">{aboutPage.short}</p>

			<aside class="max-w-xl xl:sticky xl:top-8 xl:self-start xl:max-w-none">
				<Colophon title={aboutPage.fileTitle} led={aboutPage.fileLed} rows={aboutPage.file} />
				<a
					href={site.github}
					target="_blank"
					rel="noreferrer"
					class="textlink mt-4 border-t border-rule w-full justify-between"
				>
					<span class="link">{aboutPage.githubLabel}</span>
					<Arrow />
				</a>
			</aside>
		</div>
	</div>
</section>

<!-- how I work -->
<section class="wrap mt-16 sm:mt-24">
	<div class="spread">
		<div class="margin">
			<h2 class="label muted">{aboutPage.workTitle}</h2>
		</div>
		<div class="body">
			<ul class="border-b border-rule">
				{#each aboutPage.work as w (w.k)}
					<li class="work">
						<span class="label">{w.k}</span>
						<span class="muted"> — {w.v}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- when the keyboard cools -->
<section class="wrap mt-16 sm:mt-24">
	<div class="spread">
		<div class="margin">
			<h2 class="label muted">{aboutPage.offTitle}</h2>
		</div>
		<div class="body">
			<ul class="grid gap-x-10 sm:grid-cols-2">
				{#each aboutPage.off as item (item.name)}
					<li class="off">
						<h3 class="off-name">{item.name}</h3>
						<p class="muted mt-2.5 leading-relaxed">{item.body}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- timeline -->
<section class="wrap mt-24 sm:mt-32">
	<SectionHead eyebrow={aboutPage.timelineEyebrow} title={aboutPage.timelineTitle} />

	<div class="spread mt-10">
		<ol class="body ledger">
			{#each aboutPage.milestones as m (m.year)}
				<li class="entry">
					<span class="year">{m.year}</span>
					<h3 class="title">{m.title}</h3>
					<p class="text muted">{m.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.work {
		border-top: 1px solid var(--color-rule);
		padding-block: 1rem 1.05rem;
		line-height: 1.55;
	}
	.work .label {
		color: var(--color-ink);
	}
	@media (min-width: 40rem) {
		.work {
			display: grid;
			grid-template-columns: 8rem minmax(0, 1fr);
			column-gap: 1rem;
			align-items: baseline;
		}
	}

	.off {
		border-top: 1px solid var(--color-rule);
		padding-block: 1.25rem 1.75rem;
	}
	.off-name {
		font-family: var(--font-serif);
		font-size: clamp(1.5rem, 2.4vw, 1.875rem);
		line-height: 1.05;
		font-weight: 400;
		font-variation-settings:
			'opsz' 72,
			'SOFT' 30;
		letter-spacing: -0.02em;
	}

	.ledger {
		border-top: 2px solid var(--color-ink);
		border-bottom: 1px solid var(--color-rule);
	}
	.ledger .entry {
		display: grid;
		grid-template-columns: 4.75rem minmax(0, 1fr);
		column-gap: 1.25rem;
		row-gap: 0.4rem;
		padding-block: 1.5rem 1.7rem;
	}
	.ledger .entry + .entry {
		border-top: 1px solid var(--color-rule);
	}
	.year {
		grid-row: span 2;
		font-family: var(--font-serif);
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		line-height: 0.95;
		font-weight: 340;
		font-variation-settings:
			'opsz' 144,
			'SOFT' 50;
		font-variant-numeric: lining-nums tabular-nums;
		letter-spacing: -0.02em;
	}
	.title {
		font-family: var(--font-serif);
		font-size: 1.3125rem;
		line-height: 1.2;
		font-weight: 500;
		font-variation-settings: 'opsz' 36;
	}
	.text {
		max-width: 62ch;
		line-height: 1.6;
	}
	@media (min-width: 64rem) {
		.ledger .entry {
			grid-template-columns: 7rem minmax(0, 15rem) minmax(0, 1fr);
			column-gap: 2rem;
		}
		.year {
			grid-row: auto;
		}
		.title {
			padding-top: 0.2rem;
		}
		.text {
			padding-top: 0.15rem;
		}
	}
</style>
