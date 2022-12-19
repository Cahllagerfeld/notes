<script lang="ts">
	export let label: string;
</script>

<a
	class="inline-block rounded-lg border border-skin-off-contrast px-2 no-underline"
	href={`/tags/${label}`}
>
	<span class="text-skin-off-contrast">#</span>
	<span class="text-skin-contrast">{label}</span>
</a>
