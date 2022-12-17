import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';
import mdsvexConfig from '../../../../../mdsvex.config';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const url = params.note.toLowerCase().replace(' ', '__');
	const data = await fetch(`/api/notes/${url}`);
	if (!data.ok) {
		throw error(404, { message: 'Note not found' });
	}
	const note = await data.json();

	const compiled = (await compile(note.content, mdsvexConfig)) as {
		code: string;
		data: any;
		map: any;
	};
	return {
		html: compiled.code,
		meta: { ...compiled.data.fm, slug: params.note }
	};
};
