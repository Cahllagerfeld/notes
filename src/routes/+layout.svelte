<script lang="ts">
	import Header from '../lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import '../app.css';
	import { key } from '$lib/contents/search';
	import { setContext } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	setContext(key, data.markdown);
</script>

<div class="flex min-h-screen  flex-col md:mx-0">
	<Header />
	<main class="mx-auto w-full px-4 pb-12 md:container md:px-0">
		<slot />
	</main>
	<Footer />
</div>
