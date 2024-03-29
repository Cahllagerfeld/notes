import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import wikilink from 'remark-wiki-link';
import preview, { htmlFormatter, textFormatter } from 'remark-preview';
import path from 'path';
import {
	getMarkdownFiles,
	parseFileNameFromPath,
	normalizeFileName,
	toSlug
} from './src/lib/util/wiki-link.js';

const config = defineConfig({
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
					const dir = path.join(process.cwd(), 'obsidian');
					const allFiles = getMarkdownFiles(dir);
					const result = allFiles.find((file) => {
						const parsedFileName = parseFileNameFromPath(file);
						const match = normalizeFileName(permalink) === normalizeFileName(parsedFileName);
						return match;
					});
					return result !== undefined && result.length > 0
						? [`/notes${toSlug(result, dir)}`]
						: ['/notes/index'];
				},
				hrefTemplate: (permalink) => {
					return `${permalink}`;
				},
				aliasDivider: '|'
			}
		]
	]
});

export default config;
