<script lang="ts">
	import type { SearchItem } from '$lib/types';

	export let item: SearchItem;

	console.log(item);
</script>

<div class="">
	<a sveltekit:prefetch href={item.href}>{item.data.fm.title}</a>
</div>
