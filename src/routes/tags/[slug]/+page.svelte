<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { slug, postByTag } = data;
</script>

{#if postByTag[slug]}
	<ul>
		{#each postByTag[slug] as item}
			<li>
				<a href="/notes/{item.href}">{item.title}</a>
			</li>
		{/each}
	</ul>
{:else}
	No Entries for {slug} found :(
{/if}
