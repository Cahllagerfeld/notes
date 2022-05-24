<script lang="ts">
	let searchTerm = '';
	let active = false;
	let data: unknown = [];
	$: console.log(data);

	const handleInput = async () => {
		const params = new URLSearchParams({
			q: searchTerm
		});
		const url = `/api/search?${params.toString()}`;
		const res = await fetch(url);
		if (res.ok) {
			const resData = await res.json();
			data = resData;
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
</div>
