<script lang="ts">
	import { slot } from '$lib/content';
</script>

<article class="slot">
	<p class="kicker">{slot.label}</p>
	<h3 class="h3 mt-1.5">{slot.title}</h3>
	<p class="soft mt-3 leading-relaxed">{slot.blurb}</p>
	<ul class="commas muted serif mt-3 block text-[0.9375rem] italic">
		{#each slot.tags as t (t)}<li>{t}</li>{/each}
	</ul>
	<p class="mt-4"><a href={slot.href} target="_blank" rel="noreferrer" class="link">{slot.cta}</a></p>
</article>

<style>
	.slot {
		border: 1.5px dashed var(--muted);
		padding: 1.5rem;
		background: var(--paper-2);
	}
</style>
