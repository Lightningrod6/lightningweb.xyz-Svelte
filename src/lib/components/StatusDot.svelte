<script lang="ts">
	import type { ProjectStatus } from '$lib/content';

	interface Props {
		status: ProjectStatus | 'idle';
		/** pulse ring; only used for live services */
		pulse?: boolean;
	}

	let { status, pulse = status === 'live' }: Props = $props();
</script>

<span class="dot s-{status}" class:pulse aria-hidden="true"></span>

<style>
	.dot {
		position: relative;
		display: inline-block;
		flex: none;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--c);
	}
	.s-live {
		--c: var(--status-live);
	}
	.s-dev {
		--c: var(--status-dev);
	}
	.s-other {
		--c: var(--status-other);
	}
	.s-offline {
		--c: var(--status-offline);
	}
	/* open slot: hollow */
	.s-idle {
		--c: var(--status-idle);
		background: transparent;
		box-shadow: inset 0 0 0 1.5px var(--c);
	}
	.pulse::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background: var(--c);
		animation: ring 2.4s cubic-bezier(0.2, 0.6, 0.3, 1) infinite;
	}
	@media (prefers-reduced-motion: reduce) {
		.pulse::after {
			animation: none;
			display: none;
		}
	}
</style>
