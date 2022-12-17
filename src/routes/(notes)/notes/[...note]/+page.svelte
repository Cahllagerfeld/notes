<script lang="ts">
	import type { PageServerData } from './$types';
	import NotesLayout from '$lib/components/notes/layout.svelte';

	export let data: PageServerData;
</script>

<NotesLayout created={data.meta.created} tags={data.meta.tags} title={data.meta.title}>
	{@html data.html}
</NotesLayout>
