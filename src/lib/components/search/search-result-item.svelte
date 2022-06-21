<script lang="ts">
	import type { SearchItem } from '$lib/types';

	export let item: SearchItem;
</script>

{#if item.frontmatter}
	<div>
		<a sveltekit:prefetch href={item.href}>{item.frontmatter.title}</a>
	</div>
{/if}
