<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<header class="sticky top-0 z-30 border-b" style="border-color: var(--line); background: color-mix(in srgb, var(--bg) 94%, transparent)">
	<div class="wrap flex h-16 items-center justify-between gap-6">
		<a href="/" class="brand group flex items-center gap-2" aria-label={site.brand.homeLabel}>
			<span class="mark"><Bolt class="h-3.5 w-3.5" /></span>
			<span class="word"><span>{site.brand.a}</span><span>{site.brand.b}</span><span class="tld">{site.brand.tld}</span></span>
		</a>
		<nav class="flex items-center gap-1" aria-label="Primary">
			{#each site.nav as link (link.href)}
				{@const active = page.url.pathname === link.href}
				<a href={link.href} aria-current={active ? 'page' : undefined} class="nav" class:active>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.mark {
		display: grid;
		place-items: center;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 7px;
		background: var(--fg);
		color: var(--accent);
		transition: transform 160ms;
	}
	.brand:hover .mark {
		transform: rotate(-8deg);
	}
	.word {
		font-weight: 650;
		letter-spacing: -0.02em;
		text-transform: lowercase;
		font-size: 1rem;
	}
	.tld {
		color: var(--muted);
		font-weight: 500;
	}
	.nav {
		font-size: 0.9375rem;
		color: var(--soft);
		padding: 0.4rem 0.75rem;
		border-radius: 999px;
		transition: background-color 150ms, color 150ms;
	}
	.nav:hover {
		color: var(--fg);
		background: var(--surface);
	}
	.nav.active {
		color: var(--fg);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
	}
</style>
