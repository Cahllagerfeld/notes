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
			<a class="text-4xl no-underline dark:text-skin-text-highlight" href="/">Julian's Page 🌴</a>
			<Navigation />
		</div>
	</div>
	<MobileMenu />
	<a class="hidden lg:block" href="https://github.com/Cahllagerfeld/notes">
		<img src="/svg/github-corner.svg" class="absolute top-0 right-0 border-0" alt="github corner" />
	</a>
</nav>

<style lang="postcss">
	.scrolled-out {
		@apply border-skin-off-contrast;
		background: var(--color-background);
		backdrop-filter: saturate(0.5) blur(5px);
	}
</style>
