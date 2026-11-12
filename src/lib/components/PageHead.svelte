<script lang="ts">
	import Bolt from './Bolt.svelte';

	interface Props {
		mark: string;
		eyebrow: string;
		heading: string;
		intro?: string;
	}

	let { mark, eyebrow, heading, intro = '' }: Props = $props();
</script>

<section class="rg">
	<p class="cell eyebrow label"><span class="mark">{mark}</span>{eyebrow}</p>
	<h1 class="cell display fit page-h1" style="--len: {heading.length}">{heading}</h1>
	{#if intro}
		<p class="cell lead page-intro col-span-12 lg:col-span-8">{intro}</p>
		<div class="page-deco hidden lg:col-span-4 lg:grid" aria-hidden="true">
			<Bolt class="h-40 w-40" />
		</div>
	{/if}
</section>

<style>
	.page-h1 {
		--fit-max: 12.5rem;
		padding-top: calc(var(--pad) * 1.4);
		padding-bottom: calc(var(--pad) * 0.9);
	}
	.page-intro {
		max-width: none;
		padding-block: calc(var(--pad) * 1.25);
	}
	.page-deco {
		place-items: center;
		min-height: 12rem;
		background: var(--color-volt);
		color: var(--color-ink);
	}
</style>
