<script lang="ts">
	import Bolt from './Bolt.svelte';

	const items = [
		'Python',
		'FastAPI',
		'TypeScript',
		'Svelte 5',
		'Redis',
		'SQL',
		'C#',
		'REST APIs',
		'Discord bots',
		'Game modding'
	];

	const loop = [...items, ...items];
</script>

<div class="overflow-hidden border-y border-ink-800 bg-ink-950 py-3" aria-hidden="true">
	<div class="animate-ticker flex w-max items-center gap-8 pr-8 whitespace-nowrap">
		{#each loop as item, i (i)}
			<span class="flex items-center gap-8">
				<span class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-dim">{item}</span>
				<Bolt class="h-3 w-3 text-volt/70" filled />
			</span>
		{/each}
	</div>
</div>