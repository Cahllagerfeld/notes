<script lang="ts">
	let searchTerm = '';
	let active = false;
</script>

<div class="flex">
	{#if active}
		<input
			bind:value={searchTerm}
			placeholder="Search"
			class="block rounded-xl border border-lightgray px-2 py-1 transition-all duration-200"
			type="search"
		/>
	{/if}
	<button on:click={() => (active = !active)}>
		<img width="24" height="24" src="/svg/navigation/search.svg" alt="search" /></button
	>
</div>
