<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import MobileMenuToggle from '$lib/components/layout/main-nav/mobile-nav/toggle.svelte';
	import Search from '../search.svelte';
</script>

<div>
	<ul class="hidden items-center justify-between space-x-4 md:flex">
		<li><Search /></li>
		{#each navbarItems as item}
			<li class="inline">
				<a
					class="relative text-skin-text-highlight no-underline transition-all duration-200 ease-in-out hover:text-skin-accent"
					href={item.href}><i class="mr-1 {item.iconClasses}" />{@html item.title}</a
				>
			</li>
		{/each}
	</ul>
	<MobileMenuToggle />
</div>
