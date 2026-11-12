<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let { children } = $props();
</script>

<div class="shell">
	<SiteHeader />
	<main>
		{@render children()}
	</main>
	<SiteFooter />
</div>

<style>
	.shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
	}
	main {
		flex: 1;
		padding-bottom: var(--space-8);
	}
	@media (min-width: 768px) {
		main {
			padding-bottom: var(--space-12);
		}
	}
</style>
