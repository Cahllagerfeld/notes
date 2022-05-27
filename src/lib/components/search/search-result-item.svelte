<script lang="ts">
	import type { SearchItem } from '$lib/types';

	export let item: SearchItem;
</script>

{#if item.data}
	<div>
		<a sveltekit:prefetch href={item.href}>{item.data.fm.title}</a>
	</div>
{/if}
