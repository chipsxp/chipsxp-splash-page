import { z, defineCollection, type SchemaContext  } from "astro:content";
import { glob } from 'astro/loaders'

// Define schemas for each collection
const schema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.object({
    src: image(),
    alt: z.string(),
  }),
  tags: z.array(z.string()).optional(),
  category: z.enum(['research', 'advance']),
  author: z.object({
    name: z.string(),
    nickname: z.string().optional(),
    url: z.string().url().optional(),
  }),
});


// Define collections with their respective schemas
// Define collections
export const collections = {
    'research': defineCollection({
      loader: glob({pattern:"**/*.{md,mdx}", base:"src/content/research"}),
        type: 'content_layer',
        schema,
    }),
    'advance': defineCollection({
      loader: glob({pattern:"**/*.{md,mdx}", base:"src/content/advance"}),
        type: 'content_layer',
        schema,
    }),
};