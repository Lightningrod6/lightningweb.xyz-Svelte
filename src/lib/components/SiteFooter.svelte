<script lang="ts">
	import { site } from '$lib/content';
	import StatusDot from './StatusDot.svelte';
</script>

<footer class="statusbar">
	<div class="wrap inner">
		<p class="left">
			<StatusDot status="live" pulse={false} />
			<span>{site.footer.copyright}</span>
		</p>
		<nav aria-label="Footer">
			<ul class="links">
				{#each site.footer.links as s (s.label)}
					<li>
						<a href={s.href} {...s.external ? { target: '_blank', rel: 'noreferrer' } : {}}>
							{s.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>

<style>
	.statusbar {
		border-top: 1px solid var(--line);
		background: var(--surface);
		font-family: var(--mono);
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--text-3);
	}
	.inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding-block: 12px;
	}
	.left {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		margin: 0;
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.links li + li {
		margin-left: 12px;
		padding-left: 12px;
		border-left: 1px solid var(--line);
	}
	.links a {
		color: var(--text-2);
		text-decoration: none;
		transition: color 120ms ease;
	}
	.links a:hover {
		color: var(--accent-text);
	}

	@media (min-width: 768px) {
		.inner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			min-height: 40px;
			padding-block: var(--space-1);
		}
	}
</style>
