<script lang="ts">
	import SearchItemResult from '$lib/components/search/search-result-item.svelte';
	let searchTerm = '';
	let active = false;
	let data: any[] = [];

	const handleInput = async () => {
		const params = new URLSearchParams({
			q: searchTerm
		});
		const url = `/api/search?${params.toString()}`;
		const res = await fetch(url);
		if (res.ok) {
			const resData = await res.json();
			data = resData.result;
		}
	};
</script>

<div class="flex">
	{#if active}
		<input
			on:input={handleInput}
			bind:value={searchTerm}
			placeholder="Search"
			class="block rounded-xl border border-lightgray px-2 py-1 transition-all duration-200"
			type="search"
		/>
	{/if}
	<button on:click={() => (active = !active)}>
		<img width="24" height="24" src="/svg/navigation/search.svg" alt="search" /></button
	>
	{#if data.length > 0}
		<div class="absolute top-full rounded-lg border border-gray-400 bg-[#f9f9f9] p-4 shadow-lg">
			{#each data as item}
				<SearchItemResult item={item.item} />
			{/each}
		</div>
	{/if}
</div>
