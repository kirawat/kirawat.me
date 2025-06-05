import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const basePostSchema = z.object({
  /** The title of the current page. Required. */
  name: z.string(),

  /**
   * A short description of the current page's content.
   * Optional, but recommended.
   * 
   * A good description is 150-160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: z.string().optional(),
  dateCreated: z.coerce.date(),
  dateModified: z.coerce.date().optional(),
  datePublished: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),

  /**
   * Indicates that this page is a draft and will not be included
   * in production builds. Note that the page will still be available
   * when running Astro in development mode.
   */
  draft: z.boolean().default(false),
});

const evergreenPostSchema = z.object({
  ...basePostSchema.shape,
  status: z.enum([
    'Seedling',
    'Budding',
    'Evergreen',
  ]).optional(),
})

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: ['**/*.{md,mdx}'],
  }),
  schema: basePostSchema,
});

const notes = defineCollection({
  loader: glob({
    base: './src/content/notes',
    pattern: ['**/*.{md,mdx}'],
  }),
  schema: z.object({
    ...basePostSchema.shape,
    ...evergreenPostSchema.shape,
  }),
});

export const collections = {
  blog,
  notes,
}