<script lang="ts">
	import Tag from '$lib/components/tags/tag.svelte';
	import { convertToDate } from '$lib/util/helpers';
	export let tags: string[];
	export let title: string;
	export let created: string;
</script>

<div class="prose mx-auto dark:prose-dark">
	<h1 class="text-skin-accent">{title}</h1>
	<div class="text-right">created at: {convertToDate(created).toLocaleDateString('en-US')}</div>
	<div class="flex flex-wrap gap-2">
		{#each tags as tag}
			<Tag {tag} />
		{/each}
	</div>
	<slot />
</div>
