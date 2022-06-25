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
		bind:value={query}
		class="rounded-lg border border-skin-off-contrast px-4 py-2"
		name="search"
		type="search"
		placeholder="Search"
	/>
	<button class="absolute right-0 top-0 mt-3 mr-2">
		<svg
			class="h-4 w-4 fill-current text-gray-600"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			viewBox="0 0 56.966 56.966"
			style="enable-background:new 0 0 56.966 56.966;"
			xml:space="preserve"
			width="512px"
			height="512px"
		>
			<path
				d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
			/>
		</svg>
	</button>

	{#if searchResults.length > 0}
		<ul
			class="b-1 absolute z-10 mt-2 max-h-80 w-full divide-y divide-skin-off-contrast overflow-y-auto rounded-md border border-skin-off-contrast bg-white shadow-sm"
		>
			{#each searchResults as searchResult}
				<li class="inline-block w-full  p-2 hover:bg-skin-off-contrast">
					<a class="block" sveltekit:prefetch href={searchResult.item.href}
						>{searchResult.item.metadata.title}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
