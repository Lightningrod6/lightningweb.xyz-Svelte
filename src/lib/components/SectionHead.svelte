<script lang="ts">
	import type { Snippet } from 'svelte';
	import Eyebrow from './Eyebrow.svelte';

	interface Props {
		eyebrow: string;
		title: string;
		size?: 'm' | 's';
		aside?: Snippet;
	}

	let { eyebrow, title, size = 'm', aside }: Props = $props();
</script>

<div class="spread">
	<div class="margin">
		<Eyebrow text={eyebrow} />
	</div>
	<div class="body flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
		<h2 class="display sentence {size === 'm' ? 'display-m' : 'display-s'}">{title}</h2>
		{#if aside}
			<div class="pb-1">{@render aside()}</div>
		{/if}
	</div>
</div>
