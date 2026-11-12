<script lang="ts">
	import Kv from '$lib/components/Kv.svelte';
	import { aboutPage as c, site } from '$lib/content';
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="wrap pt-14 sm:pt-20">
	<p class="label">{c.eyebrowMark} {c.eyebrow}</p>
	<h1 class="h1 sentence mt-3">{c.heading}</h1>
</section>

<section class="wrap mt-10">
	<p class="label">{c.shortTitle}</p>
	<p class="mt-2">{c.short}</p>
</section>

<section class="wrap section">
	<Kv title={c.fileTitle} note={c.fileLed} rows={c.file} />
	<p class="mt-4 text-[0.9375rem]">
		<a href={site.github} target="_blank" rel="noreferrer">{c.githubLabel}</a>
	</p>
</section>

<section class="wrap section">
	<p class="label">{c.workTitle}</p>
	<ul class="mt-3 space-y-2">
		{#each c.work as w (w.k)}
			<li><span class="font-semibold">{w.k}</span> <span>— {w.v}</span></li>
		{/each}
	</ul>
</section>

<section class="wrap section">
	<p class="label">{c.offTitle}</p>
	<dl class="mt-3 space-y-4">
		{#each c.off as o (o.name)}
			<div>
				<dt class="font-semibold">{o.name}</dt>
				<dd>{o.body}</dd>
			</div>
		{/each}
	</dl>
</section>

<section class="wrap section">
	<p class="label">{c.timelineEyebrow}</p>
	<h2 class="h2 sentence mt-1">{c.timelineTitle}</h2>
	<ol class="mt-6 space-y-6">
		{#each c.milestones as m (m.year)}
			<li class="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
				<span class="muted tabular-nums">{m.year}</span>
				<div>
					<p class="font-semibold">{m.title}</p>
					<p class="mt-0.5">{m.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>
