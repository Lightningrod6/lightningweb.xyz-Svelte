<script lang="ts">
	import Kv from '$lib/components/Kv.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { home, ticker, site } from '$lib/content';
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<p class="label">{home.eyebrowMark} {home.eyebrow}</p>
	<h1 class="h1 mt-3"><span class="sentence inline-block">{home.heroA}</span> <span class="sentence inline-block">{home.heroB}</span></h1>
	<p class="mt-5 text-[1.1875rem] leading-relaxed">{home.intro}</p>
	<p class="links mt-6">
		<a href="/projects">{home.ctaProjects}</a>
		<a href="/about-me">{home.ctaAbout}</a>
	</p>
</section>

<section class="wrap section">
	<Kv title={home.plateTitle} note={home.plateLed} rows={home.plate} />
	<ul class="dots muted mt-6 text-[0.875rem]">
		{#each ticker as t (t)}<li>{t}</li>{/each}
	</ul>
</section>

<section class="wrap section">
	<div class="flex flex-wrap items-baseline justify-between gap-4">
		<div>
			<p class="label">{home.featuredEyebrow}</p>
			<h2 class="h2 sentence mt-1">{home.featuredTitle}</h2>
		</div>
		<a href="/projects" class="text-[0.9375rem]">{home.allProjects}</a>
	</div>
	<div class="mt-6">
		<ProjectList projects={[...home.featured, ...home.more]} showSlot />
	</div>
</section>

<section class="wrap section">
	<p class="label">{home.aboutEyebrow}</p>
	<h2 class="h2 sentence mt-1">{home.aboutTitle}</h2>
	<p class="mt-4">{home.about}</p>
	<p class="mt-4"><a href="/about-me">{home.aboutCta}</a></p>

	<div class="mt-8">
		<Kv title={home.loadoutTitle} rows={home.loadout} />
	</div>
</section>

<section class="wrap section">
	<h2 class="h2 sentence">{home.openTitle}</h2>
	<p class="mt-4">{home.openBody}</p>
	<p class="links mt-4">
		<a href={site.github} target="_blank" rel="noreferrer">{home.openCtaGithub}</a>
		<a href="/projects">{home.openCtaProjects}</a>
	</p>
</section>
