<script lang="ts">
	interface Props {
		class?: string;
		/** hairline outline instead of a solid glyph */
		outline?: boolean;
	}

	let { class: klass = '', outline = false }: Props = $props();
</script>

<svg viewBox="0 0 24 24" class={klass} aria-hidden="true" focusable="false">
	{#if outline}
		<path
			d="M13.9 1 4 14.1h6.6L7.7 23 18.6 9.4h-6.9z"
			fill="none"
			stroke="currentColor"
			stroke-width="1.25"
			stroke-linejoin="miter"
			vector-effect="non-scaling-stroke"
		/>
	{:else}
		<path d="M13.9 1 4 14.1h6.6L7.7 23 18.6 9.4h-6.9z" fill="currentColor" />
	{/if}
</svg>
