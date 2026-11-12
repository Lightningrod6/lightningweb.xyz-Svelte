<script lang="ts">
	interface Row {
		k: string;
		v: string;
	}

	interface Props {
		rows: Row[];
		title: string;
		/** optional status word shown beside the title with a breathing dot */
		led?: string;
		/** heading level for the title */
		level?: 2 | 3;
		class?: string;
	}

	let { rows, title, led = '', level = 2, class: klass = '' }: Props = $props();
</script>

<section class="colophon {klass}">
	<header class="flex items-baseline justify-between gap-4 pb-3">
		<svelte:element this={`h${level}`} class="label">{title}</svelte:element>
		{#if led}
			<span class="inline-flex items-center gap-2">
				<span class="dot dot-live pulse" aria-hidden="true"></span>
				<span class="label muted">{led}</span>
			</span>
		{/if}
	</header>
	<dl class="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-6">
		{#each rows as row (row.k)}
			<div class="contents">
				<dt class="label faint border-t border-rule pt-[0.95rem] pb-3">{row.k}</dt>
				<dd class="serif border-t border-rule py-2.5 text-[1.0625rem] leading-snug">{row.v}</dd>
			</div>
		{/each}
	</dl>
</section>

<style>
	.colophon {
		border-top: 2px solid var(--color-ink);
		padding-top: 0.75rem;
	}
	dd {
		font-variation-settings: 'opsz' 14;
		font-weight: 400;
	}
</style>
