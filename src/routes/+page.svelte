<script lang="ts">
	import { home, slot, statusLabel, site } from '$lib/content';
	import Pane from '$lib/components/Pane.svelte';
	import KvTable from '$lib/components/KvTable.svelte';
	import ServiceList from '$lib/components/ServiceList.svelte';
	import ServiceRow from '$lib/components/ServiceRow.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
	import Arrow from '$lib/components/Arrow.svelte';

	const services = [...home.featured, ...home.more];
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<!-- hero -->
<section class="wrap hero">
	<div class="intro">
		<p class="eyebrow"><span class="mark">{home.eyebrowMark}</span> {home.eyebrow}</p>
		<h1>
			<span class="a">{home.heroA}</span>
			<span class="b">{home.heroB}</span>
		</h1>
		<p class="lede">{home.intro}</p>
		<div class="btn-row cta">
			<a href="/projects" class="btn btn-primary">
				{home.ctaProjects}
				<Arrow class="arrow" />
			</a>
			<a href="/about-me" class="btn">{home.ctaAbout}</a>
		</div>
	</div>
</section>

<Ticker />

<!-- services -->
<section class="wrap band">
	<div class="section-head">
		<div>
			{#if home.featuredEyebrow}<p class="eyebrow">{home.featuredEyebrow}</p>{/if}
			<h2 class="h2">{home.featuredTitle}</h2>
		</div>
		<a href="/projects" class="btn">{home.allProjects}</a>
	</div>

	<ServiceList>
		{#each services as p (p.name)}
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

<!-- about -->
<section class="wrap band about">
	<div>
		{#if home.aboutEyebrow}<p class="eyebrow">{home.aboutEyebrow}</p>{/if}
		<h2 class="h2">{home.aboutTitle}</h2>
		<p class="prose">{home.about}</p>
		<a href="/about-me" class="btn">
			{home.aboutCta}
			<Arrow class="arrow" />
		</a>
	</div>

	<Pane title={home.loadoutTitle}>
		<KvTable rows={home.loadout} />
	</Pane>
</section>

<!-- built in the open -->
<section class="wrap band">
	<div class="open">
		<div class="open-copy">
			<h2 class="h2">{home.openTitle}</h2>
			<p class="prose">{home.openBody}</p>
		</div>
		<div class="btn-row">
			<a href={site.github} target="_blank" rel="noreferrer" class="btn btn-primary">
				{home.openCtaGithub}
				<Arrow class="arrow" />
			</a>
			<a href="/projects" class="btn">{home.openCtaProjects}</a>
		</div>
	</div>
</section>

<style>
	.hero {
		display: grid;
		gap: var(--space-5);
		padding-top: var(--space-6);
		padding-bottom: var(--space-6);
	}
	.intro {
		min-width: 0;
	}
	h1 {
		margin: var(--space-3) 0 0;
		font-family: var(--mono);
		font-weight: 600;
		font-size: clamp(3rem, 10vw, 8.5rem);
		line-height: 0.95;
		letter-spacing: -0.045em;
	}
	h1 span {
		display: block;
	}
	.a {
		color: var(--text);
	}
	.b {
		color: var(--accent-text);
	}
	/* static block caret after the wordmark */
	.b::after {
		content: '';
		display: inline-block;
		width: 0.5em;
		height: 0.09em;
		margin-left: 0.1em;
		background: var(--accent);
		vertical-align: baseline;
	}
	.hero .lede {
		margin-top: var(--space-3);
		font-size: 1.125rem;
		max-width: 60ch;
	}
	.cta {
		margin-top: var(--space-4);
	}
	.band {
		padding-top: var(--space-8);
	}

	.about {
		display: grid;
		gap: var(--space-4);
		align-items: start;
	}
	.about .prose {
		margin-top: var(--space-3);
		margin-bottom: var(--space-3);
	}

	.open {
		display: grid;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-2);
		border: 1px solid var(--line);
		border-left: 2px solid var(--accent);
		border-radius: 2px;
		background: var(--surface);
	}
	.open .h2 {
		margin-top: 0;
	}
	.open .prose {
		margin-top: var(--space-2);
	}

	@media (min-width: 640px) {
		.open {
			padding: var(--space-4);
		}
	}

	@media (min-width: 768px) {
		.hero {
			padding-top: var(--space-8);
			padding-bottom: var(--space-8);
		}
		.band {
			padding-top: var(--space-12);
		}
	}

	@media (min-width: 1024px) {
		.about {
			grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
			gap: var(--space-6);
		}
		.open {
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: center;
			gap: var(--space-6);
			padding: var(--space-5);
		}
	}
</style>
