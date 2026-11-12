<script lang="ts">
	import Facts from '$lib/components/Facts.svelte';
	import Bolt from '$lib/components/Bolt.svelte';
	import { aboutPage as c, site } from '$lib/content';
	const offTones = ['block-sky', 'block-red', 'block-yellow', 'block-navy'];
	const rowTones = ['block-yellow', 'block-cream', 'block-sky', 'block-cream', 'block-red', 'block-yellow'];
</script>

<svelte:head>
	<title>{c.title}</title>
</svelte:head>

<section class="block-red cut-bottom relative overflow-hidden">
	<Bolt class="pointer-events-none absolute -right-8 -top-6 hidden h-[26rem] w-auto -rotate-[10deg] md:block lg:right-[8%]" />
	<div class="wrap relative pt-14 pb-6 sm:pt-20">
		<p class="tape">{c.eyebrowMark} {c.eyebrow}</p>
		<h1 class="wide-black mega mt-6">{c.heading}</h1>
	</div>
</section>

<section class="wrap grid gap-14 pt-16 lg:grid-cols-12 lg:gap-12">
	<div class="lg:col-span-7">
		<p class="tape red">{c.shortTitle}</p>
		<p class="mt-6 text-[1.3125rem] leading-relaxed font-medium">{c.short}</p>

		<h2 class="wide-black h2 mt-16">{c.workTitle}</h2>
		<ul class="mt-6 border-[3px] border-[var(--navy)]">
			{#each c.work as w, i (w.k)}
				<li class="{i % 2 ? 'block-cream' : 'block-sky'} border-[var(--navy)] px-5 py-4 leading-relaxed [&+li]:border-t-[3px]">
					<span class="font-extrabold uppercase tracking-[0.04em]">{w.k}</span> <span class="font-medium">— {w.v}</span>
				</li>
			{/each}
		</ul>
	</div>
	<div class="count lg:col-span-4 lg:col-start-9 lg:pt-14">
		<Facts title={c.fileTitle} note={c.fileLed} rows={c.file} tilt={2} />
		<p class="mt-8"><a href={site.github} target="_blank" rel="noreferrer" class="go">{c.githubLabel}</a></p>
	</div>
</section>

<section class="wrap pt-20">
	<h2 class="wide-black h2">{c.offTitle}</h2>
	<dl class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each c.off as o, i (o.name)}
			<div class="{offTones[i % offTones.length]} border-[3px] border-[var(--navy)] p-6 {i % 2 ? 'lg:translate-y-6' : ''}">
				<dt class="wide-black text-[1.375rem] leading-none">{o.name}</dt>
				<dd class="mt-3 font-medium leading-relaxed">{o.body}</dd>
			</div>
		{/each}
	</dl>
</section>

<section class="block-navy mt-28 py-20">
	<div class="wrap">
		<p class="tape yellow">{c.timelineEyebrow}</p>
		<h2 class="wide-black h1 mt-5 text-[var(--yellow)]">{c.timelineTitle}</h2>
		<ol class="mt-12 border-[3px] border-[var(--cream)]">
			{#each c.milestones as m, i (m.year)}
				<li class="{rowTones[i % rowTones.length]} grid gap-2 px-5 py-7 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:px-8 [&+li]:border-t-[3px] [&+li]:border-[var(--navy)]">
					<span class="wide-black hollow text-[3.25rem] sm:text-[4.25rem]">{m.year}</span>
					<div>
						<p class="wide-black text-[1.5rem] leading-none">{m.title}</p>
						<p class="mt-3 max-w-[44rem] font-medium leading-relaxed">{m.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
