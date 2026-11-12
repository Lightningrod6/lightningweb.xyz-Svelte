<script lang="ts">
	import { communityPage as c, site } from '$lib/content';
	const tones = ['block-yellow', 'block-sky', 'block-red', 'block-cream'];
</script>

<svelte:head>
	<title>{c.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="block-navy cut-bottom">
	<div class="wrap grid gap-8 pt-14 pb-6 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
		<div>
			<p class="tape yellow">{c.eyebrowMark} {c.eyebrow}</p>
			<h1 class="wide-black h1 mt-6 text-[var(--yellow)]">{c.heading}</h1>
		</div>
		<p class="text-[1.375rem] leading-snug font-semibold">{c.intro}</p>
	</div>
</section>

<section class="wrap count pt-16">
	<p class="tape red">{c.findsTitle}</p>
	<ul class="mt-6 grid gap-5 md:grid-cols-2">
		{#each c.finds as f, i (f)}
			<li class="tick {tones[i % tones.length]} border-[3px] border-[var(--navy)] p-6">
				<span class="num hollow block text-[2.75rem]" aria-hidden="true"></span>
				<p class="mt-3 text-[1.125rem] leading-relaxed font-semibold">{f}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="block-yellow cut-top mt-24 pb-24">
	<div class="wrap grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
		<h2 class="wide-black h1">{c.joinTitle}</h2>
		<div>
			<p class="text-[1.25rem] leading-relaxed font-semibold">{c.joinBody}</p>
			<p class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
				<a href={c.discord} target="_blank" rel="noreferrer" class="btn dark">{c.joinCta}</a>
				<a href={site.github} target="_blank" rel="noreferrer" class="go">{c.codeCta}</a>
			</p>
		</div>
	</div>
</section>
