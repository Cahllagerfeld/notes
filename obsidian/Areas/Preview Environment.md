---
title: Preview Environment
tags: [deployment, hosting]
created: 24-05-2022
---

A Preview Environment is an environment that is very similar to the actual production environment. Usually, this environment gets created for feature branches, when they should be merged to `main`. They are redeployed whenever a new commit to a branch gets pushed.


[[Vercel]], as well as [[Netlify]] provide a feature for deploying these without a huge configuration effort. To prevent bad side-effect, have a look at [[Vercel-Build-Capacity]] 
## References
- https://vercel.com/docs/concepts/deployments/environments
- https://docs.netlify.com/site-deploys/deploy-previews/