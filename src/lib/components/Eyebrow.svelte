<script lang="ts">
	interface Props {
		text: string;
		/** the // mark, rendered as a highlighter tab */
		mark?: string;
		class?: string;
	}

	let { text, mark = '', class: klass = '' }: Props = $props();
</script>

<p class="label muted {klass}">
	{#if mark}<span class="mark">{mark}</span>{/if}<span>{text}</span>
</p>
