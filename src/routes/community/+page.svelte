<script lang="ts">
	import Bolt from '$lib/components/Bolt.svelte';
	import { communityPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="wrap rise pt-16 sm:pt-24">
	<p class="eyebrow"><span class="mark">{c.eyebrowMark}</span>{c.eyebrow}</p>
	<h1 class="h1 sentence mt-4">{c.heading}</h1>
	<p class="soft mt-5 max-w-[42rem] text-[1.125rem] leading-relaxed">{c.intro}</p>
</section>

<section class="wrap rise rise-2 mt-12 grid items-stretch gap-4 md:grid-cols-[1.1fr_1fr]">
	<div class="card">
		<div class="border-b px-5 py-3 text-[0.875rem] font-semibold" style="border-color: var(--line)">{c.findsTitle}</div>
		<ul class="px-5 py-2">
			{#each c.finds as f (f)}
				<li class="frow flex items-start gap-3 py-3.5 text-[0.9375rem] leading-relaxed">
					<Bolt class="bolt mt-1.5 h-3 w-3 shrink-0" />
					<span>{f}</span>
				</li>
			{/each}
		</ul>
	</div>
	<div class="card join flex flex-col justify-between gap-8 p-7">
		<div>
			<h2 class="h2 sentence">{c.joinTitle}</h2>
			<p class="soft mt-4 leading-relaxed">{c.joinBody}</p>
		</div>
		<div class="flex flex-wrap gap-3">
			<a href={c.discord} target="_blank" rel="noreferrer" class="btn btn-primary">{c.joinCta}</a>
			<a href={site.github} target="_blank" rel="noreferrer" class="btn btn-ghost">{c.codeCta}</a>
		</div>
	</div>
</section>

<style>
	.frow + .frow {
		border-top: 1px solid var(--line);
	}
	.frow :global(.bolt) {
		color: var(--accent);
	}
	.join {
		border-left: 3px solid var(--accent);
	}
</style>
