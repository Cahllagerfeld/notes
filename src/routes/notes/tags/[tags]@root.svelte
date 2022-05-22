<script lang="ts">
	import TagList from '$lib/components/tags/tag-list.svelte';
	import type { TagItem } from '$lib/types';
	export let items: TagItem[];
</script>

<h1 class="text-3xl">Tags</h1>
<TagList {items} />
