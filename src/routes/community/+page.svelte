<script lang="ts">
	import { communityPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<h1 class="h1 sentence">{c.heading}</h1>
	<p class="kicker mt-4">{c.eyebrowMark} {c.eyebrow}</p>
	<p class="soft mt-5 max-w-[42rem] text-[1.125rem] leading-relaxed">{c.intro}</p>
</section>

<section class="wrap section grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
	<div class="ruled">
		<p class="font-semibold">{c.findsTitle}</p>
		<ul class="rows mt-3">
			{#each c.finds as f (f)}<li class="py-3 leading-relaxed">{f}</li>{/each}
		</ul>
	</div>
	<div class="ruled">
		<h2 class="h2 sentence">{c.joinTitle}</h2>
		<p class="soft mt-4 leading-relaxed">{c.joinBody}</p>
		<p class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
			<a href={c.discord} target="_blank" rel="noreferrer" class="button">{c.joinCta}</a>
			<a href={site.github} target="_blank" rel="noreferrer" class="link">{c.codeCta}</a>
		</p>
	</div>
</section>
