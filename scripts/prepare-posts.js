import glob from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

const items = glob.sync(`${process.cwd()}/src/**/*.md`).map((file) => {
	const source = fs.readFileSync(file, 'utf8');
	const { data, content } = matter(source);
	return {
		href: file,
		frontmatter: data,
		content: content
	};
});

const exportString = `export const items = ${JSON.stringify(items)}`;

fs.writeFileSync(`${process.cwd()}/src/lib/cache/markdown.js`, exportString);
