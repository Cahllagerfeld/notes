<script lang="ts">
	import type { TagItem } from '$lib/types';

	export let tag: TagItem;
</script>

<a
	sveltekit:prefetch
	class="rounded-xl border border-lightgray text-center transition-all duration-200 hover:border-darkred hover:bg-offwhite"
	href={tag.href}
>
	<div class=" w-full px-4 py-12  font-semibold">
		{tag.title}
	</div>
</a>
