import type { RequestHandler } from '@sveltejs/kit';
import path from 'path';
import { getMarkdownFiles } from '$lib/util/markdown';
import { compile } from 'mdsvex';
import fs from 'fs';
import mdsvexConfig from '../../../mdsvex.config.js';
import Fuse from 'fuse.js';
import { toSlug } from '../../lib/util/wiki-link.js';

export const get: RequestHandler = async ({ url }) => {
	const param = url.searchParams.get('q') || '';
	const dir = 'src/routes';
	const items = getMarkdownFiles(path.join(dir));
	const parsedItems = await Promise.all(
		items.map(async (item) => {
			const content = fs.readFileSync(item, 'utf8');
			const compiled = await compile(content, mdsvexConfig);
			compiled!.code = compiled!.code
				.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
				.replace(/<\/?[^>]+(>|$)/g, '');
			const withLink = { ...compiled, href: toSlug(item, 'src/routes') };
			return withLink;
		})
	);
	const fuse = new Fuse(parsedItems, {
		includeScore: true,
		keys: [
			{ name: 'code', weight: 0.2 },
			{ name: 'data.fm.title', weight: 0.5 },
			{ name: 'data.fm.tags', weight: 0.3 }
		]
	});

	return {
		status: 200,
		body: {
			result: fuse.search(param)
		}
	};
};
