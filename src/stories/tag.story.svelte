<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	export let Hst: HstType;
	import Tag from '$lib/components/tags/tag.svelte';

	let label = 'Tag';
	let amount = 3;
</script>

<Hst.Story title="Tag">
	<Hst.Variant title="No Amount">
		<Tag tag={label} />
		<svelte:fragment slot="controls">
			<Hst.Text bind:value={label} title="Tag label" />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="With Amount">
		<Tag tag={label} {amount} />
		<svelte:fragment slot="controls">
			<Hst.Text bind:value={label} title="Tag label" />
			<Hst.Number bind:value={amount} title="Amount of items" />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
