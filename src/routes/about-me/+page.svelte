<script lang="ts">
	import DefList from '$lib/components/DefList.svelte';
	import { aboutPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap pt-12 sm:pt-16">
	<p class="kicker">{c.eyebrowMark} {c.eyebrow}</p>
	<h1 class="h1 sentence mt-4">{c.heading}</h1>
</section>

<section class="wrap mt-12">
<div class="grid gap-14 border-t pt-12 lg:grid-cols-12 lg:gap-10" style="border-color: var(--ink)">
	<div class="space-y-16 lg:col-span-7">
		<div>
			<p class="kicker">{c.shortTitle}</p>
			<p class="serif mt-5 text-[1.25rem] leading-relaxed">{c.short}</p>
		</div>

		<div>
			<h2 class="h3 cap-first">{c.workTitle}</h2>
			<ul class="notes mt-6 space-y-5">
				{#each c.work as w (w.k)}
					<li class="note leading-relaxed"><span class="font-semibold">{w.k}</span> <span class="soft">— {w.v}</span></li>
				{/each}
			</ul>
		</div>

		<div>
			<h2 class="h3 cap-first">{c.offTitle}</h2>
			<dl class="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
				{#each c.off as o (o.name)}
					<div class="border-t pt-3" style="border-color: var(--rule)">
						<dt class="serif text-[1.25rem]">{o.name}</dt>
						<dd class="soft mt-1 text-[0.9375rem] leading-relaxed">{o.body}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>

	<div class="lg:col-span-4 lg:col-start-9">
		<div class="lg:sticky lg:top-8">
			<DefList title={c.fileTitle} note={c.fileLed} rows={c.file} />
			<p class="mt-5"><a href={site.github} target="_blank" rel="noreferrer" class="link">{c.githubLabel}</a></p>
		</div>
	</div>
</div>
</section>

<section class="wrap section">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="kicker">{c.timelineEyebrow}</p>
			<h2 class="h2 mt-2"><span class="sentence mark-under">{c.timelineTitle}</span></h2>
		</div>
	</div>
	<ol class="mt-10">
		{#each c.milestones as m (m.year)}
			<li class="grid gap-2 border-t py-8 sm:grid-cols-[11rem_1fr] sm:gap-10" style="border-color: var(--rule)">
				<span class="year">{m.year}</span>
				<div>
					<p class="h3 text-[1.625rem]!">{m.title}</p>
					<p class="soft mt-2 max-w-[44rem] leading-relaxed">{m.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	.year {
		font-family: var(--font-display);
		font-size: clamp(2.75rem, 6vw, 4rem);
		line-height: 0.9;
		color: var(--red);
		font-variant-numeric: oldstyle-nums;
	}
</style>
