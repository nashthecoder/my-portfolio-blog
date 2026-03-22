// sanity/schemas/case-study-schema.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client / organisation',
      type: 'string',
      description: 'e.g. World Bank · Nairobi County Government',
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'GovTech / DPI', value: 'govtech' },
          { title: 'HealthTech / SRHR', value: 'healthtech' },
          { title: 'FemTech', value: 'femtech' },
          { title: 'Open Source / DPG', value: 'dpg' },
          { title: 'Civic Tech', value: 'civic' },
          { title: 'Education', value: 'education' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'my_role',
      title: 'My role',
      type: 'string',
      description: 'e.g. Product Lead & Full-Stack Developer',
    }),
    defineField({
      name: 'summary',
      title: 'One-line summary (card teaser)',
      type: 'text',
      rows: 2,
      description: 'Max ~120 chars. This shows on the homepage card.',
      validation: Rule => Rule.max(150),
    }),
    defineField({
      name: 'impact_metric',
      title: 'Impact metric',
      type: 'string',
      description: 'A single striking number. e.g. "25% faster incident resolution" or "1.5 days to prototype"',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'OpenFn', 'DPG', 'DPI', 'AI', 'SRHR', 'Rails', 'Co-design',
          'World Bank', 'Open source', 'Prototype', 'Multi-country',
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'cover_image',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used on the card. Landscape, min 800×450px.',
    }),
    defineField({
      name: 'external_url',
      title: 'Full case study URL',
      type: 'url',
      description: 'Link to the full case study site (GitHub Pages, Lovable, etc.)',
    }),
    defineField({
      name: 'live_url',
      title: 'Live product URL',
      type: 'url',
      description: 'Optional — the actual product if it is live',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first. 1 = featured at top.',
    }),
    defineField({
      name: 'is_featured',
      title: 'Feature on homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'year',
      title: 'Year completed',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'cover_image',
      featured: 'is_featured',
    },
    prepare({ title, client, media, featured }) {
      return {
        title: `${featured ? '★ ' : ''}${title}`,
        subtitle: client,
        media,
      }
    },
  },
})
