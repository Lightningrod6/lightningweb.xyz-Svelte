<script lang="ts">
	import { statusLabel, type ProjectStatus } from '$lib/content';
	let { status }: { status: ProjectStatus } = $props();
</script>

<span class="pill" data-status={status}>
	<span class="dot"></span>
	{statusLabel[status]}
</span>

<style>
	.pill {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--soft);
		white-space: nowrap;
	}
	.pill[data-status='live'] .dot {
		background: var(--live);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--live) 18%, transparent);
	}
	.pill[data-status='dev'] .dot {
		background: var(--dev);
	}
	.pill[data-status='other'] .dot {
		background: var(--other);
	}
	.pill[data-status='offline'] .dot {
		background: transparent;
		border: 1.5px solid var(--off);
	}
</style>
