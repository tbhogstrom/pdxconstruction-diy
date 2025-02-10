import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    risk_level: z.number().min(1).max(5),
    hours_per_sqft: z.number(),
    cost_per_sqft: z.number(),
    tools: z.array(z.string()),
    codes: z.array(z.string()),
    diy_recommended: z.boolean(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  })
});

const directory = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.enum(['contractor', 'supplier', 'consultant']),
    services: z.array(z.string()),
    location: z.string(),
    rating: z.number().min(1).max(5).optional(),
    contact: z.object({
      phone: z.string(),
      email: z.string().email(),
      website: z.string().url().optional(),
    }),
    verified: z.boolean().default(false),
  })
});

export const collections = {
  projects,
  blog,
  directory,
};