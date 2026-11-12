<script lang="ts">
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<footer class="wrap mt-24 sm:mt-32">
	<div class="rule-heavy flex flex-col gap-5 pt-6 pb-10 md:flex-row md:items-baseline md:justify-between">
		<p class="flex items-center gap-2.5 text-[0.875rem] muted">
			<Bolt class="h-3.5 w-3.5 shrink-0 text-ink" />
			<span>{site.footer.copyright}</span>
		</p>
		<nav aria-label="Footer">
			<ul class="flex flex-wrap gap-x-7 gap-y-2 text-[0.875rem]">
				{#each site.footer.links as s (s.label)}
					<li>
						<a href={s.href} {...s.external ? { target: '_blank', rel: 'noreferrer' } : {}} class="link">
							{s.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
