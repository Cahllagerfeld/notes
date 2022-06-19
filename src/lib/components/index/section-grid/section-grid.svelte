<script lang="ts">
	import type { SectionItemConfig } from '$lib/types';

	import SectionGridItem from './section-grid-item.svelte';

	const item: SectionItemConfig = {
		alt: 'Test',
		href: '/notes',
		title: 'Digital Garden',
		icon: '/images/emojis/potted-plant.png'
	};
</script>

<div class="grid max-w-lg grid-cols-1 gap-4 md:grid-cols-1">
	<SectionGridItem itemConfig={item} />
</div>
