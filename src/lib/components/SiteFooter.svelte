<script lang="ts">
	import Bolt from './Bolt.svelte';

	const socials = [
		{ href: 'https://github.com/Lightningrod6', label: 'GitHub /Lightningrod6', external: true },
		{ href: '/', label: 'Home', external: false }
	];
</script>

<footer class="mt-20">
	<div class="hazard-stripe h-2"></div>
	<div class="border-t border-ink-800 bg-ink-900/50">
		<div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
			<div class="flex items-center gap-2.5">
				<Bolt class="h-4 w-4 text-volt" filled />
				<p class="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-steel">
					© 2026 lightningweb.xyz — operator: liam caywood
				</p>
			</div>
			<nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						{...s.external ? { target: '_blank', rel: 'noreferrer' } : {}}
						class="font-mono text-[0.76rem] uppercase tracking-[0.18em] text-steel transition-colors hover:text-volt"
					>
						{s.label}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</footer>