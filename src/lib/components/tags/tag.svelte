<script lang="ts">
	export let tag: string;
	export let amount = 0;
</script>

<a
	class="inline-flex gap-2 overflow-hidden rounded-lg border border-skin-off-contrast px-2 no-underline dark:border-zinc-600"
	href={`/tags/${tag}`}
>
	<div>
		<span class="text-skin-off-contrast dark:text-zinc-600">#</span>
		<span class="text-skin-text">{tag}</span>
	</div>
	{#if amount != 0}
		<span class="-mr-2 bg-skin-accent px-2 text-white">{amount}</span>
	{/if}
</a>
