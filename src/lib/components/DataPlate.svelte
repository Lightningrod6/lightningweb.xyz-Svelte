<script lang="ts">
	interface Row {
		k: string;
		v: string;
	}

	interface Props {
		rows: Row[];
		title?: string;
		/** text for the blinking status square beside the title */
		led?: string;
		class?: string;
	}

	let { rows, title = '', led = '', class: klass = '' }: Props = $props();
</script>

<div class="plate {klass}">
	{#if title}
		<div class="plate-head">
			<span class="label">{title}</span>
			{#if led}
				<span class="plate-led label"><span class="led" aria-hidden="true"></span>{led}</span>
			{/if}
		</div>
	{/if}
	<dl class="plate-rows">
		{#each rows as row (row.k)}
			<div class="plate-row">
				<dt class="label">{row.k}</dt>
				<dd>{row.v}</dd>
			</div>
		{/each}
	</dl>
</div>

<style>
	.plate {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--color-paper);
		color: var(--color-ink);
	}

	.plate-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.95rem var(--pad);
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.plate-led {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		background: var(--color-volt);
		color: var(--color-ink);
		padding: 0.25rem 0.5rem;
	}
	.led {
		width: 0.6rem;
		height: 0.6rem;
		background: var(--color-ink);
		animation: var(--animate-blink);
	}

	.plate-rows {
		flex: 1;
		display: grid;
		grid-auto-rows: minmax(min-content, 1fr);
	}

	.plate-row {
		display: grid;
		grid-template-columns: 8.25rem minmax(0, 1fr);
		border-top: var(--hair) solid var(--color-ink);
	}
	.plate-head + .plate-rows .plate-row:first-child {
		border-top: 0;
	}

	dt,
	dd {
		padding: 0.85rem 0.9rem;
	}
	dt {
		border-right: var(--hair) solid var(--color-ink);
		font-size: 0.66rem;
		padding-top: 1.05rem;
	}
	dd {
		font-size: 1.02rem;
		font-weight: 500;
		line-height: 1.35;
		letter-spacing: -0.01em;
		overflow-wrap: break-word;
	}

	.plate-row:hover dt {
		background: var(--color-volt);
	}

	@media (min-width: 640px) {
		.plate-row {
			grid-template-columns: 10rem minmax(0, 1fr);
		}
		dt,
		dd {
			padding-inline: var(--pad);
		}
		dd {
			font-size: 1.1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.led {
			animation: none;
		}
	}
</style>
