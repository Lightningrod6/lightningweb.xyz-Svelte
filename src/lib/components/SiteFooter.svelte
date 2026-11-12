<script lang="ts">
	import { site } from '$lib/content';
</script>

<footer class="wrap mt-28 pb-10">
	<div class="scribble"></div>
	<div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-5 text-[0.9375rem]">
		<p class="muted serif italic">{site.footer.copyright}</p>
		<nav class="flex gap-6" aria-label="Footer">
			{#each site.footer.links as l (l.href)}
				<a href={l.href} class="link" target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}>{l.label}</a>
			{/each}
		</nav>
	</div>
</footer>
