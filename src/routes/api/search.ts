import type { RequestHandler } from '@sveltejs/kit';
import Fuse from 'fuse.js';
import mdsvexConfig from '../../../mdsvex.config.js';
import { items } from '$lib/cache/markdown';
import unset from 'lodash/unset.js';
import { toSlug } from '../../lib/util/wiki-link.js';

delete mdsvexConfig.layout;

export const get: RequestHandler = async ({ url }) => {
	const param = url.searchParams.get('q') || '';

	const fuse = new Fuse(items, {
		includeScore: true,
		keys: [
			{ name: 'content', weight: 0.2 },
			{ name: 'frontmatter.title', weight: 0.5 },
			{ name: 'frontmatter.tags', weight: 0.3 }
		]
	});

	const fuseResult = fuse.search(param).map((item) => {
		const shortend = toSlug(item.item.href, `${process.cwd()}/src/routes`);
		item.item.href = shortend;
		unset(item, 'item.content');
		return item;
	});

	return {
		status: 200,
		body: {
			result: fuseResult
		}
	};
};
