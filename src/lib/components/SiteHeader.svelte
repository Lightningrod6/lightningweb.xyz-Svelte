<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
</script>

<header class="wrap">
	<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b py-5" style="border-color: var(--rule)">
		<a href="/" class="word" aria-label={site.brand.homeLabel}>
			<span>{site.brand.a}</span><span>{site.brand.b}</span><span class="muted">{site.brand.tld}</span>
		</a>
		<nav class="flex gap-6 text-[0.9375rem]" aria-label="Primary">
			{#each site.nav as link (link.href)}
				{@const active = page.url.pathname === link.href}
				<a href={link.href} aria-current={active ? 'page' : undefined} class="nav" class:active>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.word {
		font-weight: 800;
		letter-spacing: -0.02em;
		text-transform: lowercase;
		font-size: 1.0625rem;
	}
	.word .muted {
		font-weight: 500;
	}
	.nav {
		color: var(--soft);
	}
	.nav:hover {
		color: var(--fg);
	}
	.nav.active {
		color: var(--fg);
		font-weight: 600;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 0.4em;
	}
</style>
