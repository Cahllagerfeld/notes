<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	export let Hst: HstType;
	import Tag from '$lib/components/notes/tag.svelte';
</script>

<Hst.Story title="Tag">
	<Tag label="Test" />
</Hst.Story>
