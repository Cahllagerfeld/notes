<script lang="ts">
	import type { TagItem as TagItemType } from '$lib/types';
	import TagItem from './tag-item.svelte';

	export let items: TagItemType[];
</script>

{#if items.length > 0}
	<div class="mt-4 grid grid-cols-4 gap-4">
		{#each items as tagItem}
			<TagItem tag={tagItem} />
		{/each}
	</div>
{/if}
