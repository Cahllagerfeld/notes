<script lang="ts">
	import type { Backlink } from '$lib/types';
	import BacklinkItem from './backlink-item.svelte';

	export let backlinks: Backlink[];
</script>

<div class="w-full">
	<h2 class="text-lg">Backlinks</h2>
	<ul class="space-y-4 rounded-lg border border-gray-400  px-4">
		{#each backlinks as link}
			<li>
				<BacklinkItem backlink={link} />
			</li>
		{/each}
	</ul>
</div>
