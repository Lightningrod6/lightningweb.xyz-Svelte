<script lang="ts">
	interface Props {
		rows: { k: string; v: string }[];
		title?: string;
		note?: string;
	}
	let { rows, title = '', note = '' }: Props = $props();
</script>

<div>
	{#if title}
		<p class="mb-3 flex items-baseline justify-between gap-4 text-[0.875rem]">
			<span class="font-semibold">{title}</span>
			{#if note}<span class="muted">{note}</span>{/if}
		</p>
	{/if}
	<dl class="kv">
		{#each rows as r (r.k)}
			<dt>{r.k}</dt>
			<dd>{r.v}</dd>
		{/each}
	</dl>
</div>
