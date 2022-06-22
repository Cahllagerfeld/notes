<script lang="ts">
	import { key } from '$lib/contents/search';
	import { getContext } from 'svelte';
	import Fuse from 'fuse.js';

	const markdown = getContext<any[]>(key);
	const fuse = new Fuse(markdown, {
		includeScore: true,
		threshold: 0.4,
		includeMatches: true,
		keys: [
			{
				name: 'title',
				weight: 0.7
			},
			{
				name: 'tags',
				weight: 0.3
			}
		]
	});

	$: searchResults = fuse.search('Gitpod');
</script>

{searchResults.length}
