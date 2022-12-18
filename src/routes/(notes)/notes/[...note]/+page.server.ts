import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';
import wikilink from 'remark-wiki-link';
import preview, { htmlFormatter, textFormatter } from 'remark-preview';
import path from 'path';
import { parseFileNameFromPath, normalizeFileName, toSlug } from '$lib/util/wiki-link.js';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const allFiles = Object.keys(import.meta.glob('/obsidian/**/*.md', { eager: true })).filter(
		(item) => !item.includes('template')
	);
	const url = params.note.toLowerCase().replace(' ', '__');
	const data = await fetch(`/api/notes/${url}`);
	if (!data.ok) {
		throw error(404, { message: 'Note not found' });
	}
	const note = await data.json();

	const compiled = (await compile(note.content, {
		extensions: ['.svelte.md', '.md', '.svx'],
		smartypants: {
			dashes: 'oldschool'
		},

		remarkPlugins: [
			preview(textFormatter({ length: 150, maxBlocks: 2 })),
			preview(
				htmlFormatter({
					length: 250,
					maxBlocks: 2
				}),
				{
					attribute: 'previewHtml'
				}
			),
			[
				wikilink,
				{
					pageResolver: (permalink) => {
						const result = allFiles.find((file) => {
							const parsedFileName = parseFileNameFromPath(file);
							const match = normalizeFileName(permalink) === normalizeFileName(parsedFileName);
							return match;
						});
						return result !== undefined && result.length > 0
							? [`/notes${toSlug(result, '/obsidian')}`]
							: ['/notes/index'];
					},
					hrefTemplate: (permalink) => {
						return `${permalink}`;
					},
					aliasDivider: '|'
				}
			]
		]
	})) as {
		code: string;
		data: any;
		map: any;
	};
	const code = compiled.code
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, '</code></pre>');

	return {
		html: code,
		meta: { ...compiled.data.fm, slug: params.note }
	};
};
