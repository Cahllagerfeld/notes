<script context="module">
	export async function load({ fetch }) {
		const graphData = await fetch('/api/graph.json');
		const graph = await graphData.json();
		return {
			stuff: {
				graph
			},
			props: {
				graph
			}
		};
	}
</script>

<script lang="ts">
	import Graph from '$lib/components/Graph.svelte';
	export let graph;
	import '../app.css';
</script>

<div class="mx-auto md:container">
	<slot />
</div>
