/**
 * Fake Pagefind script filled with 0 result for development.
 * This way, the script will always be available,
 * and the search results will always be empty.
 * 
 * During build time, since Pagefind is run after the site is built,
 * the actual Pagefind script will replace the dev endpoint.
 * 
 * See: https://blog.otterlord.dev/posts/astro-search/
 */

import type { APIContext } from "astro"

export async function GET({}: APIContext) {
  return new Response('export const search = () => {return {results: []}}')
}