<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import MobileMenuToggle from '$lib/components/layout/main-nav/mobile-nav/toggle.svelte';
	import { page } from '$app/stores';
	// import Search from '../search.svelte';
</script>

<div>
	<ul class="hidden items-center justify-between gap-6 md:flex">
		<!-- <li><Search /></li> -->
		{#each navbarItems as item}
			<li class="inline">
				<a
					class="relative py-1 text-skin-text-highlight no-underline transition-all duration-200 ease-in-out hover:text-skin-accent"
					href={item.href}
					><i class="mr-1 {item.iconClasses}" />{@html item.title}
					{#if $page.url.pathname.includes(item.href)}
						<span
							class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-skin-background via-skin-accent to-skin-background"
						/>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
	<MobileMenuToggle />
</div>
