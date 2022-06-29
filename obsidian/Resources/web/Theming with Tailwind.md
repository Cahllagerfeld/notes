---
title: Theming with Tailwind
tags: [tailwind, css, theme]
created: 29-06-2022
---
For adding themes, universal classes need to be applied to the html-markup. In clear words this means, you shouldn't use the [[Tailwind]]-class `text-red-700`, because this value is not dynamic, depending on the selected theme.

Instead we declare CSS variables with the following syntax in the file where the [[Tailwind]] layers are defined:
```css
:root{
	--color-primary: #8d0000
}
```

These values can be scoped to different classes, which means that the variables defined in `:root`-selector can be overwritten by defining them inside the `.dark`-class for example:
```css
.dark{
	--color-primary: #bf0000
}
```

Inside `tailwind.config.cjs`, these variables can be referenced like so: 

```js
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
		}
	},
};

module.exports = config;

```
## References
- https://www.youtube.com/watch?v=MAtaT8BZEAo
