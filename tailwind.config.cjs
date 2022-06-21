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
			},
			boxShadow: {
				normal: '0 0.625rem 1.5rem 0rem rgba(0, 0, 0, 0.08)',
				medium: '0 1.25rem 2.5rem rgba(0, 0, 0, 0.1)',
				primary: '0 0.625rem 1.5rem rgba(141, 0, 0, 0.25)'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
