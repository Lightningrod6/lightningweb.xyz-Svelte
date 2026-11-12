<script lang="ts">
	import { home, site } from '$lib/content';
	import Bolt from '$lib/components/Bolt.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import DataPlate from '$lib/components/DataPlate.svelte';
	import ProjectCell from '$lib/components/ProjectCell.svelte';
	import SlotCell from '$lib/components/SlotCell.svelte';
	import Ticker from '$lib/components/Ticker.svelte';

	const projects = [...home.featured, ...home.more];
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<!-- ============ HERO ============ -->
<section class="rg">
	<p class="cell eyebrow label"><span class="mark">{home.eyebrowMark}</span>{home.eyebrow}</p>

	<h1 class="hero-h1">
		<span class="hero-word hero-a fit">{home.heroA}</span>
		<span class="hero-word hero-b fit">{home.heroB}</span>
		<span class="hero-bolt fit" aria-hidden="true"><Bolt class="h-[0.78em] w-[0.78em]" /></span>
	</h1>

	<div class="cell hero-intro col-span-12 lg:col-span-6">
		<p class="lead">{home.intro}</p>
	</div>

	<a href="/projects" class="cell-link cell-link--volt col-span-12 sm:col-span-6 lg:col-span-3">
		<span>{home.ctaProjects}</span>
		<Arrow />
	</a>
	<a href="/about-me" class="cell-link col-span-12 sm:col-span-6 lg:col-span-3">
		<span>{home.ctaAbout}</span>
		<Arrow />
	</a>

	<div class="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-3">
		<DataPlate title={home.plateTitle} led={home.plateLed} rows={home.plate} />
	</div>
</section>

<Ticker />

<!-- ============ FEATURED PROJECTS ============ -->
<section class="rg">
	<div class="cell sec-head col-span-12 md:col-span-8 lg:col-span-9">
		<p class="label sq-label">{home.featuredEyebrow}</p>
		<h2 class="display h2">{home.featuredTitle}</h2>
	</div>
	<a href="/projects" class="cell-link col-span-12 md:col-span-4 lg:col-span-3">
		<span>{home.allProjects}</span>
		<Arrow />
	</a>

	{#each projects as p (p.name)}
		<ProjectCell project={p} class="col-span-12 md:col-span-6 lg:col-span-4" />
	{/each}
	<SlotCell class="col-span-12" />
</section>

<!-- ============ OPERATOR ============ -->
<section class="rg">
	<div class="cell sec-head about-cell col-span-12 lg:col-span-7">
		<p class="label sq-label">{home.aboutEyebrow}</p>
		<h2 class="display h2">{home.aboutTitle}</h2>
		<p class="lead mt-auto">{home.about}</p>
		<a href="/about-me" class="btn self-start">
			<span>{home.aboutCta}</span>
			<Arrow />
		</a>
	</div>
	<div class="col-span-12 lg:col-span-5">
		<DataPlate title={home.loadoutTitle} rows={home.loadout} />
	</div>
</section>

<!-- ============ GITHUB ============ -->
<section class="rg">
	<div class="cell open-cell bg-volt col-span-12 lg:col-span-8">
		<h2 class="display h2 open-title">{home.openTitle}</h2>
		<p class="lead">{home.openBody}</p>
	</div>
	<div class="open-actions col-span-12 lg:col-span-4">
		<a href={site.github} target="_blank" rel="noreferrer" class="cell-link cell-link--ink">
			<span>{home.openCtaGithub}</span>
			<Arrow external />
		</a>
		<a href="/projects" class="cell-link">
			<span>{home.openCtaProjects}</span>
			<Arrow />
		</a>
	</div>
</section>

<style>
	/* the hero heading is its own 12-col rule grid; tracks match the section's */
	.hero-h1 {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: var(--rule);
		background: var(--color-ink);
		--len: 9;
		--k: 0.58;
		--fit-max: 16rem;
	}
	.hero-word {
		display: block;
		font-weight: 700;
		line-height: 0.8;
		letter-spacing: -0.055em;
		text-transform: uppercase;
		padding: calc(var(--pad) * 0.9) var(--pad) calc(var(--pad) * 0.75);
		background: var(--color-paper);
		min-width: 0;
	}
	.hero-a {
		grid-column: 1 / -1;
		/* optical: pull the L to the rule */
		padding-left: calc(var(--pad) * 0.7);
	}
	.hero-b {
		grid-column: span 8 / span 8;
		background: var(--color-volt);
		padding-left: calc(var(--pad) * 0.7);
	}
	.hero-bolt {
		grid-column: span 4 / span 4;
		display: grid;
		place-items: center;
		background: var(--color-ink);
		color: var(--color-volt);
		line-height: 0.8;
	}

	.hero-intro {
		display: flex;
		align-items: flex-end;
		min-height: 12rem;
	}

	.rg > .cell-link {
		min-height: 5.5rem;
	}
	@media (min-width: 1024px) {
		.rg > .cell-link {
			min-height: 7.5rem;
		}
	}

	.sec-head {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding-top: calc(var(--pad) * 1.4);
	}

	.about-cell {
		gap: 1.75rem;
	}
	.about-cell .lead {
		max-width: 46ch;
	}

	.open-cell {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-block: calc(var(--pad) * 1.5);
	}
	.open-cell .lead {
		max-width: 48ch;
	}
	.open-title {
		font-size: clamp(2.75rem, 8vw, 8.5rem);
	}
	.open-actions {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: var(--rule);
		background: var(--color-ink);
	}
	.open-actions .cell-link {
		min-height: 8rem;
	}
</style>
