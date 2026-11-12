<script lang="ts">
	import { home, slot, site } from '$lib/content';
	import Arrow from '$lib/components/Arrow.svelte';
	import Bolt from '$lib/components/Bolt.svelte';
	import Colophon from '$lib/components/Colophon.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';
	import ProjectEntry from '$lib/components/ProjectEntry.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<!-- ============ HERO ============ -->
<section class="wrap pt-10 sm:pt-14 lg:pt-16">
	<div class="flex items-center gap-5">
		<Eyebrow mark={home.eyebrowMark} text={home.eyebrow} class="min-w-0" />
		<span class="hidden h-px flex-1 bg-rule sm:block" aria-hidden="true"></span>
	</div>

	<h1 class="display display-xl hero mt-8 sm:mt-12">
		<span class="sentence">{home.heroA}</span>
		<span class="sentence hero-b"><span class="hl">{home.heroB}</span></span>
	</h1>

	<div class="spread mt-10 sm:mt-14">
		<div class="margin hidden lg:block" aria-hidden="true">
			<Bolt outline class="hero-bolt" />
		</div>
		<div class="body grid gap-12 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] xl:gap-16">
			<div>
				<p class="standfirst">{home.intro}</p>
				<div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
					<a href="/projects" class="btn">
						<span>{home.ctaProjects}</span>
						<Arrow />
					</a>
					<a href="/about-me" class="textlink">
						<span class="link">{home.ctaAbout}</span>
					</a>
				</div>
			</div>
			<Colophon title={home.plateTitle} led={home.plateLed} rows={home.plate} class="max-w-xl xl:max-w-none" />
		</div>
	</div>
</section>

<div class="mt-16 sm:mt-24">
	<Ticker />
</div>

<!-- ============ FEATURED PROJECTS ============ -->
<section class="wrap mt-20 sm:mt-28">
	<SectionHead eyebrow={home.featuredEyebrow} title={home.featuredTitle}>
		{#snippet aside()}
			<a href="/projects" class="textlink">
				<span class="link">{home.allProjects}</span>
				<Arrow />
			</a>
		{/snippet}
	</SectionHead>

	<div class="spread mt-10">
		<div class="body">
			{#each home.featured as p (p.name)}
				<ProjectEntry {...p} layout="row" level={3} />
			{/each}

			<div class="mt-6 grid gap-x-10 md:grid-cols-2">
				{#each home.more as p (p.name)}
					<ProjectEntry {...p} layout="compact" level={3} />
				{/each}
				<ProjectEntry
					name={slot.title}
					blurb={slot.blurb}
					tags={slot.tags}
					href={slot.href}
					cta={slot.cta}
					openLabel={slot.label}
					layout="compact"
					level={3}
				/>
			</div>
		</div>
	</div>
</section>

<!-- ============ OPERATOR ============ -->
<section class="wrap mt-20 sm:mt-28">
	<SectionHead eyebrow={home.aboutEyebrow} title={home.aboutTitle} />

	<div class="spread mt-10">
		<div class="body grid gap-12 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] xl:gap-14">
			<div>
				<p class="prose-serif dropcap">{home.about}</p>
				<a href="/about-me" class="textlink mt-5">
					<span class="link">{home.aboutCta}</span>
					<Arrow />
				</a>
			</div>
			<Colophon title={home.loadoutTitle} rows={home.loadout} level={3} class="max-w-xl xl:max-w-none" />
		</div>
	</div>
</section>

<!-- ============ GITHUB ============ -->
<section class="wrap mt-24 sm:mt-32">
	<div class="rule-heavy spread pt-10 sm:pt-12">
		<div class="margin hidden lg:block" aria-hidden="true">
			<Bolt class="open-bolt" />
		</div>
		<div class="body">
			<h2 class="display display-m sentence">{home.openTitle}</h2>
			<p class="measure muted mt-6 text-[1.125rem] leading-relaxed">{home.openBody}</p>
			<div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
				<a href={site.github} target="_blank" rel="noreferrer" class="btn">
					<span>{home.openCtaGithub}</span>
					<Arrow />
				</a>
				<a href="/projects" class="textlink">
					<span class="link">{home.openCtaProjects}</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		font-weight: 360;
	}
	.hero-b {
		font-style: italic;
		font-weight: 330;
		font-variation-settings:
			'opsz' 144,
			'SOFT' 100,
			'WONK' 1;
	}
	@media (min-width: 48rem) {
		.hero-b {
			padding-left: 0.62em;
		}
	}
	@media (min-width: 64rem) {
		/* "Web" steps in to meet the body column */
		.hero-b {
			padding-left: 14rem;
		}
	}

	:global(.hero-bolt) {
		width: 5.5rem;
		height: 5.5rem;
		color: var(--color-ink);
		opacity: 0.7;
	}
	:global(.open-bolt) {
		width: 2.25rem;
		height: 2.25rem;
		color: var(--color-ink);
	}
</style>
