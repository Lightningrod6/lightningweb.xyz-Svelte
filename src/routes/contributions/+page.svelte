<script lang="ts">
	import ProjectPanel from '$lib/components/ProjectPanel.svelte';
</script>

<svelte:head>
	<title>Contributions — Lightning Web</title>
</svelte:head>

<section class="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
	<p class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim">
		<span class="text-volt">//</span> not everything ships as code
	</p>
	<h1 class="mt-2 font-display text-[clamp(2.5rem,9vw,6rem)] leading-none text-bone">CONTRIBUTIONS</h1>
	<p class="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-steel">
		Cameos and helping hands - things I've added to other people's worlds when the coding itch
		wasn't the one scratching.
	</p>
</section>

<section class="mx-auto grid max-w-6xl gap-4 px-4 pt-10 sm:px-6 md:grid-cols-2">
	<ProjectPanel
		name="Audible Lore Mod"
		blurb="Voice actor for the Blade & Sorcery mod that brings the game's lore to life. I played General Geratan — five recorded lines, full commitment, zero hindsight regrets."
		tags={['voice acting', 'blade & sorcery', 'by hujohner']}
		href="https://www.nexusmods.com/bladeandsorcery/mods/11048"
		status="other"
		cta="hear the lines"
	/>
</section>