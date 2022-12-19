<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto max-w-3xl">
	<h1 class="mb-4 text-4xl">Tags</h1>
	<ul class="flex flex-wrap justify-start gap-4">
		{#each data.tags as tag}
			<li><a href="/tags/{tag}">{tag} ({data.postByTag[tag].length})</a></li>
		{/each}
	</ul>
</div>
