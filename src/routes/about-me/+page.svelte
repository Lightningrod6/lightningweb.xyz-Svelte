<script lang="ts">
	import DefList from '$lib/components/DefList.svelte';
	import { aboutPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<h1 class="h1 sentence">{c.heading}</h1>
	<p class="kicker mt-4">{c.eyebrowMark} {c.eyebrow}</p>
</section>

<section class="wrap mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
	<div class="space-y-12">
		<div class="ruled">
			<p class="font-semibold">{c.shortTitle}</p>
			<p class="mt-3 text-[1.125rem] leading-relaxed">{c.short}</p>
		</div>

		<div class="ruled">
			<p class="font-semibold">{c.workTitle}</p>
			<ul class="rows mt-3">
				{#each c.work as w (w.k)}
					<li class="py-3 leading-relaxed"><span class="font-semibold">{w.k}</span> <span class="soft">— {w.v}</span></li>
				{/each}
			</ul>
		</div>

		<div class="ruled">
			<p class="font-semibold">{c.offTitle}</p>
			<dl class="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-2">
				{#each c.off as o (o.name)}
					<div>
						<dt class="font-semibold">{o.name}</dt>
						<dd class="soft mt-1 text-[0.9375rem] leading-relaxed">{o.body}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>

	<div class="lg:self-start">
		<DefList title={c.fileTitle} note={c.fileLed} rows={c.file} />
		<p class="mt-4"><a href={site.github} target="_blank" rel="noreferrer" class="link">{c.githubLabel}</a></p>
	</div>
</section>

<section class="wrap section">
	<div class="ruled flex flex-wrap items-baseline justify-between gap-4">
		<h2 class="h2 sentence">{c.timelineTitle}</h2>
		<span class="muted">{c.timelineEyebrow}</span>
	</div>
	<ol class="rows mt-4 border-b" style="border-color: var(--rule)">
		{#each c.milestones as m (m.year)}
			<li class="grid gap-1 py-5 sm:grid-cols-[6rem_1fr] sm:gap-8">
				<span class="text-[1.25rem] font-bold tabular-nums">{m.year}</span>
				<div>
					<p class="font-semibold">{m.title}</p>
					<p class="soft mt-1 max-w-[44rem] leading-relaxed">{m.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>
