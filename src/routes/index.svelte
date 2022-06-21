<script context="module">
	export async function load({ stuff }) {
		return {
			props: {
				graph: stuff.graph
			}
		};
	}
</script>

<script lang="ts">
	import SectionGrid from '$lib/components/index/section-grid/section-grid.svelte';
</script>

<div class="flex flex-col items-center">
	<SectionGrid />
</div>
