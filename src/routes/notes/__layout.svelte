<script context="module">
	export const load = async ({ url, fetch }) => {
		const encodedPath = url.pathname.replace(/\//g, '__');
		const graphData = await fetch(`/api/${encodedPath}.garden-meta.json`);
		const graph = await graphData.json();

		return {
			props: {
				backlinks: graph.backlinks
			}
		};
	};
</script>

<script lang="ts">
	import type { Backlink as BacklinkType } from '$lib/types';
	import Backlinks from '$lib/components/notes/backlinks/backlinks.svelte';

	export let backlinks: BacklinkType[];
</script>

<div class="">
	<slot />
	<hr class="mx-auto my-16 h-[2px] w-1/4 bg-lightgray" />
	<div class="flex w-1/2">
		<Backlinks {backlinks} />
	</div>
</div>
