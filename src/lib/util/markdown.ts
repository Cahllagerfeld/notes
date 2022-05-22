import matter from 'gray-matter';
import fs from 'fs';
import { compile } from 'mdsvex';
import mdsvexConfig from '../../../mdsvex.config';

export function getFrontmatter(filePath: string) {
	const content = fs.readFileSync(filePath, 'utf8');
	return matter(content);
}

export function getMarkdownFiles(dir: string) {
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

export async function compileMarkdown(content: string) {
	return await compile(content, mdsvexConfig);
}
