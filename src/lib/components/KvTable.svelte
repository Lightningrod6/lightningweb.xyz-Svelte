<script lang="ts">
	interface Props {
		rows: { k: string; v: string }[];
	}

	let { rows }: Props = $props();
</script>

<dl class="kv">
	{#each rows as row (row.k)}
		<div class="row">
			<dt>{row.k}</dt>
			<dd>{row.v}</dd>
		</div>
	{/each}
</dl>

<style>
	.kv {
		margin: 0;
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 2px;
		padding: 12px var(--space-2);
	}
	.row + .row {
		border-top: 1px solid var(--line);
	}
	dt {
		font-family: var(--mono);
		font-size: 0.75rem;
		line-height: 1.25rem;
		color: var(--text-3);
	}
	dd {
		margin: 0;
		font-family: var(--mono);
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--text);
		overflow-wrap: break-word;
	}
	@container (min-width: 20rem) {
		.row {
			grid-template-columns: 7.5rem minmax(0, 1fr);
			gap: var(--space-2);
			align-items: baseline;
		}
	}
</style>
