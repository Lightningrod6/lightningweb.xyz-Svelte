<script lang="ts">
	import { statusLabel, type ProjectStatus } from '$lib/content';

	interface Props {
		status: ProjectStatus;
		class?: string;
	}

	let { status, class: klass = '' }: Props = $props();
</script>

<span class="status label {klass}" data-status={status}>
	<span class="status-sq" aria-hidden="true"></span>{statusLabel[status]}
</span>
