<script lang="ts">
	import StatusPill from './StatusPill.svelte';
	import Arrow from './Arrow.svelte';
	import type { Project } from '$lib/content';

	let { name, blurb, tags, href, status, cta }: Project = $props();
	const external = $derived(href.startsWith('http'));
</script>

<a
	{href}
	{...external ? { target: '_blank', rel: 'noreferrer' } : {}}
	class="card pcard group flex h-full flex-col p-5"
>
	<div class="flex items-start justify-between gap-3">
		<h3 class="text-[1.1875rem] font-semibold leading-snug tracking-[-0.015em]">{name}</h3>
		<span class="pt-1.5"><StatusPill {status} /></span>
	</div>
	<p class="soft mt-2 text-[0.9375rem] leading-relaxed">{blurb}</p>
	<div class="mt-4 flex flex-wrap gap-1.5">
		{#each tags as tag (tag)}<span class="chip">{tag}</span>{/each}
	</div>
	<div class="cta mt-auto flex items-center gap-1.5 pt-5 text-[0.875rem] font-medium">
		<span>{cta}</span>
		<Arrow {external} />
	</div>
</a>

<style>
	.pcard {
		transition:
			border-color 160ms,
			transform 160ms;
	}
	.pcard:hover {
		border-color: var(--line-strong);
		transform: translateY(-2px);
	}
	.cta {
		color: var(--fg);
	}
	.pcard:hover .cta {
		color: var(--accent-ink);
	}
	.cta :global(.arrow) {
		transition: transform 160ms;
	}
	.pcard:hover .cta :global(.arrow) {
		transform: translateX(2px);
	}
</style>
