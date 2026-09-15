<script lang="ts">
	import Bolt from '$lib/components/Bolt.svelte';

	const finds = [
		'Project updates and early access before they hit the public',
		'A place to talk dev — Python, FastAPI, Svelte, or whatever you\'re fighting',
		'Gaming crew for whatever\'s on the server that week',
		'Weather talk, storm chasing, and radar screenshots that mean nothing to anyone else'
	];
</script>

<svelte:head>
	<title>Community — Lightning Web</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
	<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">
		<span class="text-volt">//</span> it takes a grid
	</p>
	<h1 class="mt-2 font-display text-[clamp(2.5rem,9vw,6rem)] leading-none text-bone">COMMUNITY</h1>
	<p class="mt-5 max-w-[60ch] text-[1.05rem] leading-relaxed text-steel">
		Lightning Web started as a portfolio and grew a small community around it. It's a place for
		anyone to join, learn, and explore — developers, gamers, storm nerds, and anyone who just
		wants to hang out while the sky does something interesting.
	</p>
</section>

<section class="mx-auto mt-10 grid max-w-6xl items-stretch gap-8 px-4 sm:px-6 md:grid-cols-[1fr_0.8fr]">
	<div class="panel">
		<div class="border-b border-ink-800 px-5 py-3">
			<span class="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-dim">what you'll find</span>
		</div>
		<ul class="divide-y divide-ink-800/70">
			{#each finds as f (f)}
				<li class="flex items-start gap-3 px-5 py-4">
					<Bolt class="mt-1 h-3.5 w-3.5 shrink-0 text-volt" filled />
					<span class="text-[0.95rem] leading-relaxed text-bone">{f}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="panel flex flex-col justify-between gap-8 p-6 sm:p-8">
		<div>
			<h2 class="font-display text-4xl leading-none text-bone">COME TRY THE LIGHTNING RODS</h2>
			<p class="mt-4 text-[0.98rem] leading-relaxed text-steel">
				The server is small, friendly, and run by me. No spam, no 47 channels of noise — just
				a few rooms where the current flows.
			</p>
		</div>
		<div class="flex flex-col gap-3">
			<a
				href="https://discord.gg/u2YBbHjJRh"
				target="_blank"
				rel="noreferrer"
				class="bg-volt px-6 py-3.5 text-center font-mono text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-warn"
			>
				Join the discord
			</a>
			<a
				href="https://github.com/Lightningrod6"
				target="_blank"
				rel="noreferrer"
				class="border border-ink-800 px-6 py-3.5 text-center font-mono text-[0.78rem] uppercase tracking-[0.18em] text-bone transition-colors hover:border-volt hover:text-volt"
			>
				Browse the code
			</a>
		</div>
	</div>
</section>