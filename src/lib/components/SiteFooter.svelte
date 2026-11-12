<script lang="ts">
	import { site } from '$lib/content';
</script>

<footer class="wrap mt-28">
	<div class="flex flex-col gap-3 border-t py-8 text-[0.875rem] sm:flex-row sm:items-baseline sm:justify-between" style="border-color: var(--rule)">
		<p class="muted">{site.footer.copyright}</p>
		<nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
			{#each site.footer.links as l (l.label)}
				<a href={l.href} class="link" {...l.external ? { target: '_blank', rel: 'noreferrer' } : {}}>{l.label}</a>
			{/each}
		</nav>
	</div>
</footer>
