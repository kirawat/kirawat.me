import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishDate: z.coerce.date(),
  modifiedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
});

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: ['**/*.{md,mdx}'],
  }),
  schema: postSchema,
});

export const collections = {
  blog,
}