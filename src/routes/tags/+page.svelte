<script lang="ts">
	import OverviewTag from '$lib/components/tags/tag.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto max-w-3xl">
	<h1 class="mb-4 text-4xl">Tags</h1>
	<ul class="flex flex-wrap justify-start gap-4">
		{#each data.tags as tag}
			<li>
				<OverviewTag {tag} amount={data.postByTag[tag].length} />
			</li>
		{/each}
	</ul>
</div>
