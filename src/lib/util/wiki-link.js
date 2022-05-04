import fs from 'fs';

/**
 *
 * @param {string} dir
 * @returns
 */
export function getMarkdownFiles(dir) {
	/** @type {any[]} */
	var results = [];
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

/**
 *
 * @param {string} path
 */
export function parseFileNameFromPath(path) {
	if (path.includes('/')) {
		const parsedFileFromPath = path.split('/')[path.split('/').length - 1];
		return parsedFileFromPath.replace('.md', '');
	} else {
		return null;
	}
}

/**
 *
 * @param {string} fileName
 * @returns
 */
export function normalizeFileName(fileName) {
	fileName = fileName
		.replace('.md', '')
		.replace('(', '')
		.replace(')', '')
		.split(' ')
		.join('-')
		.toLowerCase();

	return fileName;
}

/**
 *
 * @param {string} fileName
 * @param {string} dir
 */
export function toSlug(fileName, dir) {
	if (fileName.includes(dir)) {
		return (fileName = fileName.replace(dir, '').replace(/\s/g, '-').replace('.md', ''));
	}
	return '/';
}
