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
	<div class="head">
		<p class="kicker">{statusLabel[p.status]}</p>
		<h3 class={size === 'lead' ? 'h2 mt-2' : 'h3 mt-1.5'}><a href={p.href} {...ext} class="name">{p.name}</a></h3>
	</div>
	<div class="body">
		<p class="soft leading-relaxed {size === 'lead' ? 'text-[1.125rem]' : ''}">{p.blurb}</p>
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
	.head {
		margin-top: 1.25rem;
	}
	.body {
		margin-top: 0.75rem;
	}
	.text .head {
		margin-top: 0;
	}
	.row {
		display: grid;
		grid-template-columns: 8.5rem 1fr;
		grid-template-areas: 'pic head' 'body body';
		column-gap: 1.25rem;
		align-items: center;
	}
	.row .pic {
		grid-area: pic;
	}
	.row .head {
		grid-area: head;
		margin-top: 0;
	}
	.row .body {
		grid-area: body;
		margin-top: 1rem;
	}
	@media (min-width: 48rem) {
		.wide {
			display: grid;
			grid-template-columns: 1.35fr 1fr;
			grid-template-areas: 'pic head' 'pic body';
			grid-template-rows: auto 1fr;
			column-gap: 2.5rem;
		}
		.wide .pic {
			grid-area: pic;
		}
		.wide .head {
			grid-area: head;
			margin-top: 0;
		}
		.wide .body {
			grid-area: body;
		}
	}
</style>
