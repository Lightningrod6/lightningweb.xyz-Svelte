<script lang="ts">
	interface Row {
		k: string;
		v: string;
	}

	interface Props {
		rows: Row[];
		title?: string;
		class?: string;
		/** show pulsing LED next to title */
		led?: boolean;
	}

	let { rows, title = '', class: klass = '', led = false }: Props = $props();
</script>

<div class="panel {klass}">
	{#if title}
		<div class="flex items-center justify-between gap-4 border-b border-ink-800 px-4 py-2.5">
			<span class="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-dim">{title}</span>
			{#if led}
				<span class="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel">
					<span class="inline-block h-1.5 w-1.5 rounded-full animate-led bg-live"></span>
					nominal
				</span>
			{/if}
		</div>
	{/if}
	<dl class="divide-y divide-ink-800/70">
		{#each rows as row (row.k)}
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,7.5rem)_1fr] px-4 py-2.5">
				<dt class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel leading-5">
					{row.k}
				</dt>
				<dd class="text-[0.92rem] leading-5 text-bone">{row.v}</dd>
			</div>
		{/each}
	</dl>
</div>