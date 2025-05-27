import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const basePostSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishDate: z.coerce.date(),
  modifiedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
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

const note = defineCollection({
  loader: glob({
    base: './src/content/note',
    pattern: ['**/*.{md,mdx}'],
  }),
  schema: z.object({
    ...basePostSchema.shape,
    ...evergreenPostSchema.shape,
  }),
});

export const collections = {
  blog,
  note,
}