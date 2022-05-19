<script lang="ts">
	import showMobileMenuStore from '$lib/stores/mobile-menu';
	import { showHideOverflowY } from '$lib/util/helpers';

	function handleToggle() {
		$showMobileMenuStore = !$showMobileMenuStore;

		if ($showMobileMenuStore) {
			showHideOverflowY(true);
		} else {
			showHideOverflowY(false);
		}
	}
</script>

<button on:click={handleToggle} class="md:hidden">
	<img src="/svg/navigation/hamburger.svg" alt="toggle mobile menu" width="24" height="24" />
</button>
