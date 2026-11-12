<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
</script>

<header class="wrap">
	<div class="masthead flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pt-6 pb-3">
		<a href="/" class="word" aria-label={site.brand.homeLabel}>
			<span class="sentence inline-block">{site.brand.a}</span>&nbsp;<span class="sentence inline-block">{site.brand.b}</span><span class="tld">{site.brand.tld}</span>
		</a>
		<nav class="flex gap-7 pb-1 text-[0.9375rem]" aria-label="Primary">
			{#each site.nav as link (link.href)}
				{@const active = page.url.pathname === link.href}
				<a href={link.href} aria-current={active ? 'page' : undefined} class="nav" class:active>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.masthead {
		border-bottom: 3px double var(--ink);
	}
	.word {
		font-family: var(--font-display);
		font-size: 1.875rem;
		line-height: 1;
		letter-spacing: -0.01em;
	}
	.tld {
		font-family: var(--font-sans);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--red);
		margin-left: 0.15em;
		text-transform: lowercase;
	}
	.nav {
		color: var(--soft);
		font-weight: 500;
	}
	.nav:hover {
		color: var(--ink);
	}
	.nav.active {
		color: var(--ink);
		text-decoration: underline;
		text-decoration-color: var(--red);
		text-decoration-thickness: 2px;
		text-underline-offset: 0.45em;
	}
</style>
