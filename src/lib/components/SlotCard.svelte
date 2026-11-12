<script lang="ts">
	import Arrow from './Arrow.svelte';
	import { slot } from '$lib/content';
</script>

<a href={slot.href} target="_blank" rel="noreferrer" class="scard group flex h-full flex-col p-5">
	<div class="flex items-start justify-between gap-3">
		<h3 class="muted text-[1.1875rem] font-semibold leading-snug tracking-[-0.015em]">{slot.title}</h3>
		<span class="label pt-1.5"><span class="dot"></span>{slot.label}</span>
	</div>
	<p class="soft mt-2 text-[0.9375rem] leading-relaxed">{slot.blurb}</p>
	<div class="mt-4 flex flex-wrap gap-1.5">
		{#each slot.tags as tag (tag)}<span class="chip">{tag}</span>{/each}
	</div>
	<div class="cta mt-auto flex items-center gap-1.5 pt-5 text-[0.875rem] font-medium">
		<span>{slot.cta}</span>
		<Arrow external />
	</div>
</a>

<style>
	.scard {
		border: 1px dashed var(--line-strong);
		border-radius: 12px;
		transition: border-color 160ms, background-color 160ms;
	}
	.scard:hover {
		border-color: var(--accent);
		background: var(--accent-wash);
	}
	.label {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--soft);
		white-space: nowrap;
	}
	.label .dot {
		border: 1.5px dashed var(--muted);
	}
	.scard:hover .cta {
		color: var(--accent-ink);
	}
</style>
