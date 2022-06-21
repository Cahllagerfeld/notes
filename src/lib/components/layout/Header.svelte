<script lang="ts">
	import Navigation from '$lib/components/layout/main-nav/index.svelte';
	import MobileMenu from '$lib/components/layout/main-nav/mobile-nav/mobile-nav.svelte';
	import Search from '$lib/components/search/index.svelte';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
	class:scrolled-out={scroll > 0}
	class="sticky top-0  mx-auto w-full border-b border-solid border-transparent"
>
	<div class="px-4">
		<div class="mx-auto flex h-16 items-center justify-between lg:container">
			<div class="flex items-center justify-center gap-4">
				<a class="text-4xl" href="/">Julian's Page 🌴</a>
				<Search />
			</div>
			<Navigation />
		</div>
	</div>
	<MobileMenu />
	<a class="hidden lg:block" target="_blank" href="https://github.com/Cahllagerfeld/notes">
		<img src="/svg/github-corner.svg" class="absolute top-0 right-0 border-0" alt="github corner" />
	</a>
</nav>

<style lang="postcss">
	.scrolled-out {
		@apply border-lightgray;
		background: hsl(0 5% 96% / 85%);
		backdrop-filter: saturate(0.5) blur(5px);
	}
</style>
