<script lang="ts">
	import Bolt from './Bolt.svelte';

	interface Props {
		title?: string;
		blurb?: string;
		cta?: string;
	}

	let {
		title = 'Your project here',
		blurb = 'Have a project, a collab, or a gig in mind? The grid has an open slot — and the operator is open for work.',
		cta = 'Open a line'
	}: Props = $props();
</script>

<a
	href="https://discord.gg/u2YBbHjJRh"
	target="_blank"
	rel="noreferrer"
	class="panel group flex flex-col border-dashed transition-all duration-200 hover:border-volt/60 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
>
	<div class="flex items-center justify-between gap-3 px-5 pt-5">
		<h3 class="font-display text-2xl leading-none tracking-wide text-dim group-hover:text-volt transition-colors">
			{title.toUpperCase()}
		</h3>
		<span class="flex shrink-0 items-center gap-2">
			<span class="inline-block h-2 w-2 rounded-full bg-dim animate-led"></span>
			<span class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel">open slot</span>
		</span>
	</div>

	<p class="px-5 pt-3 text-[0.92rem] leading-relaxed text-steel">{blurb}</p>

	<div class="mt-auto flex flex-wrap gap-2.5 px-5 pb-5 pt-5" aria-hidden="true">
		<span class="border border-ink-800 bg-ink-950/60 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">collab</span>
		<span class="border border-ink-800 bg-ink-950/60 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">freelance</span>
		<span class="border border-ink-800 bg-ink-950/60 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">available</span>
	</div>

	<div class="flex items-center justify-between border-t border-ink-800 px-5 py-3 mt-auto">
		<span class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel transition-colors group-hover:text-volt">
			{cta}
		</span>
		<Bolt class="h-3.5 w-3.5 text-dim transition-all duration-200 group-hover:text-volt group-hover:-rotate-12" filled />
	</div>
</a>