export async function get() {
	const imports = import.meta.glob('../../lib/contents/notes/**/*.md');
	const body = [];

	for (const path in imports) {
		body.push(
			imports[path]().then(({ metadata }) => {
				return {
					metadata,
					path
				};
			})
		);
	}

	const notes = await Promise.all(body);

	return {
		body: JSON.stringify(notes)
	};
}
