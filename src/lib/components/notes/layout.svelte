<script>
	import Tag from './tag.svelte';
	import { convertToDate } from '$lib/util/helpers';
	export let tags;
	export let title;
	export let created;
</script>

<div class="prose mx-auto">
	<h1>{title}</h1>
	<div class="text-right">created at: {convertToDate(created).toLocaleDateString('en-US')}</div>
	<div class="flex flex-wrap gap-2">
		{#each tags as tag}
			<Tag label={tag} />
		{/each}
	</div>
	<slot />
</div>
