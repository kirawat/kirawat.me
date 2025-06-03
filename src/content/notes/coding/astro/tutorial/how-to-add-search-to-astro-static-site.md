---
title: "How to Add Search to Astro Static Site"
publishDate: 2025-06-04 01:15:00 +0700
modifiedDate: 2025-06-04 01:15:00 +0700
draft: true
---

`src/pages/pagefind/pagefind.js.ts`:
```javascript
import type { APIContext } from "astro"

export async function GET({}: APIContext) {
  return new Response('export const search = () => {return {results: []}}')
}
```