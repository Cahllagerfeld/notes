<script lang="ts">
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark' | 'system';

	onMount(() => {
		let storedTheme = localStorage.getItem('theme');
		if (storedTheme === null || storedTheme === 'system') {
			theme = 'system';
		} else if (storedTheme === 'dark') {
			theme = 'dark';
		} else {
			theme = 'light';
		}
	});

	const setLight = () => {
		document.body.classList.replace('dark', 'light');
		localStorage.setItem('theme', 'light');
		theme = 'light';
	};
	const setDark = () => {
		document.body.classList.replace('light', 'dark');
		localStorage.setItem('theme', 'dark');
		theme = 'dark';
	};
	const setSystem = () => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.replace('light', 'dark');
		} else {
			document.body.classList.replace('dark', 'light');
		}
		localStorage.setItem('theme', 'system');
		theme = 'system';
	};
</script>

<div class="flex divide-x divide-skin-off-contrast">
	<button on:click={setSystem}
		><i
			class:active={theme === 'system'}
			class="fa-solid fa-gear p-2 text-skin-off dark:text-skin-text-highlight"
		/></button
	>
	<button on:click={setLight}
		><i
			class:active={theme === 'light'}
			class="fa-solid fa-sun p-2 text-skin-off dark:text-skin-text-highlight"
		/></button
	>
	<button on:click={setDark}
		><i
			class:active={theme === 'dark'}
			class="fa-solid fa-moon p-2 text-skin-off dark:text-skin-text-highlight"
		/></button
	>
</div>

<style lang="postcss">
	.active {
		@apply text-skin-accent;
	}
</style>
