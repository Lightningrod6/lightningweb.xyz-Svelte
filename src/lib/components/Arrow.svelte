<script lang="ts">
	let { class: klass = '' }: { class?: string } = $props();
</script>

<!-- right arrow drawn in SVG so it adds no text to the page -->
<svg viewBox="0 0 12 12" class={klass} aria-hidden="true" focusable="false">
	<path d="M1 6h9M6.5 2.5 10 6 6.5 9.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square" />
</svg>
