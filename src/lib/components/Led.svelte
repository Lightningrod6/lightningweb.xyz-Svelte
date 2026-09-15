<script lang="ts">
	interface Props {
		color?: 'live' | 'warn' | 'volt' | 'dim';
		class?: string;
	}

	let { color = 'volt', class: klass = '' }: Props = $props();

	const colors = {
		live: 'bg-live',
		warn: 'bg-warn',
		volt: 'bg-volt',
		dim: 'bg-dim'
	} as const;
</script>

<span class="inline-block h-2 w-2 rounded-full animate-led {colors[color]} {klass}" aria-hidden="true"></span>