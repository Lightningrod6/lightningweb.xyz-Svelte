<script lang="ts">
	import DefList from '$lib/components/DefList.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import SlotNote from '$lib/components/SlotNote.svelte';
	import { home, ticker, site } from '$lib/content';
	const [lead, ...side] = home.featured;
	const elections = home.more.filter((p) => p.name.startsWith('Elections'));
	const others = home.more.filter((p) => !p.name.startsWith('Elections'));
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<section class="wrap pt-12 sm:pt-16">
	<p class="kicker">{home.eyebrowMark} {home.eyebrow}</p>
	<h1 class="display mt-5">
		<span class="sentence block">{home.heroA}</span>
		<span class="sentence block pl-[0.9em]">{home.heroB}</span>
	</h1>

	<div class="mt-10 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
		<div class="max-w-[38rem] lg:pl-[7.5rem]">
			<p class="serif text-[1.5rem] leading-snug sm:text-[1.75rem]">{home.intro}</p>
			<p class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
				<a href="/projects" class="button">{home.ctaProjects}</a>
				<a href="/about-me" class="link">{home.ctaAbout}</a>
			</p>
		</div>
		<DefList title={home.plateTitle} note={home.plateLed} rows={home.plate} />
	</div>
</section>

<div class="wrap mt-16">
	<ul class="bullets stack border-y py-3 text-center text-[0.8125rem] font-semibold tracking-[0.08em] uppercase" style="border-color: var(--ink)">
		{#each ticker as t (t)}<li>{t}</li>{/each}
	</ul>
</div>

<section class="wrap section">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="kicker">{home.featuredEyebrow}</p>
			<h2 class="h2 mt-2"><span class="sentence mark-under">{home.featuredTitle}</span></h2>
		</div>
		<a href="/projects" class="link pb-1">{home.allProjects}</a>
	</div>

	<div class="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
		<div class="lg:col-span-7"><Feature p={lead} size="lead" /></div>
		<div class="rows space-y-0 lg:col-span-5 lg:border-l lg:pl-10" style="border-color: var(--rule)">
			{#each side as p (p.name)}
				<div class="py-7 first:pt-0"><Feature {p} size="row" /></div>
			{/each}
		</div>
	</div>

	<div class="scribble mt-14"></div>

	<div class="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
		{#each others as p (p.name)}
			<Feature {p} size="col" />
		{/each}
		<SlotNote />
	</div>

	{#each elections as p (p.name)}
		<div class="mt-14"><Feature {p} size="wide" /></div>
	{/each}
</section>

<section class="wrap section grid gap-12 lg:grid-cols-12 lg:gap-10">
	<div class="lg:col-span-7">
		<p class="kicker">{home.aboutEyebrow}</p>
		<h2 class="h2 mt-2"><span class="sentence mark-under">{home.aboutTitle}</span></h2>
		<p class="serif mt-8 text-[1.3125rem] leading-relaxed">{home.about}</p>
		<p class="mt-6"><a href="/about-me" class="link">{home.aboutCta}</a></p>
	</div>
	<div class="lg:col-span-4 lg:col-start-9 lg:pt-24">
		<DefList title={home.loadoutTitle} rows={home.loadout} />
	</div>
</section>

<section class="band section py-20">
	<div class="wrap grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
		<h2 class="h1 sentence">{home.openTitle}</h2>
		<div>
			<p class="text-[1.125rem] leading-relaxed">{home.openBody}</p>
			<p class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
				<a href={site.github} target="_blank" rel="noreferrer" class="button">{home.openCtaGithub}</a>
				<a href="/projects" class="link">{home.openCtaProjects}</a>
			</p>
		</div>
	</div>
</section>

<style>
	.stack > :global(li) {
		white-space: nowrap;
	}
</style>
