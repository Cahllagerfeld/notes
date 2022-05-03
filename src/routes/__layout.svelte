<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/notes.json`);
		const posts = await res.json();
		console.log(posts);
		return {
			stuff: {
				posts
			}
		};
	}
</script>

<script>
	import '../app.css';
</script>

<slot />
