<script lang="ts">
	import type { TagItem } from '$lib/types';

	export let tag: TagItem;
</script>

<a
	sveltekit:prefetch
	class="rounded-xl border border-gray-400 text-center hover:bg-gray-200"
	href={tag.href}
>
	<div class=" w-full px-4 py-12  font-semibold">
		{tag.title}
	</div>
</a>
