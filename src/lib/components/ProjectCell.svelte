<script lang="ts">
	import type { Project } from '$lib/content';
	import StatusMark from './StatusMark.svelte';
	import Arrow from './Arrow.svelte';

	interface Props {
		project: Project;
		/** span a full row as a three-column line on desktop */
		wide?: boolean;
		class?: string;
	}

	let { project, wide = false, class: klass = '' }: Props = $props();

	const external = $derived(project.href.startsWith('http'));
</script>

<a
	href={project.href}
	{...external ? { target: '_blank', rel: 'noreferrer' } : {}}
	class="tile {wide ? 'tile--wide' : ''} {klass}"
>
	<div><StatusMark status={project.status} /></div>
	<h3 class="tile-name">{project.name}</h3>
	<p class="tile-blurb">{project.blurb}</p>
	<ul class="tile-tags">
		{#each project.tags as tag (tag)}
			<li>{tag}</li>
		{/each}
	</ul>
	<div class="tile-cta">
		<span>{project.cta}</span>
		<Arrow {external} />
	</div>
</a>
