import { getMarkdownFiles, getFrontmatter } from '$lib/util/markdown';
import { toSlug } from '$lib/util/wiki-link';
import path from 'path';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const tags = params.tags;
	const splitTags = tags.split(',');
	const dir = 'src/routes/notes';
	const items = getMarkdownFiles(path.join(dir));
	const filteredItems = items
		.filter((item) => {
			const frontmatter = getFrontmatter(item);
			const { tags } = frontmatter.data;
			return splitTags.every((tag) => {
				return tags.includes(tag);
			});
		})
		.map((item) => {
			return { href: toSlug(item, 'src/routes'), title: getFrontmatter(item).data.title };
		});
	return { items: filteredItems };
};
