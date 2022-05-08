const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: '#181717',
				offwhite: '#d4d4d4',
				darkred: '#8d0000',
				lightgray: '#656464',
				darkgray: '#2b2a2a'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
