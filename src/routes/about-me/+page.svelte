<script lang="ts">
	import InfoCard from '$lib/components/InfoCard.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { aboutPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap rise pt-16 sm:pt-24">
	<p class="eyebrow"><span class="mark">{c.eyebrowMark}</span>{c.eyebrow}</p>
	<h1 class="h1 sentence mt-4">{c.heading}</h1>
</section>

<section class="wrap rise rise-2 mt-12 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
	<div class="space-y-12">
		<div>
			<p class="eyebrow">{c.shortTitle}</p>
			<p class="mt-3 text-[1.0625rem] leading-relaxed">{c.short}</p>
		</div>

		<div>
			<p class="eyebrow">{c.workTitle}</p>
			<ul class="mt-3 space-y-3">
				{#each c.work as w (w.k)}
					<li class="leading-relaxed">
						<span class="font-semibold">{w.k}</span>
						<span class="soft"> — {w.v}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="eyebrow">{c.offTitle}</p>
			<div class="mt-4 grid gap-3 sm:grid-cols-2">
				{#each c.off as o (o.name)}
					<div class="card p-4">
						<p class="font-semibold">{o.name}</p>
						<p class="soft mt-1 text-[0.9375rem] leading-relaxed">{o.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="space-y-3 lg:sticky lg:top-24 lg:self-start">
		<InfoCard title={c.fileTitle} note={c.fileLed} rows={c.file} />
		<a href={site.github} target="_blank" rel="noreferrer" class="btn btn-ghost w-full justify-center font-mono text-[0.8125rem]">
			{c.githubLabel} <Arrow external />
		</a>
	</div>
</section>

<section class="wrap section">
	<p class="eyebrow">{c.timelineEyebrow}</p>
	<h2 class="h2 sentence mt-2">{c.timelineTitle}</h2>
	<ol class="timeline mt-10">
		{#each c.milestones as m (m.year)}
			<li class="item grid gap-1 pb-9 sm:grid-cols-[6rem_1fr] sm:gap-8">
				<span class="year font-mono text-[0.875rem]">{m.year}</span>
				<div class="body">
					<p class="font-semibold">{m.title}</p>
					<p class="soft mt-1 max-w-[42rem] leading-relaxed">{m.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	.timeline {
		position: relative;
	}
	.year {
		color: var(--accent-ink);
		padding-top: 0.1rem;
	}
	.body {
		position: relative;
		padding-left: 1.5rem;
		border-left: 1px solid var(--line-strong);
	}
	.body::before {
		content: '';
		position: absolute;
		left: -5px;
		top: 0.45rem;
		width: 9px;
		height: 9px;
		border-radius: 999px;
		background: var(--bg);
		border: 2px solid var(--accent);
	}
	.item:last-child .body {
		border-left-color: transparent;
	}
</style>
