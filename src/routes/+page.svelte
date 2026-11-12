<script lang="ts">
	import InfoCard from '$lib/components/InfoCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SlotCard from '$lib/components/SlotCard.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { home, ticker, site } from '$lib/content';
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<section class="wrap grid gap-12 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
	<div class="rise">
		<p class="eyebrow"><span class="mark">{home.eyebrowMark}</span>{home.eyebrow}</p>
		<h1 class="display mt-5">
			<span class="sentence inline-block">{home.heroA}</span>
			<span class="sentence inline-block accent">{home.heroB}</span>
		</h1>
		<p class="soft mt-6 max-w-[34rem] text-[1.1875rem] leading-relaxed">{home.intro}</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a href="/projects" class="btn btn-primary">{home.ctaProjects}</a>
			<a href="/about-me" class="btn btn-ghost">{home.ctaAbout}</a>
		</div>
	</div>
	<div class="rise rise-2">
		<InfoCard title={home.plateTitle} note={home.plateLed} rows={home.plate} />
	</div>
</section>

<section class="wrap mt-14">
	<ul class="flex flex-wrap gap-2 border-y py-5" style="border-color: var(--line)">
		{#each ticker as t (t)}<li class="chip">{t}</li>{/each}
	</ul>
</section>

<section class="wrap section">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="eyebrow">{home.featuredEyebrow}</p>
			<h2 class="h2 sentence mt-2">{home.featuredTitle}</h2>
		</div>
		<a href="/projects" class="tlink inline-flex items-center gap-1.5 text-[0.9375rem]">{home.allProjects} <Arrow /></a>
	</div>
	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each [...home.featured, ...home.more] as p (p.name)}
			<ProjectCard {...p} />
		{/each}
		<SlotCard />
	</div>
</section>

<section class="wrap section grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
	<div>
		<p class="eyebrow">{home.aboutEyebrow}</p>
		<h2 class="h2 sentence mt-2">{home.aboutTitle}</h2>
		<p class="soft mt-5 max-w-[38rem] leading-relaxed">{home.about}</p>
		<a href="/about-me" class="tlink mt-6 inline-flex items-center gap-1.5 text-[0.9375rem]">{home.aboutCta} <Arrow /></a>
	</div>
	<div class="card self-start">
		<div class="border-b px-5 py-3 text-[0.875rem] font-semibold" style="border-color: var(--line)">{home.loadoutTitle}</div>
		<div class="px-5 py-2">
			{#each home.loadout as l (l.k)}
				<div class="lrow py-3">
					<p class="font-mono text-[0.75rem] muted">{l.k}</p>
					<p class="mt-1 text-[0.9375rem]">{l.v}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="wrap section">
	<div class="open card flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
		<div class="max-w-[36rem]">
			<h2 class="h2 sentence">{home.openTitle}</h2>
			<p class="soft mt-4 leading-relaxed">{home.openBody}</p>
		</div>
		<div class="flex flex-wrap gap-3">
			<a href={site.github} target="_blank" rel="noreferrer" class="btn btn-primary">{home.openCtaGithub}</a>
			<a href="/projects" class="btn btn-ghost">{home.openCtaProjects}</a>
		</div>
	</div>
</section>

<style>
	.accent {
		color: var(--accent);
	}
	.lrow + .lrow {
		border-top: 1px solid var(--line);
	}
	.open {
		border-left: 3px solid var(--accent);
	}
</style>
