const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				skin: {
					background: 'var(--color-background)',
					accent: 'var(--color-accent)',
					contrast: 'var(--color-contrast)',
					'off-contrast': 'var(--color-off-contrast)',
					off: 'var(--color-off)'
				}
			},
			boxShadow: {
				normal: '0 0.625rem 1.5rem 0rem rgba(0, 0, 0, 0.08)',
				medium: '0 1.25rem 2.5rem rgba(0, 0, 0, 0.1)',
				primary: '0 0.625rem 1.5rem rgba(141, 0, 0, 0.25)'
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'var(--color-contrast)',
						h1: {
							color: 'var(--color-accent)'
						},
						h2: {
							color: 'var(--color-accent)'
						},
						h3: {
							color: 'var(--color-accent)'
						},
						h4: {
							color: 'var(--color-accent)'
						},
						h5: {
							color: 'var(--color-accent)'
						},
						h6: {
							color: 'var(--color-accent)'
						}
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
