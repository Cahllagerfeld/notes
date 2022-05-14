<script context="module">
	export async function load({ stuff, url }) {
		return {
			props: {
				backlinks: stuff.graph.backlinks[url.pathname]
			}
		};
	}
</script>

<script lang="ts">
	import type { Backlink as BacklinkType } from '$lib/types';
	import Backlink from '$lib/components/notes/backlinks/backlinks.svelte';

	export let backlinks: BacklinkType[];
</script>

<div class="">
	<slot />
	<hr class="mx-auto my-16 h-[2px] w-1/4 bg-lightgray" />
	<div class="flex w-1/2">
		<Backlink {backlinks} />
	</div>
</div>
