import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		prerender: {
			default: true
		},
		files: {
			lib: 'src/lib'
		},
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3000,
					host: process.env.GITPOD_WORKSPACE_URL
						? process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-')
						: 'localhost'
				}
			}
		}
	}
};

export default config;
