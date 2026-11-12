<script lang="ts">
	import type { ProjectStatus } from '$lib/content';
	import StatusMark from './StatusMark.svelte';
	import Arrow from './Arrow.svelte';

	interface Props {
		name: string;
		blurb: string;
		tags: string[];
		href: string;
		cta: string;
		/** project status; omit for the open slot */
		status?: ProjectStatus;
		/** kicker label used in place of a status (the open slot) */
		openLabel?: string;
		/** 'row' = index line across the column, 'compact' = narrow column entry */
		layout?: 'row' | 'compact';
		level?: 2 | 3;
	}

	let {
		name,
		blurb,
		tags,
		href,
		cta,
		status,
		openLabel = '',
		layout = 'row',
		level = 3
	}: Props = $props();

	const external = $derived(href.startsWith('http'));
	const open = $derived(!status);
</script>

<a
	{href}
	{...external ? { target: '_blank', rel: 'noreferrer' } : {}}
	class="entry group {layout}"
	class:is-open={open}
>
	<div class="head">
		{#if status}
			<StatusMark {status} />
		{:else}
			<span class="inline-flex items-center gap-2">
				<span class="dot dot-open" aria-hidden="true"></span>
				<span class="label muted">{openLabel}</span>
			</span>
		{/if}
		<svelte:element this={`h${level}`} class="name">
			<span class="name-ink">{name}</span>
		</svelte:element>
	</div>

	<div class="text">
		<p class="dek">{blurb}</p>
		<div class="foot">
			<ul class="tags">
				{#each tags as tag, i (i)}
					<li>{tag}</li>
				{/each}
			</ul>
			<span class="cta label">
				<span>{cta}</span>
				<Arrow />
			</span>
		</div>
	</div>
</a>

<style>
	.entry {
		display: grid;
		gap: 0.9rem;
		color: inherit;
		text-decoration: none;
		border-top: 1px solid var(--color-rule);
		padding-block: 1.6rem 1.9rem;
	}
	.entry.is-open {
		border-top-style: dashed;
		border-top-color: var(--color-faint);
	}

	.head {
		display: grid;
		gap: 0.7rem;
		align-content: start;
	}

	.name {
		font-family: var(--font-serif);
		font-weight: 400;
		font-variation-settings:
			'opsz' 96,
			'SOFT' 30;
		letter-spacing: -0.025em;
		line-height: 1;
		overflow-wrap: break-word;
	}
	.row .name {
		font-size: clamp(2rem, 3.6vw, 3.25rem);
	}
	.compact .name {
		font-size: clamp(1.625rem, 2.6vw, 1.875rem);
		letter-spacing: -0.02em;
	}
	.is-open .name {
		font-style: italic;
		color: var(--color-muted);
	}

	.name-ink {
		background-image: linear-gradient(var(--color-signal), var(--color-signal));
		background-repeat: no-repeat;
		background-position: 0 88%;
		background-size: 0% 0.22em;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
		transition: background-size 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.entry:hover .name-ink,
	.entry:focus-visible .name-ink {
		background-size: 100% 0.22em;
	}

	.text {
		display: grid;
		gap: 1.1rem;
		align-content: start;
	}
	.dek {
		color: var(--color-muted);
		max-width: 60ch;
		line-height: 1.6;
	}
	.row .dek {
		font-size: 1.0625rem;
	}
	.compact .dek {
		font-size: 0.96875rem;
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.75rem 1.5rem;
	}
	.compact .foot {
		flex-direction: column;
		align-items: flex-start;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.2rem 0;
		font-size: 0.8125rem;
		color: var(--color-faint);
	}
	.tags li {
		display: inline-flex;
		align-items: center;
	}
	.tags li + li::before {
		content: '';
		display: inline-block;
		width: 3px;
		height: 3px;
		border-radius: 9999px;
		background: currentColor;
		margin-inline: 0.6rem;
		opacity: 0.7;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		white-space: nowrap;
	}

	@media (min-width: 48rem) {
		.row {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
			column-gap: 2.5rem;
		}
		.row .text {
			padding-top: 1.75rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.name-ink {
			transition: none;
		}
	}
</style>
