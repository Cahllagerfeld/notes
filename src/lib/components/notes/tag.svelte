<script lang="ts">
	export let label: string;
</script>

<div class="inline-block rounded-lg border border-lightgray px-2">
	<a class="no-underline" href={`/notes/tags/${label}`}
		><span class="text-lightgray">#</span> <span class="text-darkgray">{label}</span></a
	>
</div>
