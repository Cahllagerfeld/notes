<script context="module">
	export const load = async ({ stuff }) => {
		const { notes } = stuff;
		return {
			props: {
				notes
			}
		};
	};
</script>

<script lang="ts">
	export let notes: { title: string; tags: string[] }[];
</script>
