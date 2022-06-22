<script lang="ts">
	import { key } from '$lib/contents/search';
	import { getContext } from 'svelte';
	import Fuse from 'fuse.js';
	import { navigating } from '$app/stores';

	let query = '';

	const markdown = getContext<any[]>(key);

	const fuse = new Fuse(markdown, {
		includeScore: true,
		threshold: 0.4,
		includeMatches: true,
		keys: [
			{
				name: 'metadata.title',
				weight: 0.5
			},
			{
				name: 'metadata.tags',
				weight: 0.3
			},
			{
				name: 'metadata.preview',
				weight: 0.2
			}
		]
	});

	$: searchResults = fuse.search(query);

	$: {
		if ($navigating) {
			query = '';
		}
	}
</script>

<div class="relative inline-block">
	<input
		placeholder="Search"
		class="rounded-lg border border-lightgray px-4 py-2"
		bind:value={query}
		type="text"
	/>

	{#if searchResults.length > 0}
		<ul
			class="b-1 absolute m-0 max-h-80 w-full overflow-y-auto rounded-md border-x border-t border-lightgray bg-white shadow-sm"
		>
			{#each searchResults as searchResult}
				<li class="inline-block w-full border-b border-lightgray p-2 hover:bg-lightgray">
					<a class="block" sveltekit:prefetch href={searchResult.item.href}
						>{searchResult.item.metadata.title}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
