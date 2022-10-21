import { getMarkdownFiles, getFrontmatter } from '$lib/util/markdown';
import { toSlug } from '$lib/util/wiki-link';
import type { RequestHandler } from './$types';
import path from 'path';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
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
	return json({
		items: filteredItems
	});
};
