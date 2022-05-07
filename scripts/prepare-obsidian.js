import fs from 'fs';
import path from 'path';

/**
 *
 * @param {string} permalink
 * @returns
 */
function preparePermalink(permalink) {
	return permalink.toLowerCase().replace(/\s/g, '-');
}

/**
 *
 * @param {string} src - path to the source directory
 * @param {string} dest - path to the destination directory
 */
function copyFilesandRename(src, dest) {
	const items = fs.readdirSync(src);
	for (const item of items) {
		const srcPath = path.join(src, item);
		const destPath = path.join(dest, item);
		const stat = fs.lstatSync(srcPath);
		if (stat.isFile()) {
			fs.copyFileSync(srcPath, destPath);
		} else if (stat.isDirectory()) {
			fs.mkdirSync(destPath);
			copyFilesandRename(srcPath, destPath);
		}
	}
}
