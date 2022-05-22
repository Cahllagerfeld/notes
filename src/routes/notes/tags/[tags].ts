import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	return {
		status: 200,
		body: {
			success: true
		}
	};
};
