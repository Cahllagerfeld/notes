<script lang="ts">
	import Header from '../lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<div class="mx-4 flex min-h-screen flex-col md:mx-0">
	<Header />
	<main class="mx-auto w-full px-0 lg:container">
		<slot />
	</main>
</div>
