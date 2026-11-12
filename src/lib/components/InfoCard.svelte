<script lang="ts">
	interface Props {
		title: string;
		rows: { k: string; v: string }[];
		note?: string;
		class?: string;
	}
	let { title, rows, note = '', class: klass = '' }: Props = $props();
</script>

<div class="card {klass}">
	<div class="flex items-center justify-between gap-4 border-b px-5 py-3" style="border-color: var(--line)">
		<span class="text-[0.875rem] font-semibold">{title}</span>
		{#if note}
			<span class="flex items-center gap-2 font-mono text-[0.6875rem] muted">
				<span class="dot" style="background: var(--live)"></span>
				{note}
			</span>
		{/if}
	</div>
	<dl class="px-5 py-2">
		{#each rows as r (r.k)}
			<div class="row grid gap-0.5 py-2.5 sm:grid-cols-[8rem_1fr] sm:gap-4">
				<dt class="font-mono text-[0.75rem] leading-6 muted">{r.k}</dt>
				<dd class="text-[0.9375rem] leading-6">{r.v}</dd>
			</div>
		{/each}
	</dl>
</div>

<style>
	.row + .row {
		border-top: 1px solid var(--line);
	}
</style>
