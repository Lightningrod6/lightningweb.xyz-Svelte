<script lang="ts">
	import type { ProjectStatus } from '$lib/content';
	import StatusDot from './StatusDot.svelte';

	interface Props {
		status: ProjectStatus | 'idle';
		label: string;
	}

	let { status, label }: Props = $props();
</script>

<span class="tag">
	<StatusDot {status} />
	<span class="label">{label}</span>
</span>

<style>
	.tag {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		min-height: 24px;
		font-family: var(--mono);
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-2);
		white-space: nowrap;
	}
</style>
