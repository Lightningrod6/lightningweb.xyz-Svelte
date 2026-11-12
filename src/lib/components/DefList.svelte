<script lang="ts">
	// a list of short facts set as numbered margin notes
	interface Props {
		title: string;
		rows: { k: string; v: string }[];
		note?: string;
	}
	let { title, rows, note = '' }: Props = $props();
</script>

<aside class="notes">
	<p class="flex items-baseline justify-between gap-4 border-b pb-2" style="border-color: var(--ink)">
		<span class="kicker">{title}</span>
		{#if note}<span class="serif muted text-[0.9375rem] italic">{note}</span>{/if}
	</p>
	<dl class="mt-3 space-y-3">
		{#each rows as r (r.k)}
			<div class="note text-[0.9375rem] leading-snug">
				<dt class="serif muted italic">{r.k}</dt>
				<dd>{r.v}</dd>
			</div>
		{/each}
	</dl>
</aside>
