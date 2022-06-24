<script context="module">
	export const load = async () => {
		return {
			props: {
				markdown: getMarkdown().map((file) => {
					return { metadata: file.metadata, href: file.href };
				})
			}
		};
	};
</script>

<script lang="ts">
	import Header from '../lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import '../app.css';
	import { getMarkdown } from '../lib/util/get-markdown';
	import { key } from '$lib/contents/search';
	import { setContext } from 'svelte';

	export let markdown: any[];

	setContext(key, markdown);
</script>

<div class="flex min-h-screen flex-col md:mx-0">
	<Header />
	<main class="mx-auto w-full px-4 md:container md:px-0">
		<slot />
	</main>
	<Footer />
</div>
