<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<header class="topbar">
	<div class="wrap inner">
		<a href="/" class="brand" aria-label={site.brand.homeLabel}>
			<span class="mark"><Bolt class="bolt" /></span>
			<span class="word">
				<span class="a">{site.brand.a}</span><span class="b">{site.brand.b}</span><span class="tld"
					>{site.brand.tld}</span
				>
			</span>
		</a>
		<nav aria-label="Primary">
			<ul class="tabs">
				{#each site.nav as link (link.href)}
					{@const active = page.url.pathname === link.href}
					<li>
						<a href={link.href} class="tab" class:active aria-current={active ? 'page' : undefined}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.topbar {
		position: sticky;
		top: 0;
		z-index: 40;
		border-bottom: 1px solid var(--line);
		background: var(--surface);
	}
	.inner {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: var(--space-1);
		height: var(--bar-h);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		min-width: 0;
		color: var(--text);
		text-decoration: none;
	}
	.brand:focus-visible {
		outline-offset: -2px;
	}
	.mark {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		flex: none;
		border: 1px solid var(--line-strong);
		border-radius: 2px;
		background: var(--bg);
		color: var(--accent);
		transition: border-color 120ms ease;
	}
	.brand:hover .mark {
		border-color: var(--accent);
	}
	.mark :global(.bolt) {
		width: 14px;
		height: 14px;
	}
	.word {
		font-family: var(--mono);
		font-size: 0.8125rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.04em;
		white-space: nowrap;
	}
	.b {
		color: var(--accent-text);
	}
	.tld {
		margin-left: 2px;
		font-weight: 400;
		color: var(--text-3);
	}

	.tabs {
		display: flex;
		align-items: stretch;
		height: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.tabs li {
		display: flex;
	}
	.tab {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: 0 10px;
		border-left: 1px solid var(--line);
		font-family: var(--mono);
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-3);
		text-decoration: none;
		transition:
			color 120ms ease,
			background-color 120ms ease;
	}
	.tabs li:last-child .tab {
		border-right: 1px solid var(--line);
	}
	.tab:hover {
		color: var(--text);
		background: var(--surface-2);
	}
	.tab:focus-visible {
		outline-offset: -2px;
	}
	/* active tab sits "open" onto the canvas below */
	.tab.active {
		color: var(--text);
		background: var(--bg);
	}
	.tab.active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 2px;
		background: var(--accent);
	}
	.tab.active::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 1px;
		background: var(--bg);
	}

	@media (min-width: 640px) {
		.inner,
		.brand {
			gap: 12px;
		}
		.word {
			font-size: 0.875rem;
		}
		.tab {
			padding: 0 var(--space-3);
			letter-spacing: 0.08em;
		}
	}
</style>
