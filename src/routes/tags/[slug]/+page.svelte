<script lang="ts">
	import type { PageData } from './$types';
	import TagDetail from '$lib/components/tags/tag-detail.svelte';

	export let data: PageData;
	const { slug, postByTag } = data;
</script>

<div class="mx-auto flex max-w-3xl flex-col gap-4">
	<h2 class="text-2xl">#{data.slug}</h2>
	{#if postByTag[slug]}
		<ul class="flex flex-col gap-8">
			{#each postByTag[slug] as item}
				<li>
					<TagDetail data={item} />
				</li>
			{/each}
		</ul>
	{:else}
		No Entries for {slug} found :(
	{/if}
</div>
