import { getMarkdown } from '../lib/util/get-markdown';
export const prerender = true;
export const load = async () => {
	return {
		markdown: getMarkdown().map((file) => {
			return { metadata: file.metadata, href: file.href };
		})
	};
};
