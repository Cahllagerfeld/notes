<script lang="ts">
	import showMobileMenuStore from '$lib/stores/mobile-menu';

	function handleToggle() {
		$showMobileMenuStore = !$showMobileMenuStore;
	}
</script>

<button on:click={handleToggle} class="md:hidden">
	<img src="/svg/navigation/hamburger.svg" alt="toggle mobile menu" width="24" height="24" />
</button>
