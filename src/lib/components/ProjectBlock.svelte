<script lang="ts">
	import Picture from './Picture.svelte';
	import { statusLabel, type Project } from '$lib/content';

	interface Props {
		p: Project;
		tone?: 'yellow' | 'red' | 'sky' | 'navy' | 'cream';
		big?: boolean;
		side?: boolean;
	}
	let { p, tone = 'cream', big = false, side = false }: Props = $props();
	const ext = $derived(p.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
</script>

<article class="proj block-{tone} {side ? 'side' : ''}" class:big>
	<div class="top flex items-start justify-between gap-4">
		<span class="num outline {big ? 'text-[4.5rem]' : 'text-[3.25rem]'}" aria-hidden="true"></span>
		<span class="tape {tone === 'navy' ? 'yellow' : ''}">{statusLabel[p.status]}</span>
	</div>
	<div class="pic mt-4"><Picture name={p.name} href={p.href} /></div>
	<div class="text">
		<h3 class="wide-black {big ? 'h2' : 'h3'} mt-5"><a href={p.href} {...ext}>{p.name}</a></h3>
		<p class="mt-4 font-medium leading-relaxed {big ? 'text-[1.1875rem]' : ''}">{p.blurb}</p>
		<ul class="stickers mt-5">
			{#each p.tags as t (t)}<li>{t}</li>{/each}
		</ul>
		<p class="mt-6"><a href={p.href} {...ext} class="go">{p.cta}</a></p>
	</div>
</article>

<style>
	.proj {
		border: 3px solid var(--navy);
		padding: 1.25rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 48rem) {
		.proj {
			padding: 1.75rem;
		}
		.side {
			display: grid;
			grid-template-columns: 1.3fr 1fr;
			grid-template-areas: 'top top' 'pic text';
			column-gap: 2rem;
		}
		.side .top {
			grid-area: top;
		}
		.side .pic {
			grid-area: pic;
		}
		.side .text {
			grid-area: text;
		}
		.side h3 {
			margin-top: 1rem;
		}
	}
	.pic :global(.plate) {
		background: var(--cream);
		border: 3px solid var(--navy);
		padding: 0;
		transition: transform 200ms ease;
	}
	.pic :global(.plate > *) {
		border: 0;
	}
	.proj:hover .pic :global(.plate) {
		transform: rotate(-1.2deg) scale(1.01);
	}
	h3 a:hover {
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-underline-offset: 0.12em;
	}
	.block-navy :global(.stickers > li) {
		border-color: var(--cream);
	}
</style>
