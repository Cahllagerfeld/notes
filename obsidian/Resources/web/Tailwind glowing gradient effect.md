---
title: Tailwind glowing gradient effect
tags: [tailwind, css]
created: 24-12-2022
---
For effects like a glowing background, sometimes a drop-shadow is not the right thing. Shadows should be used to display elevation.

Another option here is `blur` that gets applied to an element with the desired background (e.g. a color or a gradient). The important part is, that the element that is responsible for the glow is positioned as `absolute` behind the root element.

## References
- https://www.youtube.com/watch?v=5W6kEP65AH4