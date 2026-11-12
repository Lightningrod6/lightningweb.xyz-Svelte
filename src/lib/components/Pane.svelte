<script lang="ts">
	import type { Snippet } from 'svelte';
	import StatusDot from './StatusDot.svelte';

	interface Props {
		title?: string;
		/** label for a "nominal" style indicator at the right of the title bar */
		indicator?: string;
		class?: string;
		children: Snippet;
	}

	let { title = '', indicator = '', class: klass = '', children }: Props = $props();
</script>

<section class="pane {klass}">
	{#if title}
		<div class="bar">
			<span class="title">{title}</span>
			{#if indicator}
				<span class="indicator">
					<StatusDot status="live" pulse={false} />
					<span>{indicator}</span>
				</span>
			{/if}
		</div>
	{/if}
	<div class="body">
		{@render children()}
	</div>
</section>

<style>
	.pane {
		border: 1px solid var(--line);
		border-radius: 2px;
		background: var(--surface);
		min-width: 0;
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		min-height: 40px;
		padding: var(--space-1) var(--space-2);
		border-bottom: 1px solid var(--line);
		background: var(--surface-2);
	}
	.title {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		font-family: var(--mono);
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-2);
	}
	/* small accent block: the pane's "handle" */
	.title::before {
		content: '';
		width: 6px;
		height: 6px;
		background: var(--accent);
	}
	.indicator {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		font-family: var(--mono);
		font-size: 0.6875rem;
		line-height: 1rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-3);
	}
	.body {
		container-type: inline-size;
	}
</style>
