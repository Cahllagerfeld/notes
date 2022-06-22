<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import showMobileMenu from '$lib/stores/mobile-menu';
	import { showHideOverflowY } from '$lib/util/helpers';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import Search from '$lib/components/layout/search.svelte';

	$: if ($navigating) {
		$showMobileMenu = false;
		showHideOverflowY(false);
	}

	onMount(() => {
		const handleTabletChange = (e: any) => {
			if (e.matches) {
				$showMobileMenu = false;
				showHideOverflowY(false);
			}
		};
		let query = window.matchMedia('(min-width: 768px)');
		query.addEventListener('change', handleTabletChange);
	});
</script>

{#if $showMobileMenu}
	<div
		class="absolute z-10 flex max-h-screen w-screen flex-col items-center bg-[#f9f9f9] shadow-md "
	>
		<ul class="w-full divide-y divide-lightgray border-t border-lightgray">
			<li class="flex items-center justify-center py-4"><Search /></li>
			{#each navbarItems as item}
				<li class="py-4 text-center">
					<a href={item.href}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
