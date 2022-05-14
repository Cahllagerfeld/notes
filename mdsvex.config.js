import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import wikilink from 'remark-wiki-link';
import path from 'path';
import prefetch from './src/lib/util/rehype-prefetch.js';
import {
	getMarkdownFiles,
	parseFileNameFromPath,
	normalizeFileName,
	toSlug
} from './src/lib/util/wiki-link.js';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		notes: './src/lib/components/notes/layout.svelte'
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[
			wikilink,
			{
				pageResolver: (permalink) => {
					const dir = path.join(process.cwd(), 'src/routes');
					const allFiles = getMarkdownFiles(dir);
					const result = allFiles.find((file) => {
						const parsedFileName = parseFileNameFromPath(file);
						const match = normalizeFileName(permalink) === normalizeFileName(parsedFileName);
						return match;
					});
					return result !== undefined && result.length > 0 ? [toSlug(result, dir)] : ['/'];
				},
				hrefTemplate: (permalink) => {
					return `${permalink}`;
				},
				aliasDivider: '|'
			}
		]
	],
	rehypePlugins: [prefetch]
});

export default config;
