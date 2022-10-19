throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import fs from 'fs';
import path from 'path';
import wikiLink from 'remark-wiki-link';
import { normalizeFileName, parseFileNameFromPath, toSlug } from '$lib/util/wiki-link.js';
import { getFrontmatter, getMarkdownFiles } from '$lib/util/markdown';
import { compile } from 'mdsvex';
import mergeWith from 'lodash/mergeWith.js';
import isArray from 'lodash/isArray.js';
import type { Node, Edge, Backlink } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const resolvedPath = resolveFilePath(params.slug);
	const dir = 'src/routes/notes';
	const items = getMarkdownFiles(path.join(dir));
	let nodes: Node[] = [];
	let edges: Edge[] = [];
	let backlinks: { [key: string]: string[] } = {};
	for (const item of items) {
		const sanitizedItem = removeSlashatEnd(toSlug(item, 'src/routes'));
		const title = getFrontmatter(item).data.title
			? getFrontmatter(item).data.title
			: getFilename(item);
		nodes = [...nodes, { id: sanitizedItem, title, href: sanitizedItem }];
		const { edges: crawledEdges, backlinks: crawledBacklinks } = await getInternalLinks(item);

		edges = [...edges, ...crawledEdges];

		backlinks = mergeWith(backlinks, crawledBacklinks, customizer);
	}
	const filteredBacklinkgs = backlinks[resolvedPath];
	const { edges: filteredEdges, nodes: filteredNodes } = filterGraph(resolvedPath, edges, nodes);
	return {
		body: {
			nodes: filteredNodes,
			edges: filteredEdges,
			backlinks: filteredBacklinkgs
		}
	};
};

function resolveFilePath(encodedPath: string) {
	return encodedPath.replace(/__/g, '/');
}

function customizer(objValue, srcValue) {
	if (isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}

function getFilename(filePath: string) {
	return path.basename(filePath, '.md');
}

function filterGraph(path: string, edges: Edge[], nodes: Node[]) {
	const filteredEdges = edges.filter((edge) => {
		return edge.source === path || edge.target === path;
	});
	const filteredNodes = nodes.filter((node) => {
		return filteredEdges.some((edge) => {
			return edge.source === node.id || edge.target === node.id;
		});
	});
	return {
		edges: filteredEdges,
		nodes: filteredNodes
	};
}

async function getInternalLinks(filePath: string) {
	const backlinks: { [key: string]: Backlink[] } = {};
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
							backlinks[removeSlashatEnd(toSlug(result, dir))] = [
								{ href: toSlug(filePath, 'src/routes'), title: getFrontmatter(filePath).data.title }
							];
							edges = [
								...edges,
								{
									source: removeSlashatEnd(toSlug(filePath, 'src/routes')),
									target: removeSlashatEnd(toSlug(result, dir))
								}
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

function removeSlashatEnd(str: string) {
	return str.endsWith('/') ? str.substring(0, str.length - 1) : str;
}
