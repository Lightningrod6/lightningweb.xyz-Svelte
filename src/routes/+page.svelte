<script lang="ts">
	import Facts from '$lib/components/Facts.svelte';
	import ProjectBlock from '$lib/components/ProjectBlock.svelte';
	import SlotBlock from '$lib/components/SlotBlock.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import Bolt from '$lib/components/Bolt.svelte';
	import { home, ticker, site } from '$lib/content';
	const [deadline, conflicts, api] = home.featured;
	const [bot, voice, elections] = home.more;
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<section class="block-navy cut-bottom relative overflow-hidden">
	<div class="dots pointer-events-none absolute inset-y-0 right-0 w-1/2 text-[var(--navy-2)]" aria-hidden="true"></div>
	<Bolt class="pointer-events-none absolute right-[-3rem] bottom-16 hidden h-[26rem] w-auto rotate-[10deg] lg:block xl:right-[4%]" />
	<div class="wrap relative pt-14 pb-10 sm:pt-20">
		<p class="tape yellow">{home.eyebrowMark} {home.eyebrow}</p>
		<h1 class="wide-black mega mt-8">
			<span class="block text-[var(--yellow)]">{home.heroA}</span>
			<span class="hollow-cream block">{home.heroB}</span>
		</h1>
		<div class="mt-12 grid gap-12 lg:grid-cols-[1fr_24rem] lg:items-start lg:gap-16">
			<div class="max-w-[36rem]">
				<p class="text-[1.375rem] leading-snug font-semibold sm:text-[1.625rem]">{home.intro}</p>
				<p class="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
					<a href="/projects" class="btn">{home.ctaProjects}</a>
					<a href="/about-me" class="go text-[var(--yellow)]">{home.ctaAbout}</a>
				</p>
			</div>
			<div class="count text-[var(--navy)]">
				<Facts title={home.plateTitle} note={home.plateLed} rows={home.plate} tilt={2} />
			</div>
		</div>
	</div>
</section>

<div class="relative z-10 -mt-8 -rotate-[1.2deg]">
	<Marquee items={ticker} />
</div>

<section class="wrap count pt-24">
	<div class="flex flex-wrap items-end justify-between gap-6">
		<div>
			<p class="tape red">{home.featuredEyebrow}</p>
			<h2 class="wide-black h1 mt-4">{home.featuredTitle}</h2>
		</div>
		<a href="/projects" class="go">{home.allProjects}</a>
	</div>

	<div class="mt-12 grid gap-5 lg:grid-cols-12">
		<div class="tick lg:col-span-7 lg:row-span-2"><ProjectBlock p={deadline} tone="yellow" big /></div>
		<div class="tick lg:col-span-5"><ProjectBlock p={conflicts} tone="red" /></div>
		<div class="tick lg:col-span-5"><ProjectBlock p={api} tone="sky" /></div>
		<div class="tick lg:col-span-4"><ProjectBlock p={bot} tone="cream" /></div>
		<div class="tick lg:col-span-4"><ProjectBlock p={voice} tone="yellow" /></div>
		<div class="lg:col-span-4"><SlotBlock /></div>
		<div class="tick lg:col-span-12"><ProjectBlock p={elections} tone="navy" side /></div>
	</div>
</section>

<section class="mt-28 grid lg:grid-cols-2">
	<div class="block-red dots-wrap relative flex items-end overflow-hidden px-5 py-16 sm:px-8 lg:min-h-[34rem] lg:px-12">
		<div class="dots absolute inset-0 text-[#f46b48]" aria-hidden="true"></div>
		<div class="relative">
			<p class="tape">{home.aboutEyebrow}</p>
			<h2 class="wide-black h1 mt-5">{home.aboutTitle}</h2>
		</div>
	</div>
	<div class="block-cream count px-5 py-16 sm:px-8 lg:px-12">
		<p class="text-[1.25rem] leading-relaxed font-medium">{home.about}</p>
		<p class="mt-7"><a href="/about-me" class="go">{home.aboutCta}</a></p>
		<div class="mt-12 max-w-[26rem]">
			<Facts title={home.loadoutTitle} rows={home.loadout} tilt={-1.5} />
		</div>
	</div>
</section>

<section class="block-yellow cut-top mt-0 pb-24">
	<div class="wrap grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
		<h2 class="wide-black h1">{home.openTitle}</h2>
		<div>
			<p class="text-[1.25rem] leading-relaxed font-semibold">{home.openBody}</p>
			<p class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
				<a href={site.github} target="_blank" rel="noreferrer" class="btn dark">{home.openCtaGithub}</a>
				<a href="/projects" class="go">{home.openCtaProjects}</a>
			</p>
		</div>
	</div>
</section>
