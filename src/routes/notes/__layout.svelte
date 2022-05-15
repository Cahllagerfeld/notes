<script context="module">
	export const load = async ({ url, fetch }) => {
		const encodedPath = url.pathname.replace(/\//g, '__');
		const graphData = await fetch(`/api/${encodedPath}.garden-meta.json`);
		const graph = await graphData.json();

		return {
			props: {
				backlinks: graph.backlinks,
				graph: { nodes: graph.nodes, edges: graph.edges }
			}
		};
	};
</script>

<script lang="ts">
	import type { Backlink as BacklinkType, Edge, Node } from '$lib/types';
	import Backlinks from '$lib/components/notes/backlinks/backlinks.svelte';
	import Graph from '$lib/components/Graph.svelte';

	export let backlinks: BacklinkType[];
	export let graph: { edges: Edge[]; nodes: Node[] };
</script>

<div class="">
	<slot />
	<hr class="mx-auto my-16 h-[2px] w-1/4 bg-lightgray" />
	<div class="flex gap-4">
		<div class="flex w-1/2">
			<Backlinks {backlinks} />
		</div>
		<div class="w-1/2 ">
			<h2>Graph</h2>

			{#key graph}
				<Graph height={400} class="rounded-lg border border-gray-400" {graph} />
			{/key}
		</div>
	</div>
</div>
