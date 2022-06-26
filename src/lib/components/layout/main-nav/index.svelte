<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import { page } from '$app/stores';
	import MobileMenuToggle from '$lib/components/layout/main-nav/mobile-nav/toggle.svelte';
	import Search from '../search.svelte';
</script>

<div>
	<ul class="hidden items-center justify-between space-x-4 md:flex">
		<li><Search /></li>
		{#each navbarItems as item}
			<li class="inline">
				<a
					sveltekit:prefetch
					class="underline-left {$page.url.pathname.includes(item.href)
						? 'font-semibold text-skin-accent dark:text-skin-accent'
						: ' dark:text-skin-text-highlight'} relative transition-all duration-200 ease-in-out hover:text-skin-contrast"
					href={item.href}><i class="mr-1 {item.iconClasses}" />{@html item.title}</a
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
			bg-skin-accent;
	}
	.underline-left:hover:before {
		@apply visible w-full;
	}
</style>
