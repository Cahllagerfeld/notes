<script lang="ts">
	import Header from '../lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col md:mx-0">
	<Header />
	<main class="mx-auto w-full px-4 md:container md:px-0">
		<slot />
	</main>
</div>
