<script lang="ts">
	let { external = false, class: klass = '' }: { external?: boolean; class?: string } = $props();
</script>

<svg viewBox="0 0 16 16" class="arrow {klass}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
	{#if external}
		<path d="M5 11 11 5M6 5h5v5" />
	{:else}
		<path d="M3 8h10M9 4l4 4-4 4" />
	{/if}
</svg>

<style>
	.arrow {
		width: 0.9em;
		height: 0.9em;
		flex: none;
	}
</style>
