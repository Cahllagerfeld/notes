import { toSlug } from './wiki-link';

export function getMarkdown() {
	const files = Object.entries(import.meta.globEager('/src/routes/**/*.md')).map(
		([path, data]) => ({
			href: toSlug(path, '/src/routes'),
			metadata: data.metadata,
			component: data.default
		})
	);

	return files;
}
