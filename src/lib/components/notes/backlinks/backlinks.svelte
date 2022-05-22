<script lang="ts">
	import type { Backlink } from '$lib/types';
	import BacklinkItem from './backlink-item.svelte';

	export let backlinks: Backlink[];
</script>

<div class="w-full">
	<h2 class="text-lg">Backlinks</h2>
	<ul class="space-y-4 rounded-lg border border-gray-400 py-2 px-4">
		{#if backlinks?.length > 0}
			{#each backlinks as link}
				<li>
					<BacklinkItem backlink={link} />
				</li>
			{/each}
		{/if}
	</ul>
</div>
