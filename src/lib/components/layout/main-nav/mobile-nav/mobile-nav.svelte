<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import showMobileMenu from '$lib/stores/mobile-menu';
	import { showHideOverflowY } from '$lib/util/helpers';
	import { navigating } from '$app/stores';

	$: if ($navigating) {
		$showMobileMenu = false;
		showHideOverflowY(false);
	}
</script>

{#if $showMobileMenu}
	<div
		class="absolute z-10 flex max-h-screen w-screen flex-col items-center overflow-y-auto bg-[#f9f9f9] shadow-md "
	>
		<ul>
			{#each navbarItems as item}
				<li class="py-4">
					<a href={item.href}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
