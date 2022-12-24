<script lang="ts">
	export let type: 'button' | 'anchor' = 'button';

	const classMap = {
		button: '',
		anchor: 'block'
	};
</script>

<div class="group relative inline-block">
	<div
		class="absolute -inset-0.5 rounded-lg bg-skin-accent opacity-75 blur transition-all duration-200 group-hover:opacity-100"
	/>
	<svelte:element
		this={type == 'anchor' ? 'a' : 'button'}
		class="relative rounded-lg bg-skin-background {classMap[type]}"
		{...$$restProps}
	>
		<slot />
	</svelte:element>
</div>
