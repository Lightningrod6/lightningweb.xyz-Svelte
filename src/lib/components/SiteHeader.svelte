<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
</script>

<header class="block-navy">
	<div class="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
		<a href="/" class="word wide-black" aria-label={site.brand.homeLabel}>
			<span class="text-[var(--yellow)]">{site.brand.a}</span><span>{site.brand.b}</span><span class="text-[var(--red)]">{site.brand.tld}</span>
		</a>
		<nav class="flex gap-2" aria-label="Primary">
			{#each site.nav as link (link.href)}
				{@const active = page.url.pathname === link.href}
				<a href={link.href} aria-current={active ? 'page' : undefined} class="nav" class:active>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.word {
		font-size: 1.375rem;
		line-height: 1;
	}
	.nav {
		font-weight: 800;
		font-stretch: 112%;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		font-size: 0.875rem;
		padding: 0.45rem 0.8rem 0.4rem;
		border: 2px solid transparent;
	}
	.nav:hover {
		border-color: var(--cream);
	}
	.nav.active {
		background: var(--yellow);
		color: var(--navy);
	}
</style>
