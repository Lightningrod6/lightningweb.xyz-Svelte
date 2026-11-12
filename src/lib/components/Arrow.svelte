<script lang="ts">
	interface Props {
		/** external links point up-right */
		external?: boolean;
		class?: string;
	}

	let { external = false, class: klass = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 24 24"
	class="arrow {external ? 'arrow--ext' : ''} {klass}"
	aria-hidden="true"
	focusable="false"
>
	<path
		d="M2.5 12h17M12.5 5l7 7-7 7"
		fill="none"
		stroke="currentColor"
		stroke-width="2.75"
		stroke-linecap="square"
		stroke-linejoin="miter"
	/>
</svg>
