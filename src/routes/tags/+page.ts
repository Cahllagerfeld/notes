import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const metadata = Object.values(import.meta.glob('/obsidian/**/*.md', { eager: true })).map(
		(loader) => {
			return loader.metadata;
		}
	);

	const postByTag = {};

	metadata.map((data) => {
		const { tags } = data;

		if (tags) {
			tags.forEach((tag: string) => {
				if (!postByTag[tag]) {
					postByTag[tag] = [];
				}
				postByTag[tag].push(data);
			});
		}
	});

	const tags = Object.keys(postByTag).sort();

	return {
		tags,
		postByTag
	};
};
