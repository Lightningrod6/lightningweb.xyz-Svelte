<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';
</script>

<header class="wrap flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-8 pb-4">
	<a href="/" class="brand no-underline" aria-label={site.brand.homeLabel}>
		<span>{site.brand.a}</span><span>{site.brand.b}</span><span class="muted">{site.brand.tld}</span>
	</a>
	<nav class="flex gap-5 text-[0.9375rem]" aria-label="Primary">
		{#each site.nav as link (link.href)}
			{@const active = page.url.pathname === link.href}
			<a
				href={link.href}
				aria-current={active ? 'page' : undefined}
				class={active ? '' : 'muted'}
				style={active ? '' : 'text-decoration-color: transparent'}
			>
				{link.label}
			</a>
		{/each}
	</nav>
</header>

<style>
	.brand {
		font-weight: 650;
		letter-spacing: -0.01em;
		text-transform: lowercase;
		text-decoration: none;
	}
</style>
