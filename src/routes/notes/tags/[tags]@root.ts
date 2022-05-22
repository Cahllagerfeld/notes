import { getMarkdownFiles, getFrontmatter } from '$lib/util/markdown';
import { toSlug } from '$lib/util/wiki-link';
import type { RequestHandler } from '@sveltejs/kit';
import path from 'path';

export const get: RequestHandler = async ({ params }) => {
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
			return { href: toSlug(item, dir), title: getFrontmatter(item).data.title };
		});
	return {
		status: 200,
		body: {
			items: filteredItems
		}
	};
};
