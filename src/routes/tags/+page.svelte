<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Tags</h1>
<ul>
	{#each data.tags as tag}
		<li>{tag} ({data.postByTag[tag].length})</li>
	{/each}
</ul>
