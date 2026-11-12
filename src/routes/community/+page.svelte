<script lang="ts">
	import { communityPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<p class="label">{c.eyebrowMark} {c.eyebrow}</p>
	<h1 class="h1 sentence mt-3">{c.heading}</h1>
	<p class="mt-5">{c.intro}</p>
</section>

<section class="wrap section">
	<p class="label">{c.findsTitle}</p>
	<ul class="finds mt-3">
		{#each c.finds as f (f)}<li>{f}</li>{/each}
	</ul>
</section>

<section class="wrap section">
	<h2 class="h2 sentence">{c.joinTitle}</h2>
	<p class="mt-4">{c.joinBody}</p>
	<p class="links mt-5">
		<a href={c.discord} target="_blank" rel="noreferrer">{c.joinCta}</a>
		<a href={site.github} target="_blank" rel="noreferrer">{c.codeCta}</a>
	</p>
</section>

<style>
	.finds li {
		padding-left: 1.1rem;
		position: relative;
		margin-top: 0.4rem;
	}
	.finds li::before {
		content: '';
		position: absolute;
		left: 0.15rem;
		top: 0.75em;
		width: 0.4rem;
		height: 1px;
		background: var(--muted);
	}
</style>
