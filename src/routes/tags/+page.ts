import type { PageLoad } from './$types';
import slugify from 'slugify';

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
				const sluggedTag = slugify(tag);
				if (!postByTag[sluggedTag]) {
					postByTag[sluggedTag] = [];
				}
				postByTag[sluggedTag].push(data);
			});
		}
	});

	const tags = Object.keys(postByTag).sort();

	console.log(tags);
	return {
		tags,
		postByTag
	};
};
