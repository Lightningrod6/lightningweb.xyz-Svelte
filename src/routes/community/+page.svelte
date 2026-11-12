<script lang="ts">
	import { communityPage, site } from '$lib/content';
	import Arrow from '$lib/components/Arrow.svelte';
	import Bolt from '$lib/components/Bolt.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
</script>

<svelte:head>
	<title>{communityPage.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<PageHead
	mark={communityPage.eyebrowMark}
	eyebrow={communityPage.eyebrow}
	heading={communityPage.heading}
	intro={communityPage.intro}
/>

<section class="wrap mt-16 sm:mt-24">
	<div class="spread">
		<div class="margin">
			<h2 class="label muted">{communityPage.findsTitle}</h2>
		</div>
		<div class="body grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
			<ul class="border-b border-rule">
				{#each communityPage.finds as f (f)}
					<li class="find">
						<Bolt class="find-bolt" />
						<span>{f}</span>
					</li>
				{/each}
			</ul>

			<div class="join">
				<h2 class="display display-s sentence">{communityPage.joinTitle}</h2>
				<p class="muted mt-5 leading-relaxed">{communityPage.joinBody}</p>
				<div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
					<a href={communityPage.discord} target="_blank" rel="noreferrer" class="btn">
						<span>{communityPage.joinCta}</span>
						<Arrow />
					</a>
					<a href={site.github} target="_blank" rel="noreferrer" class="textlink">
						<span class="link">{communityPage.codeCta}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.find {
		display: grid;
		grid-template-columns: 0.9rem minmax(0, 1fr);
		column-gap: 1rem;
		align-items: baseline;
		border-top: 1px solid var(--color-rule);
		padding-block: 1.1rem 1.2rem;
		font-family: var(--font-serif);
		font-size: clamp(1.125rem, 1.7vw, 1.3125rem);
		line-height: 1.45;
		font-weight: 380;
		font-variation-settings: 'opsz' 24;
	}
	.find :global(.find-bolt) {
		width: 0.8rem;
		height: 0.8rem;
		color: var(--color-ink);
		transform: translateY(0.05em);
	}
	.join {
		border-top: 2px solid var(--color-ink);
		padding-top: 1.4rem;
	}
</style>
