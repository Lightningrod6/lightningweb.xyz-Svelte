<script lang="ts">
	interface Props {
		title: string;
		rows: { k: string; v: string }[];
		note?: string;
	}
	let { title, rows, note = '' }: Props = $props();
</script>

<div class="ruled">
	<p class="flex items-baseline justify-between gap-4">
		<span class="font-semibold">{title}</span>
		{#if note}<span class="muted text-[0.875rem]">{note}</span>{/if}
	</p>
	<dl class="rows mt-3">
		{#each rows as r (r.k)}
			<div class="grid gap-0.5 py-2.5 text-[0.9375rem] sm:grid-cols-[7.5rem_1fr] sm:gap-4">
				<dt class="muted">{r.k}</dt>
				<dd>{r.v}</dd>
			</div>
		{/each}
	</dl>
</div>
