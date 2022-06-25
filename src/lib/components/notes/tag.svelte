<script lang="ts">
	export let label: string;
</script>

<div class="inline-block rounded-lg border border-skin-off-contrast px-2">
	<a class="no-underline" href={`/notes/tags/${label}`}
		><span class="text-skin-off-contrast">#</span>
		<span class="text-skin-contrast">{label}</span></a
	>
</div>
