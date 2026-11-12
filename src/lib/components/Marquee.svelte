<script lang="ts">
	let { items }: { items: string[] } = $props();
</script>

<div class="marquee block-red border-y-[3px] border-[var(--navy)] py-3.5">
	<div class="marquee-track text-[1.125rem] font-black tracking-[0.02em] uppercase [font-stretch:120%]">
		<ul>
			{#each items as t (t)}<li>{t}</li>{/each}
		</ul>
		<ul aria-hidden="true">
			{#each items as t (t)}<li>{t}</li>{/each}
		</ul>
	</div>
</div>
