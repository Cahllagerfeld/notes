<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import TagList from '$lib/components/tags/tag-list.svelte';
	import type { TagItem } from '$lib/types';
	export let items: TagItem[];
</script>

<h1 class="text-3xl">Tags</h1>
<TagList {items} />
