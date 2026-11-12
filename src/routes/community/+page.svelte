<script lang="ts">
	import { communityPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="wrap grid gap-8 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:gap-10">
	<div class="lg:col-span-7">
		<p class="kicker">{c.eyebrowMark} {c.eyebrow}</p>
		<h1 class="h1 sentence mt-4">{c.heading}</h1>
	</div>
	<p class="serif soft text-[1.375rem] leading-snug lg:col-span-5">{c.intro}</p>
</section>

<section class="wrap mt-12">
	<div class="border-t pt-12" style="border-color: var(--ink)">
	<div class="max-w-[44rem]">
		<p class="kicker">{c.findsTitle}</p>
		<ul class="notes mt-5 space-y-5">
			{#each c.finds as f (f)}<li class="note text-[1.125rem] leading-relaxed">{f}</li>{/each}
		</ul>
	</div>
	</div>
</section>

<section class="band section py-20">
	<div class="wrap grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
		<h2 class="h1 sentence">{c.joinTitle}</h2>
		<div>
			<p class="text-[1.125rem] leading-relaxed">{c.joinBody}</p>
			<p class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
				<a href={c.discord} target="_blank" rel="noreferrer" class="button">{c.joinCta}</a>
				<a href={site.github} target="_blank" rel="noreferrer" class="link">{c.codeCta}</a>
			</p>
		</div>
	</div>
</section>
