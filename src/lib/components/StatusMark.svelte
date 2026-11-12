<script lang="ts">
	import { statusLabel, type ProjectStatus } from '$lib/content';

	interface Props {
		status: ProjectStatus;
		class?: string;
	}

	let { status, class: klass = '' }: Props = $props();
</script>

<span class="inline-flex items-center gap-2 {klass}">
	<span class="dot dot-{status}" aria-hidden="true"></span>
	<span class="label muted">{statusLabel[status]}</span>
</span>
