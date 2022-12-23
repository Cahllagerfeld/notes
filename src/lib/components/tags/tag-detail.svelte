<script lang="ts">
	import type { Frontmatter } from '$lib/types';

	export let data: Frontmatter;
</script>

<a
	href="/notes/{data.href}"
	class="flex flex-col gap-2 rounded-2xl border-skin-text-highlight p-4 hover:bg-[var(--neutral-800)] dark:hover:bg-[var(--neutral-000)]"
>
	<h3 class="text-skin-text-highlight">{data.title}</h3>
	<p>{@html data.preview}</p>
	<div class="text-skin-accent">Read More</div>
</a>
