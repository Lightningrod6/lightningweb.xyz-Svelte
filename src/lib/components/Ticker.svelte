<script lang="ts">
	import { ticker } from '$lib/content';
	import Bolt from './Bolt.svelte';
</script>

<div class="ticker">
	<div class="track">
		{#each [0, 1] as copy (copy)}
			<ul class="run" aria-hidden={copy === 1 ? 'true' : undefined} class:dup={copy === 1}>
				{#each ticker as item (item)}
					<li>
						<span>{item}</span>
						<Bolt class="sep" />
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>

<style>
	.ticker {
		overflow: hidden;
		border-block: 1px solid var(--color-rule);
		padding-block: 0.95rem;
	}
	.track {
		display: flex;
		width: max-content;
		animation: marquee 110s linear infinite;
	}
	.ticker:hover .track {
		animation-play-state: paused;
	}
	.run {
		display: flex;
		align-items: center;
		flex: none;
	}
	li {
		display: inline-flex;
		align-items: center;
		white-space: nowrap;
		font-family: var(--font-serif);
		font-style: italic;
		font-weight: 340;
		font-variation-settings: 'opsz' 36;
		font-size: clamp(1.125rem, 1.8vw, 1.375rem);
		color: var(--color-muted);
	}
	li :global(.sep) {
		width: 0.7rem;
		height: 0.7rem;
		margin-inline: 1.6rem;
		color: var(--color-ink);
		opacity: 0.55;
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
			width: auto;
			padding-inline: clamp(1rem, 4vw, 2.5rem);
		}
		.run {
			flex-wrap: wrap;
			flex: 1 1 auto;
			row-gap: 0.35rem;
		}
		.dup {
			display: none;
		}
	}
</style>
