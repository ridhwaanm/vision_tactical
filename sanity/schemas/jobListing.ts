import { defineField, defineType } from 'sanity';

export const jobListing = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Armed Response', value: 'armed-response' },
          { title: 'Guarding', value: 'guarding' },
          { title: 'Control Room', value: 'control-room' },
          { title: 'K9 Unit', value: 'k9' },
          { title: 'Anti-Kidnapping', value: 'anti-kidnapping' },
          { title: 'Management', value: 'management' },
          { title: 'Administration', value: 'administration' },
        ],
      },
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
        ],
      },
      initialValue: 'full-time',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Johannesburg',
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      description: 'Shown on the careers listing page',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full job description including responsibilities and requirements',
    }),
    defineField({
      name: 'requirements',
      title: 'Key Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet-point requirements shown on the listing',
    }),
    defineField({
      name: 'active',
      title: 'Currently Hiring',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  orderings: [
    { title: 'Active first', name: 'activeFirst', by: [{ field: 'active', direction: 'desc' }, { field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', department: 'department', active: 'active' },
    prepare({ title, department, active }) {
      return {
        title,
        subtitle: `${department ?? 'General'} · ${active ? 'Hiring' : 'Closed'}`,
      };
    },
  },
});
