<script lang="ts">
	import Bolt from './Bolt.svelte';
	import { page } from '$app/stores';

	const pathname = $page.url.pathname;

	const links = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/about-me', label: 'About' }
	];
</script>

<header class="sticky top-0 z-40">
	<div class="hazard-stripe-thin h-1.5"></div>
	<div class="border-b border-ink-800 bg-ink-950/90 backdrop-blur">
		<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 sm:px-6">
			<a href="/" class="group flex items-center gap-2.5" aria-label="Lightning Web — home">
				<Bolt class="h-5 w-5 text-volt transition-transform duration-200 group-hover:-rotate-12" filled />
				<span class="font-display text-xl leading-none tracking-wide text-bone">
					LIGHTNING<span class="text-volt">WEB</span>
					<span class="ml-1 font-mono text-[0.6rem] tracking-[0.2em] text-dim">.XYZ</span>
				</span>
			</a>
			<nav class="flex items-center gap-5" aria-label="Primary">
				{#each links as link (link.href)}
								{@const active = pathname === link.href}
								<a
									href={link.href}
									aria-current={active ? 'page' : undefined}
									class="flex items-center border-b-2 border-transparent px-2 py-1.5 font-mono text-[0.74rem] uppercase tracking-[0.18em] transition-colors {active ? 'text-volt border-volt' : 'text-steel border-transparent hover:text-volt'}"
								>
									{link.label}
								</a>
							{/each}
			</nav>
		</div>
	</div>
</header>