export function getMarkdown() {
	const files = Object.entries(import.meta.globEager('/src/routes/**/*.md')).map(([, data]) => ({
		metadata: data.metadata,
		component: data.default
	}));

	return files;
}
