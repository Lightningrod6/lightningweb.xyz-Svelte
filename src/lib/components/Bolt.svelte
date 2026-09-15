<script lang="ts">
	interface Props {
		class?: string;
		/** draw the stroke once on mount (hero bolt) */
		strike?: boolean;
		filled?: boolean;
	}

	let { class: klass = '', strike = false, filled = false }: Props = $props();
</script>

<svg
	viewBox="0 0 24 24"
	class={klass}
	{...filled ? { fill: 'currentColor' } : {}}
	aria-hidden="true"
>
	{#if filled}
		<path
			d="M13.9 1 4 14.1h6.6L7.7 23 18.6 9.4h-6.9z"
			fill="currentColor"
		/>
	{:else}
		<path
			class="bolt-ink"
			{...strike ? { style: 'animation: bolt-draw 0.9s cubic-bezier(0.65,0,0.35,1) forwards' } : {}}
			d="M13.9 1 4 14.1h6.6L7.7 23 18.6 9.4h-6.9z"
			fill="none"
			stroke="currentColor"
			stroke-width="2.2"
			stroke-linejoin="miter"
			stroke-linecap="square"
		/>
	{/if}
</svg>