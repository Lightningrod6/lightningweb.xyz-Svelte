<script lang="ts">
	import { slot } from '$lib/content';
</script>

<article class="stripes h-full p-3">
	<div class="block-cream flex h-full flex-col border-[3px] border-[var(--navy)] p-6">
		<span class="tape red self-start">{slot.label}</span>
		<h3 class="wide-black h3 mt-5">{slot.title}</h3>
		<p class="mt-4 font-medium leading-relaxed">{slot.blurb}</p>
		<ul class="stickers mt-5">
			{#each slot.tags as t (t)}<li>{t}</li>{/each}
		</ul>
		<p class="mt-6"><a href={slot.href} target="_blank" rel="noreferrer" class="go">{slot.cta}</a></p>
	</div>
</article>
