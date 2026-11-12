<script lang="ts">
	import DefList from '$lib/components/DefList.svelte';
	import ProjectRows from '$lib/components/ProjectRows.svelte';
	import { home, ticker, site } from '$lib/content';
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<section class="wrap grid gap-12 pt-14 sm:pt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
	<div>
		<h1 class="display"><span class="sentence inline-block">{home.heroA}</span> <span class="sentence inline-block">{home.heroB}</span></h1>
		<p class="kicker mt-5">{home.eyebrowMark} {home.eyebrow}</p>
		<p class="mt-6 max-w-[36rem] text-[1.25rem] leading-snug">{home.intro}</p>
		<p class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
			<a href="/projects" class="button">{home.ctaProjects}</a>
			<a href="/about-me" class="link">{home.ctaAbout}</a>
		</p>
	</div>
	<div class="lg:pt-3">
		<DefList title={home.plateTitle} note={home.plateLed} rows={home.plate} />
		<ul class="commas muted mt-5 block text-[0.875rem]">
			{#each ticker as t (t)}<li>{t}</li>{/each}
		</ul>
	</div>
</section>

<section class="wrap section">
	<div class="ruled flex flex-wrap items-baseline justify-between gap-4">
		<h2 class="h2 sentence">{home.featuredTitle}</h2>
		<p class="flex items-baseline gap-4">
			<span class="muted">{home.featuredEyebrow}</span>
			<a href="/projects" class="link">{home.allProjects}</a>
		</p>
	</div>
	<div class="mt-4">
		<ProjectRows projects={[...home.featured, ...home.more]} showSlot />
	</div>
</section>

<section class="wrap section grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
	<div class="ruled">
		<h2 class="h2 sentence">{home.aboutTitle}</h2>
		<p class="kicker mt-2">{home.aboutEyebrow}</p>
		<p class="soft mt-5 max-w-[38rem] leading-relaxed">{home.about}</p>
		<p class="mt-5"><a href="/about-me" class="link">{home.aboutCta}</a></p>
	</div>
	<DefList title={home.loadoutTitle} rows={home.loadout} />
</section>

<section class="wrap section">
	<div class="ruled max-w-[40rem]">
		<h2 class="h2 sentence">{home.openTitle}</h2>
		<p class="soft mt-4 leading-relaxed">{home.openBody}</p>
		<p class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
			<a href={site.github} target="_blank" rel="noreferrer" class="button">{home.openCtaGithub}</a>
			<a href="/projects" class="link">{home.openCtaProjects}</a>
		</p>
	</div>
</section>
