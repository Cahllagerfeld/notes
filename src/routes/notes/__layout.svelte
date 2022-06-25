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
	import Graph from '$lib/components/graph.svelte';

	export let backlinks: BacklinkType[];
	export let graph: { edges: Edge[]; nodes: Node[] };
	let graphWidth: number;
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/prism-one-dark.css" />
</svelte:head>

<div class="">
	<slot />
	<hr class="mx-auto my-16 h-[2px] w-1/4 bg-skin-off-contrast" />
	<div class="flex gap-4">
		<div class="flex w-1/2">
			<Backlinks {backlinks} />
		</div>
		<div class="w-1/2 ">
			<h2>Graph</h2>

			{#key [graph, graphWidth]}
				<div bind:offsetWidth={graphWidth}>
					<Graph
						height={400}
						width={graphWidth}
						class="w-full rounded-lg border border-skin-off-contrast"
						{graph}
					/>
				</div>
			{/key}
		</div>
	</div>
</div>
