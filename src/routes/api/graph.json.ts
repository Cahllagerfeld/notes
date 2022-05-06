import fs from 'fs';
import path from 'path';
import wikiLink from 'remark-wiki-link';
import { normalizeFileName, parseFileNameFromPath, toSlug } from '$lib/util/wiki-link.js';
import matter from 'gray-matter';
import { compile } from 'mdsvex';
import { mergeWith, isArray } from 'lodash';
import type { Node, Edge } from '$lib/contents/types';

export async function get() {
	const dir = 'src/routes/notes';
	const items = getMarkdownFiles(path.join(dir));
	let nodes: Node[] = [];
	let edges: Edge[] = [];
	let backlinks: { [key: string]: string[] } = {};
	for (const item of items) {
		const sanitizedItem = toSlug(item, 'src/routes');
		nodes = [
			...nodes,
			{ id: sanitizedItem, title: getFrontmatter(item).data.title, href: sanitizedItem }
		];
		const { edges: crawledEdges, backlinks: crawledBacklinks } = await getInternalLinks(item);

		edges = [...edges, ...crawledEdges];

		backlinks = mergeWith(backlinks, crawledBacklinks, customizer);
	}
	return {
		body: {
			nodes,
			edges,
			backlinks
		}
	};
}

function customizer(objValue, srcValue) {
	if (isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}

function getFrontmatter(filePath: string) {
	const content = fs.readFileSync(filePath, 'utf8');
	return matter(content);
}

function getMarkdownFiles(dir: string) {
	let results: string[] = [];
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
	const backlinks: { [key: string]: string[] } = {};
	let edges: Edge[] = [];
	const content = fs.readFileSync(filePath, 'utf8');
	await compile(content, {
		remarkPlugins: [
			[
				wikiLink,
				{
					pageResolver: (permalink: string) => {
						const dir = path.join(process.cwd(), 'src/routes');
						const allFiles = getMarkdownFiles(dir);
						const result = allFiles.find((file) => {
							const parsedFileName = parseFileNameFromPath(file);
							const match = normalizeFileName(permalink) === normalizeFileName(parsedFileName);
							return match;
						});
						if (result) {
							backlinks[toSlug(result, dir)] = [toSlug(filePath, 'src/routes')];
							edges = [
								...edges,
								{ source: toSlug(filePath, 'src/routes'), target: toSlug(result, dir) }
							];
						}
						return result !== undefined && result.length > 0 ? [toSlug(result, dir)] : ['/'];
					},
					hrefTemplate: (permalink: string) => {
						return `${permalink}`;
					},
					aliasDivider: '|'
				}
			]
		]
	});

	return { edges, backlinks };
}
