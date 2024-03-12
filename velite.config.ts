import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const linkType = s.enum(['GitHub', 'Website']);

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .optional();

const projects = defineCollection({
  name: 'Projects',
  pattern: 'projects/**/*.md',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug(),
      date: s.isodate(),
      description: s.string().max(999),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      meta: meta,
      content: s.markdown(),
      skills: s.array(s.string()).optional(),
      links: s.array(s.object({ type: linkType, url: s.string() })).optional(),
    })
    .transform((data) => ({ ...data, permalink: `/projects/${data.slug}` })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { projects },
  markdown: { rehypePlugins: [rehypePrettyCode] },
});
