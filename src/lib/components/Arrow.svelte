<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 20 20" class="arrow {klass}" aria-hidden="true" focusable="false">
	<path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5" />
</svg>
