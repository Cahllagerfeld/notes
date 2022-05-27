<script lang="ts">
	export let label: string;
</script>

<div class="inline-block rounded-lg border border-gray-400 px-2">
	<a class="no-underline" href={`/notes/tags/${label}`}
		><span class="text-gray-400">#</span> <span class="text-darkgray">{label}</span></a
	>
</div>
