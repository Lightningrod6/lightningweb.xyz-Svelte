<script lang="ts">
	// short facts on a yellow label, numbered by CSS
	interface Props {
		title: string;
		rows: { k: string; v: string }[];
		note?: string;
		tilt?: number;
	}
	let { title, rows, note = '', tilt = -1.5 }: Props = $props();
</script>

<aside class="label block-yellow" style="transform: rotate({tilt}deg)">
	<p class="flex items-center justify-between gap-4">
		<span class="tape">{title}</span>
		{#if note}<span class="tape red">{note}</span>{/if}
	</p>
	<dl class="count mt-4">
		{#each rows as r (r.k)}
			<div class="row tick grid grid-cols-[2.25rem_1fr] gap-x-3 py-2.5">
				<span class="num text-[1.125rem]" aria-hidden="true"></span>
				<div>
					<dt class="text-[0.75rem] font-extrabold tracking-[0.08em] uppercase">{r.k}</dt>
					<dd class="font-semibold leading-snug">{r.v}</dd>
				</div>
			</div>
		{/each}
	</dl>
</aside>

<style>
	.label {
		border: 3px solid var(--navy);
		padding: 1.1rem 1.25rem 0.75rem;
	}
	.row + .row {
		border-top: 2px solid var(--navy);
	}
</style>
