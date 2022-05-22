<script context="module">
	export const layout = false;
</script>

<script lang="ts">
	export let items: { href: string; title: string }[];
</script>

<h1>{JSON.stringify(items)}</h1>
