<script context="module">
	export async function load({ fetch }) {
		const graphData = await fetch('/api/graph.json');
		const graph = await graphData.json();
		return {
			stuff: {
				graph
			}
		};
	}
</script>

<script lang="ts">
	import Header from '../lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<div class="mx-auto md:container">
	<Header />
	<slot />
</div>
