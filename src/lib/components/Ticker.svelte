<script lang="ts">
	import { ticker } from '$lib/content';
</script>

<div class="ticker">
	<div class="ticker-track">
		<ul class="ticker-set">
			{#each ticker as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
		<ul class="ticker-set" aria-hidden="true">
			{#each ticker as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.ticker {
		overflow: hidden;
		background: var(--color-volt);
		color: var(--color-ink);
		border-bottom: var(--rule) solid var(--color-ink);
	}

	.ticker-track {
		display: flex;
		width: max-content;
		animation: var(--animate-marquee);
	}
	.ticker:hover .ticker-track {
		animation-play-state: paused;
	}

	.ticker-set {
		display: flex;
		flex: none;
	}

	li {
		display: flex;
		align-items: center;
		padding-block: 0.85rem;
		font-weight: 700;
		font-size: clamp(1.3rem, 2.6vw, 2.25rem);
		line-height: 1;
		letter-spacing: -0.03em;
		text-transform: uppercase;
		white-space: nowrap;
	}
	li::after {
		content: '';
		width: 0.42em;
		height: 0.42em;
		margin-inline: 0.85em;
		background: var(--color-ink);
	}

	@media (prefers-reduced-motion: reduce) {
		.ticker-track {
			width: auto;
			animation: none;
			padding-inline: var(--pad);
		}
		.ticker-set {
			flex: 1;
			flex-wrap: wrap;
		}
		.ticker-set[aria-hidden='true'] {
			display: none;
		}
	}
</style>
