<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import { page } from '$app/stores';
	import MobileMenuToggle from '$lib/components/layout/main-nav/mobile-nav/toggle.svelte';
</script>

<div>
	<ul class="hidden space-x-4 md:block">
		{#each navbarItems as item}
			<li class:active={$page.url.pathname.includes(item.href)} class="inline">
				<a
					sveltekit:prefetch
					class="underline-left relative transition-all duration-200 ease-in-out hover:text-darkgray"
					href={item.href}>{@html item.title}</a
				>
			</li>
		{/each}
	</ul>
	<MobileMenuToggle />
</div>

<style lang="postcss">
	.underline-left:before {
		content: '';
		transition: all 0.2s ease-in-out;
		@apply invisible absolute bottom-[1px] left-0 h-[2px] w-0
			bg-darkred;
	}
	.underline-left:hover:before {
		@apply visible w-full;
	}
	.active {
		@apply font-semibold text-darkred;
	}
</style>
