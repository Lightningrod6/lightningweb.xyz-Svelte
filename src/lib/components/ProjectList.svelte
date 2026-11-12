<script lang="ts">
	import { slot as openSlot, statusLabel, type Project } from '$lib/content';

	interface Props {
		projects: Project[];
		showSlot?: boolean;
	}
	let { projects, showSlot = false }: Props = $props();

	const ext = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
</script>

<ul class="divide-y" style="--tw-divide-opacity:1">
	{#each projects as p (p.name)}
		<li class="item py-6">
			<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
				<h3 class="text-[1.0625rem] font-semibold">
					<a href={p.href} {...ext(p.href)}>{p.name}</a>
				</h3>
				<span class="status text-[0.8125rem] muted" data-status={p.status}>{statusLabel[p.status]}</span>
			</div>
			<p class="mt-1.5">{p.blurb}</p>
			<div class="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[0.875rem]">
				<ul class="dots muted">
					{#each p.tags as t (t)}<li>{t}</li>{/each}
				</ul>
				<a href={p.href} {...ext(p.href)} class="cta">{p.cta}</a>
			</div>
		</li>
	{/each}
	{#if showSlot}
		<li class="item py-6">
			<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
				<h3 class="text-[1.0625rem] font-semibold muted">{openSlot.title}</h3>
				<span class="text-[0.8125rem] muted">{openSlot.label}</span>
			</div>
			<p class="mt-1.5">{openSlot.blurb}</p>
			<div class="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[0.875rem]">
				<ul class="dots muted">
					{#each openSlot.tags as t (t)}<li>{t}</li>{/each}
				</ul>
				<a href={openSlot.href} target="_blank" rel="noreferrer" class="cta">{openSlot.cta}</a>
			</div>
		</li>
	{/if}
</ul>

<style>
	ul.divide-y > :global(li) {
		border-color: var(--rule);
	}
	.item:first-child {
		padding-top: 0;
	}
	.status[data-status='live']::before {
		content: '';
		display: inline-block;
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 999px;
		background: #3f9d5b;
		margin-right: 0.4rem;
		vertical-align: 0.08em;
	}
	.cta::after {
		content: ' \2192';
	}
</style>
