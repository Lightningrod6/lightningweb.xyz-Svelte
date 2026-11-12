<script lang="ts">
	import type { ProjectStatus } from '$lib/content';
	import StatusTag from './StatusTag.svelte';
	import Arrow from './Arrow.svelte';

	interface Props {
		name: string;
		blurb: string;
		tags: string[];
		href: string;
		status: ProjectStatus | 'idle';
		/** visible status text (from statusLabel, or the slot label) */
		label: string;
		cta: string;
		/** the open slot row: dashed separator, muted title */
		vacant?: boolean;
	}

	let { name, blurb, tags, href, status, label, cta, vacant = false }: Props = $props();

	const external = $derived(href.startsWith('http'));
</script>

<li class="item" class:vacant>
	<a {href} {...external ? { target: '_blank', rel: 'noreferrer' } : {}} class="row">
		<div class="status"><StatusTag {status} {label} /></div>
		<div class="main">
			<h3 class="name">{name}</h3>
			<p class="blurb">{blurb}</p>
		</div>
		<div class="tags">
			{#each tags as tag (tag)}
				<span class="chip">{tag}</span>
			{/each}
		</div>
		<div class="action">
			<span>{cta}</span>
			<Arrow class="arrow" />
		</div>
	</a>
</li>

<style>
	.item:not(:first-child) {
		border-top: 1px solid var(--line);
	}
	.item.vacant:not(:first-child) {
		border-top-style: dashed;
		border-top-color: var(--line-strong);
	}

	/* narrow: everything stacks */
	.row {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-areas:
			'status'
			'main'
			'tags'
			'action';
		gap: 12px;
		padding: var(--space-2);
		color: inherit;
		text-decoration: none;
		transition: background-color 120ms ease;
	}
	.row:hover {
		background: var(--surface-2);
		box-shadow: inset 2px 0 0 var(--accent);
	}
	.row:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: -2px;
		background: var(--surface-2);
	}

	.status {
		grid-area: status;
		display: flex;
		align-items: center;
		min-height: 24px;
	}
	.main {
		grid-area: main;
		display: flex;
		flex-direction: column;
		gap: 4px;
		min-width: 0;
	}
	.name {
		margin: 0;
		font-family: var(--mono);
		font-size: 1.0625rem;
		font-weight: 500;
		line-height: 1.5rem;
		letter-spacing: -0.01em;
		color: var(--text);
	}
	.vacant .name {
		color: var(--text-2);
	}
	.blurb {
		margin: 0;
		font-family: var(--sans);
		font-size: 0.9375rem;
		line-height: 1.5rem;
		color: var(--text-2);
		max-width: 68ch;
	}
	.tags {
		grid-area: tags;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 6px;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		min-height: 22px;
		padding: 0 6px;
		border: 1px solid var(--line);
		border-radius: 2px;
		background: var(--bg);
		font-family: var(--mono);
		font-size: 0.6875rem;
		line-height: 1rem;
		color: var(--text-3);
		white-space: nowrap;
	}
	.action {
		grid-area: action;
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		min-height: 24px;
		font-family: var(--mono);
		font-size: 0.8125rem;
		font-weight: 500;
		line-height: 1rem;
		color: var(--text);
		white-space: nowrap;
		transition: color 120ms ease;
	}
	.action :global(.arrow) {
		width: 12px;
		height: 12px;
		flex: none;
		color: var(--text-3);
		transition:
			transform 120ms ease,
			color 120ms ease;
	}
	.row:hover .action,
	.row:focus-visible .action {
		color: var(--accent-text);
	}
	.row:hover .action :global(.arrow),
	.row:focus-visible .action :global(.arrow) {
		color: var(--accent-text);
		transform: translateX(2px);
	}

	/* medium: status column + content column */
	@container (min-width: 36rem) {
		.row {
			grid-template-columns: 10rem minmax(0, 1fr);
			grid-template-areas:
				'status main'
				'.      tags'
				'.      action';
			column-gap: var(--space-3);
			padding: var(--space-2) var(--space-3);
		}
	}

	/* wide: a real table row */
	@container (min-width: 64rem) {
		.row {
			grid-template-columns: 9.5rem minmax(0, 1fr) 13rem 11rem;
			grid-template-areas: 'status main tags action';
			align-items: start;
			padding: 20px var(--space-3);
		}
		.status,
		.action {
			min-height: 24px;
		}
		.tags {
			padding-top: 1px;
		}
		.action {
			justify-content: flex-end;
		}
	}
</style>
