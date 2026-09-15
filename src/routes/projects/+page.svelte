<script lang="ts">
	import ProjectPanel from '$lib/components/ProjectPanel.svelte';
	import ProjectSlot from '$lib/components/ProjectSlot.svelte';

	const projects = [
		{
			name: 'Deadline',
			blurb:
				'Set a deadline, submit, and let it watch the clock. It emails you before the due date slips past — so you can focus on everything else. My first real paid product.',
			tags: ['SaaS', 'email alerts', 'stripe', 'live'],
			href: 'https://deadline.lightningweb.xyz',
			status: 'live' as const,
			cta: 'open product'
		},
		{
			name: 'Conflicts Tracker',
			blurb:
				'Current events, wars and crises, all in one place. Getting the latest from a variety of sources and slimming out the narrative to give you the facts.',
			tags: ['fastapi', 'redis', 'scrapers', 'sveltekit', 'live'],
			href: 'https://conflicts-tracker.com',
			status: 'live' as const,
			cta: 'open product'
		},
		{
			name: 'LightningWeb API',
			blurb:
				'My first backend API, back when Deepinfra didnt have a lock.',
			tags: ['python', 'api', 'llm', 'live'],
			href: 'https://api.lightningweb.xyz',
			status: 'live' as const,
			cta: 'hit the api'
		},
		{
			name: 'Bot-Bot',
			blurb:
				'Discord moderation bot, rebuilt from the ground up. Slightly less likely to ban a friend than it used to be. Currently in active development.',
			tags: ['python', 'discord', 'moderation'],
			href: 'https://top.gg/bot/609076611609788427',
			status: 'dev' as const,
			cta: 'see the bot'
		},
		{
			name: 'Audible Lore — B&S',
			blurb:
				'Voiced General Geratan in this Blade & Sorcery mod that adds voice acting to the game\'s lore. Five lines, zero retakes, one proud voice actor.',
			tags: ['voice acting', 'blade & sorcery'],
			href: 'https://www.nexusmods.com/bladeandsorcery/mods/11048',
			status: 'other' as const,
			cta: 'hear it'
		}
	];
</script>

<svelte:head>
	<title>Projects — Lightning Web</title>
</svelte:head>

<section class="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
	<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">
		<span class="text-volt">//</span> everything with wires showing
	</p>
	<h1 class="mt-2 font-display text-[clamp(2.5rem,9vw,6rem)] leading-none text-bone">PROJECTS</h1>
	<p class="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-steel">
		Things I've built, broken, rebuilt, and shipped. Live products first, experiments after,
		one voice-acting cameo at the end just to keep you guessing.
	</p>
</section>

<section class="mx-auto grid max-w-6xl gap-4 px-4 pt-10 sm:px-6 md:grid-cols-2">
	{#each projects as p (p.name)}
		<ProjectPanel {...p} />
	{/each}
	<ProjectSlot />
</section>