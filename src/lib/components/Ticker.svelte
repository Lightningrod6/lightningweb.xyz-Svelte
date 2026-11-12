<script lang="ts">
	import { ticker } from '$lib/content';
</script>

<!-- stack strip -->
<div class="strip">
	<div class="track">
		<ul class="items">
			{#each ticker as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.strip {
		overflow: hidden;
		border-block: 1px solid var(--line);
		background: var(--surface);
	}
	.track {
		display: flex;
		max-width: var(--max);
		margin-inline: auto;
	}
	.strip:hover .track,
	.strip:focus-within .track {
		animation-play-state: paused;
	}
	.items {
		display: flex;
		flex-wrap: wrap;
		padding-inline: var(--gutter);
		align-items: center;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: inline-flex;
		align-items: center;
		height: 40px;
		padding: 0 var(--space-3);
		font-family: var(--mono);
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-2);
		white-space: nowrap;
		position: relative;
	}
	/* separator tick between items (drawn, not typed) */
	li::after {
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		width: 4px;
		height: 4px;
		margin-top: -2px;
		margin-right: -2px;
		background: var(--accent);
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
			width: auto;
		}
		.items {
			flex-wrap: wrap;
			padding-inline: var(--gutter);
		}
		li {
			padding: 0 var(--space-2);
		}
	}
</style>
