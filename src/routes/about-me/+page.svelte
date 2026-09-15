<script lang="ts">
	import DataPlate from '$lib/components/DataPlate.svelte';

	const milestones = [
		{
			year: '2023',
			title: 'First site, first scrapes',
			body: 'Built the first version of this website in plain HTML and taught myself Python. Started making Discord bots for fun.'
		},
		{
			year: '2024',
			title: 'First real back end',
			body: 'Shipped the LightningWeb API — generative AI endpoints in Python — and got my first taste of running something in production.'
		},
		{
			year: '2025',
			title: 'Into the deep end',
			body: 'Went all-in on FastAPI and TypeScript, rebuilt my stack on Svelte, and started computer science at Cameron University.'
		},
		{
			year: '2026',
			title: 'First paid product',
			body: 'Launched Deadline as a real SaaS with Stripe billing, email alerts, and actual users. This site got the full 2026 treatment.'
		}
	];

	const offClock = [
		{
			name: 'Meteorology',
			body: 'Weather research and storm watching. The name "Lightning" wasn\'t a marketing decision — it\'s a personality trait.'
		},
		{
			name: 'Game modding',
			body: 'C# mods for Schedule 1, Rust, and Bonelab. Breaking games is research; fixing them is a hobby.'
		},
		{
			name: 'Voice acting',
			body: 'One official credit: General Geratan in the Blade & Sorcery Audible Lore mod. Five lines, fully committed.'
		}
	];
</script>

<svelte:head>
	<title>About Me — Lightning Web</title>
</svelte:head>

<section class="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
	<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">
		<span class="text-volt">//</span> who runs this grid
	</p>
	<h1 class="mt-2 font-display text-[clamp(2.5rem,9vw,6rem)] leading-none text-bone">ABOUT ME</h1>
</section>

<section class="mx-auto mt-10 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
	<div class="space-y-8">
		<div>
			<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">the short version</p>
			<p class="mt-3 max-w-[56ch] text-[1.05rem] leading-relaxed text-steel">
				I'm Liam — 21, a computer science sophomore at Cameron University in Lawton, Oklahoma.
				I'm a backend developer at heart: Python, FastAPI, Redis, and SQL are my home turf, and
				TypeScript + Svelte are how I build the front ends when a product needs to be whole.
				Right now the main project is Deadline, a paid deadline-tracker SaaS, with a few more
				storms forming on the horizon.
			</p>
		</div>

		<div>
			<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">how I work</p>
			<ul class="mt-3 space-y-2 text-[1.02rem] leading-relaxed text-bone">
				<li>
					<span class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-volt">backend</span>
					<span class="text-steel"> — Python, FastAPI, Redis, SQL, REST APIs, scrapers, bots.</span>
				</li>
				<li>
					<span class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-volt">frontend</span>
					<span class="text-steel"> — TypeScript, Svelte 5, SvelteKit, Tailwind, CSS that doesn't fight back.</span>
				</li>
				<li>
					<span class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-volt">ops</span>
					<span class="text-steel"> — Railway, Cloudflare Pages, Redis for the hot state, Postgres/Stripe for the important state.</span>
				</li>
				<li>
					<span class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-volt">elsewhere</span>
					<span class="text-steel"> — C# for game mods, a bit of Java from school, a faint memory of HTML-only days.</span>
				</li>
			</ul>
		</div>

		<div>
			<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">when the keyboard cools</p>
			<ul class="mt-3 space-y-4">
				{#each offClock as item (item.name)}
					<li>
						<p class="font-display text-xl leading-none tracking-wide text-bone">{item.name.toUpperCase()}</p>
						<p class="mt-1.5 max-w-[52ch] text-[0.98rem] leading-relaxed text-steel">{item.body}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="space-y-4 lg:sticky lg:top-24">
		<DataPlate
			title="Personnel file"
			led
			rows={[
				{ k: 'callsign', v: 'Lightning (Lightningrod6)' },
				{ k: 'age', v: '21' },
				{ k: 'role', v: 'Full-stack dev, backend-leaning' },
				{ k: 'education', v: 'CS · Cameron University' },
				{ k: 'based', v: 'Lawton, Oklahoma, USA' }
			]}
		/>
		<a
			href="https://github.com/Lightningrod6"
			target="_blank"
			rel="noreferrer"
			class="block border border-ink-800 px-5 py-3.5 text-center font-mono text-[0.78rem] uppercase tracking-[0.18em] text-bone transition-colors hover:border-volt hover:text-volt"
		>
			github.com/lightningrod6
		</a>
	</div>
</section>

<!-- timeline -->
<section class="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
	<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">stake in the ground</p>
	<h2 class="mt-2 font-display text-5xl leading-none text-bone sm:text-6xl">THE TIMELINE</h2>

	<ol class="mt-8 divide-y divide-ink-800/70 border-y border-ink-800">
		{#each milestones as m (m.year)}
			<li class="grid gap-2 px-2 py-5 sm:grid-cols-[5.5rem_1fr] sm:gap-6">
				<span class="font-display text-3xl leading-none text-volt sm:pt-0.5">{m.year}</span>
				<div>
					<p class="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-bone">{m.title}</p>
					<p class="mt-1.5 max-w-[62ch] text-[0.95rem] leading-relaxed text-steel">{m.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>