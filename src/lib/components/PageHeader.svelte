<script lang="ts">
	interface Props {
		mark: string;
		eyebrow: string;
		heading: string;
		intro?: string;
	}

	let { mark, eyebrow, heading, intro = '' }: Props = $props();
</script>

<header class="wrap head">
	{#if eyebrow}<p class="eyebrow"><span class="mark">{mark}</span> {eyebrow}</p>{/if}
	<h1>{heading}</h1>
	{#if intro}
		<p class="lede">{intro}</p>
	{/if}
</header>

<style>
	.head {
		padding-top: var(--space-6);
		padding-bottom: var(--space-4);
	}
	h1 {
		margin: var(--space-2) 0 0;
		font-family: var(--mono);
		font-weight: 600;
		font-size: clamp(2rem, 7vw, 4.5rem);
		line-height: 1;
		letter-spacing: -0.04em;
		color: var(--text);
		overflow-wrap: break-word;
	}
	.lede {
		margin-top: var(--space-3);
	}
	@media (min-width: 768px) {
		.head {
			padding-top: var(--space-8);
			padding-bottom: var(--space-5);
		}
	}
</style>
