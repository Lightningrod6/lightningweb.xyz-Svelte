<script lang="ts">
	import DataPlate from '$lib/components/DataPlate.svelte';

	const milestones = [
		{
			year: '2019',
			title: 'First steps',
			body: "There was a cool social app called Discord. I wanted to make a bot for it and it all started on a small prepaid phone using an app that had python"
		},
		{
			year: '2022',
			title: 'ADHDmaxxing',
			body: 'While I was attending GPTC, I was more into learning about programming instead of paying attention in class. I learned a lot at a cost.'
		}
		{
			year: '2023',
			title: 'Portfolio without Projects',
			body: 'On my summer vacation, I started to learn more and more about programming and eventually was introduced to HTML, CSS and Javascript. This site was originally built on pure HTML and CSS.'
		},
		{
			year: '2024',
			title: 'A real web app',
			body: 'After discovering how webapps worked, I decided to build my own and shape it around lightningweb. I started out with Flask and started to learn more about backend development. I then moved on to FastAPI and Sveltekit came along to help me build a better frontend'
		},
		{
			year: '2025',
			title: 'Wartime',
			body: 'With the world on fire, I got distracted and more interested into geopolitics. Thats when I was inspired to build Conflicts Tracker. It taught me about webscraping and how to create background tasks. This also lead me into using Redis and Postgres.'
		},
		{
			year: '2026',
			title: 'First paid product',
			body: 'An exciting year of AI, releasing my first SaaS product, Deadline. With enough credits, anything is possible'
		}
	];

	const offClock = [
		{
			name: 'Meteorology',
			body: 'Weather research and storm watching. The name "Lightning" wasn\'t a marketing decision - it\'s a personality trait.'
		},
		{
			name: "Situation Monitoring",
			body: "Keeping track of global conflicts, wars and crises"
		},
		{
			name: 'Game modding',
			body: 'Modding games that use Unity like Rust and BoneLab'
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
				I'm Liam - 21, a computer science sophomore at Cameron University in Lawton, Oklahoma.
				I'm a backend developer using Python, FastAPI, Redis, and SQL. I prefer to use Sveltekit along side
				TypeScript for my frontend (with some amazing help from AI). I have a strong passion for web development,
				Geopolitics, and meteorology. My mind is always floating with ideas and I am always
				looking for new ways to improve my skills. I am self-taught and mainly
				learned from YouTube videos about discord bots.
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
					<span class="text-steel"> — TypeScript, Svelte 5, SvelteKit, Tailwind, CSS.</span>
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