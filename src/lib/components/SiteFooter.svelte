<script lang="ts">
	import { site } from '$lib/content';
	import Bolt from './Bolt.svelte';
	import Arrow from './Arrow.svelte';
</script>

<footer class="site-footer">
	<div class="footer-brand">
		<span class="footer-bolt"><Bolt class="h-full w-full" /></span>
		<p class="label">{site.footer.copyright}</p>
	</div>
	<nav class="footer-nav" aria-label="Footer">
		{#each site.footer.links as s (s.label)}
			<a
				href={s.href}
				{...s.external ? { target: '_blank', rel: 'noreferrer' } : {}}
				class="footer-link"
			>
				<Arrow external={s.external} />
				<span>{s.label}</span>
			</a>
		{/each}
	</nav>
</footer>

<style>
	.site-footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--rule);
		background: var(--color-paper);
		border-top: 10px solid var(--color-ink);
		color: var(--color-paper);
	}
	.site-footer > * {
		background: var(--color-ink);
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.5rem;
		padding: var(--pad);
		min-height: 13rem;
	}
	.footer-bolt {
		display: block;
		width: clamp(3.5rem, 7vw, 6rem);
		height: clamp(3.5rem, 7vw, 6rem);
		color: var(--color-volt);
		margin-left: -0.4rem;
	}

	.footer-nav {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--rule);
		background: var(--color-paper);
	}
	.footer-link {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2rem;
		padding: var(--pad);
		min-height: 9rem;
		background: var(--color-ink);
		color: var(--color-paper);
		font-weight: 700;
		font-size: clamp(1.05rem, 1.7vw, 1.5rem);
		line-height: 1.05;
		letter-spacing: -0.02em;
		overflow-wrap: anywhere;
		transition: background-color 80ms linear, color 80ms linear;
	}
	.footer-link :global(.arrow) {
		width: 1.6em;
		height: 1.6em;
		align-self: flex-end;
	}
	.footer-link:hover,
	.footer-link:focus-visible {
		background: var(--color-volt);
		color: var(--color-ink);
	}
	.footer-link:focus-visible {
		outline-color: var(--color-ink);
		outline-offset: -9px;
	}

	@media (min-width: 900px) {
		.site-footer {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		}
	}
</style>
