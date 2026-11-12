<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<header class="wrap">
	<div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-rule py-4 sm:py-5">
		<a href="/" class="brand group" aria-label={site.brand.homeLabel}>
			<Bolt class="h-[1.05rem] w-[1.05rem] shrink-0 transition-transform duration-300 group-hover:-rotate-12" />
			<span class="flex items-baseline">
				<span class="sentence-inline">{site.brand.a}</span><span class="sentence-inline web">{site.brand.b}</span>
				<span class="tld">{site.brand.tld}</span>
			</span>
		</a>
		<nav aria-label="Primary">
			<ul class="flex items-center gap-6 sm:gap-8">
				{#each site.nav as link (link.href)}
					{@const active = page.url.pathname === link.href}
					<li>
						<a href={link.href} aria-current={active ? 'page' : undefined} class="navlink" class:active>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--color-ink);
		text-decoration: none;
		font-family: var(--font-serif);
		font-size: 1.3125rem;
		font-weight: 520;
		font-variation-settings:
			'opsz' 48,
			'SOFT' 50;
		letter-spacing: -0.015em;
		line-height: 1;
	}
	.web {
		font-style: italic;
		font-weight: 400;
	}
	.tld {
		margin-left: 0.15em;
		font-family: var(--font-sans);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		color: var(--color-faint);
		text-transform: lowercase;
	}

	.navlink {
		position: relative;
		display: inline-block;
		padding-block: 0.4rem;
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--color-muted);
		text-decoration: none;
		transition: color 0.2s ease;
	}
	.navlink::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0.1rem;
		height: 2px;
		background: var(--color-ink);
		transform: scaleX(0);
		transform-origin: left center;
		transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.navlink:hover {
		color: var(--color-ink);
	}
	.navlink:hover::after {
		transform: scaleX(1);
	}
	.navlink.active {
		color: var(--color-ink);
	}
	.navlink.active::after {
		transform: scaleX(1);
		height: 3px;
		background: var(--color-signal);
		box-shadow: 0 1px 0 var(--color-ink);
	}

	@media (prefers-reduced-motion: reduce) {
		.navlink::after,
		.navlink {
			transition: none;
		}
	}
</style>
