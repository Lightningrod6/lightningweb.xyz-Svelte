<script lang="ts">
	import Eyebrow from './Eyebrow.svelte';

	interface Props {
		mark: string;
		eyebrow: string;
		heading: string;
		intro?: string;
	}

	let { mark, eyebrow, heading, intro = '' }: Props = $props();
</script>

<section class="wrap pt-14 sm:pt-20 lg:pt-24">
	<div class="spread">
		<div class="margin">
			<Eyebrow text={eyebrow} {mark} />
		</div>
		<div class="body">
			<h1 class="display display-l sentence">{heading}</h1>
			{#if intro}
				<p class="standfirst mt-7 sm:mt-9">{intro}</p>
			{/if}
		</div>
	</div>
</section>
