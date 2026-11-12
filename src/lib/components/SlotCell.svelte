<script lang="ts">
	import { slot } from '$lib/content';
	import Arrow from './Arrow.svelte';

	interface Props {
		class?: string;
	}

	let { class: klass = '' }: Props = $props();
</script>

<a href={slot.href} target="_blank" rel="noreferrer" class="tile tile--ink tile--wide {klass}">
	<div><span class="slot-label label">{slot.label}</span></div>
	<h3 class="tile-name">{slot.title}</h3>
	<p class="tile-blurb">{slot.blurb}</p>
	<ul class="tile-tags">
		{#each slot.tags as tag (tag)}
			<li>{tag}</li>
		{/each}
	</ul>
	<div class="tile-cta">
		<span>{slot.cta}</span>
		<Arrow external />
	</div>
</a>
