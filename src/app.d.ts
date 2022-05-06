/// <reference types="@sveltejs/kit" />

import type { Edge, Node } from '$lib/contents/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	interface Stuff {
		graph: { nodes: Node[]; edges: Edge[] };
	}
}
