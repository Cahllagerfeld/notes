<script lang="ts">
	import { navbarItems } from '$lib/contents/layout/header-items';
	import { page } from '$app/stores';
</script>

<header class="flex h-16 items-center justify-between border-b border-b-gray-400">
	<div class="text-4xl dark:text-[#FFFFFFDE]"><a href="/">Julian's Page 🌴</a></div>
	<ul class="space-x-4">
		{#each navbarItems as item}
			<li class:active={$page.url.pathname.includes(item.href)} class="inline">
				<a href={item.href}>{@html item.title}</a>
			</li>
		{/each}
	</ul>
</header>

<style lang="postcss">
	.active {
		@apply font-semibold text-darkred;
	}
</style>
