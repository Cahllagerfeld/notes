import { visit } from 'unist-util-visit';

export default () => (tree) => {
	visit(tree, (node) => {
		if (node.tagName === 'a') {
			if (node.properties.href.startsWith('/')) {
				node.properties = { ...node.properties, 'sveltekit:prefetch': true };
			}
		}
	});
	return tree;
};
