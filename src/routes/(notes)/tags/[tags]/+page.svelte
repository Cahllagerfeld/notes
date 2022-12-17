<script lang="ts">
	// import TagList from '$lib/components/tags/tag-list.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	console.log(data);
</script>

<h1 class="text-3xl">Tags</h1>
<!-- <TagList items={data.items} /> -->
