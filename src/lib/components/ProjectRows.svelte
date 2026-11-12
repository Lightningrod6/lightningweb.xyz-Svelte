<script lang="ts">
	import { slot, statusLabel, type Project } from '$lib/content';

	interface Props {
		projects: Project[];
		showSlot?: boolean;
	}
	let { projects, showSlot = false }: Props = $props();
	const ext = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
</script>

<ol class="rows border-y" style="border-color: var(--rule)">
	{#each projects as p (p.name)}
		<li class="row grid gap-x-8 gap-y-2 py-6 md:grid-cols-[14rem_1fr_auto]">
			<div>
				<h3 class="text-[1.25rem] font-bold leading-tight tracking-[-0.01em]">
					<a href={p.href} {...ext(p.href)} class="name">{p.name}</a>
				</h3>
				<p class="muted mt-1 text-[0.875rem]">{statusLabel[p.status]}</p>
			</div>
			<div>
				<p class="soft max-w-[40rem] leading-relaxed">{p.blurb}</p>
				<ul class="commas muted mt-2 block text-[0.875rem]">
					{#each p.tags as t (t)}<li>{t}</li>{/each}
				</ul>
			</div>
			<p class="md:text-right">
				<a href={p.href} {...ext(p.href)} class="link whitespace-nowrap text-[0.9375rem]">{p.cta}</a>
			</p>
		</li>
	{/each}
	{#if showSlot}
		<li class="row grid gap-x-8 gap-y-2 py-6 md:grid-cols-[14rem_1fr_auto]">
			<div>
				<h3 class="muted text-[1.25rem] font-bold leading-tight tracking-[-0.01em]">{slot.title}</h3>
				<p class="muted mt-1 text-[0.875rem]">{slot.label}</p>
			</div>
			<div>
				<p class="soft max-w-[40rem] leading-relaxed">{slot.blurb}</p>
				<ul class="commas muted mt-2 block text-[0.875rem]">
					{#each slot.tags as t (t)}<li>{t}</li>{/each}
				</ul>
			</div>
			<p class="md:text-right">
				<a href={slot.href} target="_blank" rel="noreferrer" class="link whitespace-nowrap text-[0.9375rem]">{slot.cta}</a>
			</p>
		</li>
	{/if}
</ol>

<style>
	.name:hover {
		color: var(--link);
	}
</style>
