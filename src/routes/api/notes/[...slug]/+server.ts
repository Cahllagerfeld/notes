import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const slug = params.slug.toLowerCase().replace('__', ' ');
	const allNotes = await Promise.all(
		Object.entries(import.meta.glob('/obsidian/**/*.md', { as: 'raw' }))
			.filter(([note]) => !note.includes('templates'))
			.map(async ([path, loader]) => {
				const permaPath = path.replace(/\s/g, '-').replace('/obsidian/', '').toLowerCase();
				const content = await loader();
				return { path: permaPath, content };
			})
	);

	const note = allNotes.find((note) => note.path.toLowerCase() === `${slug}.md`);
	console.log(note);

	if (!note) {
		return json({ error: `Note ${slug} not found` }, { status: 404 });
	}
	return json(note);
};
