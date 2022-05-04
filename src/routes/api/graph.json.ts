import fs from 'fs';
import path from 'path';
import wikiLink from 'remark-wiki-link';
import { toSlug } from '$lib/util/wiki-link.js';
import { compile } from 'mdsvex';
import type { Node, Edge } from '$lib/contents/types';

export async function get() {
	const dir = 'src/routes/notes';
	const items = getMarkdownFiles(path.join(dir));
	let nodes: Node[] = [];
	const edges: Edge[] = [];
	items.forEach(async (item) => {
		const sanitizedItem = toSlug(item, dir);
		const backlinks = await getInternalLinks(item);
	});
	return {
		body: {
			nodes
		}
	};
}

function getMarkdownFiles(dir: string) {
	var results: string[] = [];
	const items = fs.readdirSync(dir);
	items.forEach((note) => {
		note = `${dir}/${note}`;
		const stat = fs.statSync(note);
		if (stat && stat.isDirectory()) {
			results = results.concat(getMarkdownFiles(note));
		} else {
			results.push(note);
		}
	});
	return results.filter((f) => f.endsWith('.md'));
}

async function getInternalLinks(filePath: string) {
	let backlinks: string[] = [];
	let edges: Edge[] = [];
	const content = fs.readFileSync(filePath, 'utf8');
	const parsedContent = await compile(content, {
		remarkPlugins: [
			[
				wikiLink,
				{
					pageResolver: (permalink) => {
						return [permalink];
					},
					hrefTemplate: (permalink) => {
						return `${permalink}`;
					},
					aliasDivider: '|'
				}
			]
		]
	});
	return backlinks;
}

function resolver(permalink: string) {}
