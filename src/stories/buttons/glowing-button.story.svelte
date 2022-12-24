<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	export let Hst: HstType;
	import GlowingButton from '$lib/components/buttons/glowing-button.svelte';
</script>

<div class="m-8">
	<Hst.Story title="Glowing Button">
		<GlowingButton>
			<div class="py-2 px-4">Glowing Button</div>
		</GlowingButton>
	</Hst.Story>
</div>
