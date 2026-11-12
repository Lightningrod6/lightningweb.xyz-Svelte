<script lang="ts">
	import Picture from './Picture.svelte';
	import { statusLabel, type Project } from '$lib/content';

	interface Props {
		p: Project;
		size?: 'lead' | 'col' | 'row' | 'wide' | 'text';
	}
	let { p, size = 'col' }: Props = $props();
	const ext = $derived(p.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
</script>

<article class="feature {size}">
	{#if size !== 'text'}
		<div class="pic"><Picture name={p.name} href={p.href} /></div>
	{/if}
	<div class="body">
		<p class="kicker">{statusLabel[p.status]}</p>
		<h3 class={size === 'lead' ? 'h2 mt-2' : 'h3 mt-1.5'}><a href={p.href} {...ext} class="name">{p.name}</a></h3>
		<p class="soft mt-3 leading-relaxed {size === 'lead' ? 'text-[1.125rem]' : ''}">{p.blurb}</p>
		<ul class="commas muted serif mt-3 block text-[0.9375rem] italic">
			{#each p.tags as t (t)}<li>{t}</li>{/each}
		</ul>
		<p class="mt-4"><a href={p.href} {...ext} class="link">{p.cta}</a></p>
	</div>
</article>

<style>
	.name:hover {
		color: var(--red);
	}
	.body {
		margin-top: 1.25rem;
	}
	.row {
		display: grid;
		grid-template-columns: 9rem 1fr;
		gap: 1.25rem;
		align-items: start;
	}
	.row .body {
		margin-top: 0;
	}
	@media (min-width: 30rem) {
		.row {
			grid-template-columns: 11rem 1fr;
		}
	}
	@media (min-width: 48rem) {
		.wide {
			display: grid;
			grid-template-columns: 1.35fr 1fr;
			gap: 2.5rem;
			align-items: start;
		}
		.wide .body {
			margin-top: 0;
		}
	}
</style>
