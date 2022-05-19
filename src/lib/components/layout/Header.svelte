<script lang="ts">
	import Navigation from '$lib/components/layout/main-nav/index.svelte';
	import MobileMenu from '$lib/components/layout/main-nav/mobile-nav/mobile-nav.svelte';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
	class:scrolled-out={scroll > 0}
	class="sticky top-0  mx-auto w-full border-b border-solid border-transparent"
>
	<div class="px-4">
		<div class="mx-auto flex h-16 items-center justify-between lg:container">
			<a class="text-4xl" href="/">Julian's Page 🌴</a>
			<Navigation />
		</div>
	</div>
	<MobileMenu />
</nav>

<style lang="postcss">
	.scrolled-out {
		@apply border-gray-400;
		background: hsl(0 5% 96% / 85%);
		backdrop-filter: saturate(0.5) blur(5px);
	}
</style>
