<script>
	import Tag from './tag.svelte';
	export let tags;
	export let title;
</script>

<div class="prose mx-auto">
	<h1>{title}</h1>
	<div class="flex gap-2">
		{#each tags as tag}
			<Tag label={tag} />
		{/each}
	</div>
	<slot />
</div>
