<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<header class="site-header">
	<a href="/" class="brand" aria-label={site.brand.homeLabel}>
		<span class="brand-bolt"><Bolt class="h-6 w-6" /></span>
		<span class="brand-word">
			<span>{site.brand.a}</span><span class="brand-b">{site.brand.b}</span><span class="brand-tld"
				>{site.brand.tld}</span
			>
		</span>
	</a>
	<nav class="site-nav" aria-label="Primary">
		{#each site.nav as link (link.href)}
			<a
				href={link.href}
				aria-current={page.url.pathname === link.href ? 'page' : undefined}
				class="nav-link"
			>
				{link.label}
			</a>
		{/each}
	</nav>
</header>

<style>
	.site-header {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--rule);
		background: var(--color-ink);
		border-bottom: var(--rule) solid var(--color-ink);
	}
	.site-header > * {
		background: var(--color-paper);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		padding: 0.7rem var(--pad);
		min-width: 0;
	}
	.brand:focus-visible {
		outline-offset: -6px;
	}
	.brand-bolt {
		display: grid;
		place-items: center;
		flex: none;
		width: 2.5rem;
		height: 2.5rem;
		background: var(--color-ink);
		color: var(--color-volt);
		transition: background-color 80ms linear, color 80ms linear;
	}
	.brand:hover .brand-bolt {
		background: var(--color-volt);
		color: var(--color-ink);
	}
	.brand-word {
		display: flex;
		align-items: baseline;
		min-width: 0;
		font-weight: 700;
		font-size: 1.35rem;
		line-height: 1;
		letter-spacing: -0.04em;
	}
	.brand-b {
		background: var(--color-volt);
		padding: 0.08em 0.12em 0.04em;
		margin-left: 0.04em;
	}
	.brand-tld {
		margin-left: 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.12em;
	}

	.site-nav {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--rule);
		background: var(--color-ink);
	}
	.nav-link {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3.25rem;
		padding-inline: 1.5rem;
		background: var(--color-paper);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		transition: background-color 80ms linear, color 80ms linear;
	}
	.nav-link:hover,
	.nav-link:focus-visible {
		background: var(--color-volt);
	}
	.nav-link:focus-visible {
		outline-offset: -6px;
	}
	.nav-link[aria-current='page'] {
		background: var(--color-ink);
		color: var(--color-volt);
	}
	.nav-link[aria-current='page']:focus-visible {
		outline-color: var(--color-volt);
	}

	@media (min-width: 640px) {
		.site-header {
			grid-template-columns: minmax(0, 1fr) auto;
		}
		.nav-link {
			min-height: 4.25rem;
			min-width: 9.5rem;
		}
	}

	@media (min-width: 768px) {
		.site-header {
			position: sticky;
			top: 0;
			z-index: 40;
		}
		.brand-word {
			font-size: 1.6rem;
		}
		.nav-link {
			min-width: 11.5rem;
		}
	}
</style>
