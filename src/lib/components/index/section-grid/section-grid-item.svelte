<script lang="ts">
	import type { SectionItemConfig } from '$lib/types';

	export let itemConfig: SectionItemConfig;
</script>

<div
	class="w-full max-w-md rounded-2xl border-2 border-skin-off-background bg-skin-off-background p-4 shadow-xl transition-all delay-[50] duration-200 hover:border-skin-accent"
>
	<a class="flex flex-col items-center justify-center" href={itemConfig.href}>
		<div class="mb-2">{@html itemConfig.title}</div>
		<img width="100" height="100" src={itemConfig.icon} alt={itemConfig.alt} />
	</a>
</div>
