import type { PageLoad } from './$types';
import slugify from 'slugify';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;
	const metadata = Object.entries(import.meta.glob('/obsidian/**/*.md', { eager: true })).map(
		([path, loader]) => {
			return {
				...loader.metadata,
				href: path.replace(/\s/g, '-').replace('/obsidian/', '').replace('.md', '').toLowerCase()
			};
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

	return {
		slug,
		postByTag
	};
};
