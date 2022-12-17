import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const slug = params.slug.toLowerCase().replace('__', ' ').replace(/-/g, ' ');
	const allNotes = await Promise.all(
		Object.entries(import.meta.glob('/obsidian/**/*.md', { as: 'raw' }))
			.filter(([note]) => !note.includes('templates'))
			.map(async ([path, loader]) => {
				const content = await loader();
				return { path, content };
			})
	);

	const note = allNotes.find((note) => note.path.toLowerCase() === `/obsidian/${slug}.md`);

	if (!note) {
		return json({ error: `Note ${slug} not found` }, { status: 404 });
	}
	return json(note);
};
