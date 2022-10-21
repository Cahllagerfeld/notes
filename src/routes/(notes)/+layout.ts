import type { LayoutLoad } from './$types';
export const load: LayoutLoad = async ({ url, fetch }) => {
	const encodedPath = url.pathname.replace(/\//g, '__');
	const graphData = await fetch(`/api/${encodedPath}.garden-meta.json`);
	const graph = await graphData.json();

	return {
		backlinks: graph.backlinks,
		graph: { nodes: graph.nodes, edges: graph.edges }
	};
};
