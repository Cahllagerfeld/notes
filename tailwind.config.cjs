const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: '#1d1d1d',
				offwhite: '#ececec',
				darkred: '#8d0000',
				lightgray: '#bfbfbf',
				darkgray: '#2b2a2a'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
