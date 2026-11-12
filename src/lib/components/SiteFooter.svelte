<script lang="ts">
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<footer class="mt-28 border-t" style="border-color: var(--line)">
	<div class="wrap flex flex-col gap-4 py-8 text-[0.875rem] sm:flex-row sm:items-center sm:justify-between">
		<p class="muted flex items-center gap-2">
			<Bolt class="h-3.5 w-3.5 shrink-0" />
			<span>{site.footer.copyright}</span>
		</p>
		<nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
			{#each site.footer.links as l (l.label)}
				<a href={l.href} class="flink" {...l.external ? { target: '_blank', rel: 'noreferrer' } : {}}>{l.label}</a>
			{/each}
		</nav>
	</div>
</footer>

<style>
	footer :global(svg) {
		color: var(--accent);
	}
	.flink {
		color: var(--soft);
		transition: color 150ms;
	}
	.flink:hover {
		color: var(--fg);
	}
</style>
