const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				skin: {
					background: 'var(--color-background)',
					'off-background': 'var(--color-off-background)',
					accent: 'var(--color-accent)',
					contrast: 'var(--color-contrast)',
					'off-contrast': 'var(--color-off-contrast)',
					off: 'var(--color-off)',
					text: 'var(--color-text)',
					'text-highlight': 'var(--color-text-highlight)'
				}
			},
			boxShadow: {
				normal: '0 0.625rem 1.5rem 0rem rgba(0, 0, 0, 0.08)',
				medium: '0 1.25rem 2.5rem rgba(0, 0, 0, 0.1)',
				primary: '0 0.625rem 1.5rem var(--color-accent)'
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
				},
				dark: {
					css: {
						color: 'var(--color-text)',
						a: {
							color: 'var(--color-text)'
						},
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
	variants: {
		extend: { typography: ['dark'] }
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
