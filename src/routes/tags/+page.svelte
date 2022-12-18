<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.tags as tag}
		<li>{tag}</li>
	{/each}
</ul>
