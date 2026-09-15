<script lang="ts">
	import Bolt from '$lib/components/Bolt.svelte';
	import DataPlate from '$lib/components/DataPlate.svelte';
	import ProjectPanel from '$lib/components/ProjectPanel.svelte';
	import ProjectSlot from '$lib/components/ProjectSlot.svelte';
	import Ticker from '$lib/components/Ticker.svelte';

	const heroPlate = {
		rows: [
			{ k: 'operator', v: 'Liam Caywood' },
			{ k: 'base', v: 'Lawton, OK — 34.61°N, 98.39°W' },
			{ k: 'study', v: 'CS · Cameron University (sophomore)' },
			{ k: 'stack', v: 'Python · FastAPI · TypeScript · Svelte · Redis' },
			{ k: 'availability', v: 'Open for work & collabs' }
		]
	};

	const featured = [
		{
			name: 'Deadline',
			blurb:
				'Set a deadline, submit, and let it watch the clock. It emails you before the due date slips past — so you can focus on everything else.',
			tags: ['SaaS', 'email alerts', '$9/mo', 'live'],
			href: 'https://deadline.lightningweb.xyz',
			status: 'live' as const,
			cta: 'open product'
		},
		{
			name: 'Conflicts Tracker',
			blurb:
				'Watches in-game world events — wars, deals, drama — across game universes and alerts you the moment something changes. FastAPI + Redis scrapers with a SvelteKit front end.',
			tags: ['FastAPI', 'Redis', 'SvelteKit', 'live'],
			href: 'https://conflicts-tracker.com',
			status: 'live' as const,
			cta: 'open product'
		},
		{
			name: 'LightningWeb API',
			blurb:
				'My first real back end: a public multi-endpoint API for text generation, chat, and utilities. Still the home of my earliest shipping scars.',
			tags: ['Python', 'api', 'llm'],
			href: 'https://api.lightningweb.xyz',
			status: 'live' as const,
			cta: 'hit the api'
		}
	];

	const more = [
		{
			name: 'Bot-Bot',
			blurb: 'Discord moderation bot, rebuilt from the ground up. Currently learning how not to break prod.',
			tags: ['Python', 'discord'],
			href: 'https://top.gg/bot/609076611609788427',
			status: 'dev' as const,
			cta: 'see the bot'
		},
		{
			name: 'Voice work',
			blurb: 'Voiced General Geratan in the Blade & Sorcery Audible Lore mod. Five lines, immortalized.',
			tags: ['voice acting', 'Blade & Sorcery'],
			href: 'https://www.nexusmods.com/bladeandsorcery/mods/11048',
			status: 'other' as const,
			cta: 'hear it'
		}
	];
</script>

<svelte:head>
	<title>Lightning Web — Liam Caywood, full-stack developer</title>
</svelte:head>

<!-- ============ HERO ============ -->
<section class="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-20">
	<div>
		<p class="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-dim">
			<span class="text-volt">//</span> lightningweb.xyz — personal site of liam caywood
		</p>

		<h1 class="mt-5 font-display leading-[0.88]">
			<span class="block text-[clamp(2.5rem,9.5vw,7.5rem)] text-bone">LIGHTNING</span>
			<span class="flex items-center gap-4 text-[clamp(2.5rem,9.5vw,7.5rem)] text-volt">
				<Bolt class="h-[0.72em] w-[0.72em] text-volt" strike />
				WEB
			</span>
		</h1>

		<p class="mt-6 max-w-[52ch] text-lg leading-relaxed text-steel">
			I build and operate web software — backend-first, Python and FastAPI at heart — and I'm
			studying computer science at Cameron University. This is where I bolt the whole grid together.
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="/projects"
				class="bg-volt px-6 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-warn"
			>
				View projects
			</a>
			<a
				href="/about-me"
				class="border border-ink-800 px-6 py-3 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-bone transition-colors hover:border-volt hover:text-volt"
			>
				More about me
			</a>
		</div>
	</div>

	<DataPlate title="System status" led rows={heroPlate.rows} class="w-full" />
</section>

<Ticker />

<!-- ============ FEATURED PROJECTS ============ -->
<section class="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">what's running</p>
			<h2 class="mt-2 font-display text-5xl leading-none text-bone sm:text-6xl">FEATURED PROJECTS</h2>
		</div>
		<a
			href="/projects"
			class="border border-ink-800 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-steel transition-colors hover:border-volt hover:text-volt"
		>
			All projects
		</a>
	</div>

	<div class="mt-8 grid gap-4 md:grid-cols-3">
		{#each featured as p (p.name)}
			<ProjectPanel {...p} />
		{/each}
	</div>

	<div class="mt-4 grid gap-4 md:grid-cols-3">
		{#each more as p (p.name)}
			<ProjectPanel {...p} />
		{/each}
		<ProjectSlot />
	</div>
</section>

<!-- ============ OPERATOR ============ -->
<section class="mx-auto grid max-w-6xl gap-10 px-4 pt-24 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
	<div>
		<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">the operator</p>
		<h2 class="mt-2 font-display text-5xl leading-none text-bone sm:text-6xl">ABOUT ME</h2>
		<p class="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-steel">
			I'm a CS student who got hooked on shipping things people actually use. Backend is my
			home — APIs, scrapers, databases, bots — but I've gone deep enough into the front end
			(Svelte, TypeScript) to build complete products on my own. At the moment I'm running
			Deadline, a real paid SaaS, and keeping an eye on a few more ideas waiting to strike.
		</p>
		<a
			href="/about-me"
			class="mt-6 inline-block border border-ink-800 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-steel transition-colors hover:border-volt hover:text-volt"
		>
			Read the full profile
		</a>
	</div>

	<div class="panel">
		<div class="border-b border-ink-800 px-5 py-3">
			<span class="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-dim">loadout</span>
		</div>
		<div class="divide-y divide-ink-800/70">
			<div class="px-5 py-4">
				<p class="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-dim">backend</p>
				<p class="mt-1.5 text-[0.95rem] text-bone">Python · FastAPI · Redis · SQL</p>
			</div>
			<div class="px-5 py-4">
				<p class="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-dim">frontend</p>
				<p class="mt-1.5 text-[0.95rem] text-bone">TypeScript · Svelte 5 · SvelteKit</p>
			</div>
			<div class="px-5 py-4">
				<p class="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-dim">on the side</p>
				<p class="mt-1.5 text-[0.95rem] text-bone">C# · game mods · meteorology · awful puns</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ GITHUB ============ -->
<section class="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
	<div class="panel relative">
		<div class="hazard-stripe-thin h-1.5"></div>
		<div class="flex flex-col gap-8 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
			<div class="max-w-[52ch]">
				<h2 class="font-display text-4xl leading-none text-bone sm:text-5xl">BUILT IN THE OPEN</h2>
				<p class="mt-4 text-[1rem] leading-relaxed text-steel">
					Most of what I ship has its wires showing on GitHub — products, bots, experiments,
					and the occasional beautiful disaster. Star something or watch the commits roll in.
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a
					href="https://github.com/Lightningrod6"
					target="_blank"
					rel="noreferrer"
					class="bg-volt px-6 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-warn"
				>
					GitHub profile
				</a>
				<a
					href="/projects"
					class="border border-ink-800 px-6 py-3 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-bone transition-colors hover:border-volt hover:text-volt"
				>
					View projects
				</a>
			</div>
		</div>
	</div>
</section>