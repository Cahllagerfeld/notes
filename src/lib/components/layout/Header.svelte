<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import { page } from '$app/stores';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
	class:scrolled-out={scroll > 0}
	class="sticky top-0 mx-auto w-full border-b border-solid border-transparent"
>
	<div class="mx-auto flex h-16 items-center justify-between lg:w-11/12">
		<a class="text-4xl" href="/">Julian's Page 🌴</a>
		<ul class="space-x-4">
			{#each navbarItems as item}
				<li class:active={$page.url.pathname.includes(item.href)} class="inline">
					<a href={item.href}>{@html item.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="postcss">
	.active {
		@apply font-semibold text-darkred;
	}

	.scrolled-out {
		@apply border-gray-400;
		background: hsl(0 5% 96% / 85%);
		backdrop-filter: saturate(0.5) blur(5px);
	}
</style>
