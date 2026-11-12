<script lang="ts">
	import { site } from '$lib/content';
</script>

<footer class="block-navy">
	<div class="stripes h-3" aria-hidden="true"></div>
	<div class="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8">
		<p class="text-[0.9375rem] font-semibold">{site.footer.copyright}</p>
		<nav class="flex gap-6" aria-label="Footer">
			{#each site.footer.links as l (l.href)}
				<a href={l.href} class="go text-[var(--yellow)]" target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}>{l.label}</a>
			{/each}
		</nav>
	</div>
</footer>
