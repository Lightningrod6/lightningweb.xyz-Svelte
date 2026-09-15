<script lang="ts">
	import Led from './Led.svelte';
	import Bolt from './Bolt.svelte';

	export type ProjectStatus = 'live' | 'dev' | 'other';

	interface Props {
		name: string;
		blurb: string;
		tags: string[];
		href: string;
		status: ProjectStatus;
		cta: string;
	}

	let { name, blurb, tags, href, status, cta }: Props = $props();

	const statusMeta: Record<ProjectStatus, { led: 'live' | 'warn' | 'volt'; label: string }> = {
		live: { led: 'live', label: 'live' },
		dev: { led: 'warn', label: 'in development' },
		other: { led: 'volt', label: 'contribution' }
	};
</script>

<a
	{href}
	{...href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}}
	class="panel group flex flex-col transition-all duration-200 hover:border-volt/70 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
>
	<div class="flex flex-wrap items-center justify-between gap-3 px-5 pt-5">
		<h3 class="font-display text-2xl leading-none tracking-wide text-bone">
			{name.toUpperCase()}
		</h3>
		<span class="flex shrink-0 items-center gap-2">
			<Led color={statusMeta[status].led} />
			<span class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel">
				{statusMeta[status].label}
			</span>
		</span>
	</div>

	<p class="px-5 pt-3 text-[0.92rem] leading-relaxed text-steel">{blurb}</p>

	<div class="mt-auto flex flex-wrap gap-2.5 px-5 pb-5 pt-5">
		{#each tags as tag (tag)}
			<span class="border border-ink-800 bg-ink-950/60 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">
				{tag}
			</span>
		{/each}
	</div>

	<div class="flex items-center justify-between border-t border-ink-800 px-5 py-3">
		<span class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel group-hover:text-volt transition-colors">
			{cta}
		</span>
		<Bolt class="h-3.5 w-3.5 text-dim transition-all duration-200 group-hover:text-volt group-hover:-rotate-12" filled />
	</div>
</a>