<script lang="ts">
	import type { Backlink } from '$lib/types';

	export let backlink: Backlink;
</script>

<a sveltekit:prefetch class="font-semibold" href={backlink.href}>{backlink.title}</a>
