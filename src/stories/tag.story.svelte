<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	export let Hst: HstType;
	import Tag from '$lib/components/notes/tag.svelte';

	let label = 'Tag';
</script>

<Hst.Story title="Tag">
	<Tag {label} />
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={label} title="Tag label" />
	</svelte:fragment>
</Hst.Story>
