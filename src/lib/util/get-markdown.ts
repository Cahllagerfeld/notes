import { toSlug } from './wiki-link';

export function getMarkdown() {
	const files = Object.entries(import.meta.glob('/obsidian/**/*.md', { eager: true })).map(
		([path, data]) => ({
			href: toSlug(path, '/obsidian'),
			metadata: data.metadata,
			component: data.default
		})
	);

	return files;
}
