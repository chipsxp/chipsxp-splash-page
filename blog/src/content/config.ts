import { z, defineCollection } from 'astro:content';

// Define the schema for both collections
const schema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    category: z.enum(['research', 'development']),
});

// Define collections
export const collections = {
    'research': defineCollection({
        type: 'content',
        schema,
    }),
    'advance': defineCollection({
        type: 'content',
        schema,
    }),
};
