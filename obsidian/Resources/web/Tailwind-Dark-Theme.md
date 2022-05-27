---
title: Tailwind Dark Theme
tags: [tailwind, css, dark]
created: 27-05-2022
---

For toggling Dark Mode inside a Tailwind-Application manually, add this snippet to your `tailwind.config.js`
```js
module.exports = {
  darkMode: 'class',
  // ...
}

```
By doing so, you can use the `dark:` modifier to apply tailwind classes only in dark mode.

For making use of the "class-approach", the css class `dark` needs to be added ideally to the `html`-tag of the page, or the `body`-tag.


> **_NOTE:_**  Based on experiences, I had issues using the `dark:`-modifier inside a regular css class in combination with the `@apply`-decorator in [[Sveltekit]]

## References
- https://tailwindcss.com/docs/dark-mode