<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="frame">
	<ul class="list">
		{@render children()}
	</ul>
</div>

<style>
	.frame {
		container-type: inline-size;
		border: 1px solid var(--line);
		border-radius: 2px;
		background: var(--surface);
	}
	.list {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
