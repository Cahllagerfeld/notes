import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';
import mdsvexConfig from '../../../../../mdsvex.config';

export const load: PageServerLoad = async ({ params }) => {
	const path = `../../../../../obsidian/${params.note}.md?raw`;
	const note = await import(path); // @vite-ignore
	const compiled = (await compile(note.default, mdsvexConfig)) as {
		code: string;
		data: any;
		map: any;
	};
	return {
		html: compiled.code,
		meta: { ...compiled.data.fm, slug: params.note }
	};
};
