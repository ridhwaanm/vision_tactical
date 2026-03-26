import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'location', title: 'Location (suburb)', type: 'string' }),
    defineField({ name: 'service', title: 'Service Used', type: 'string' }),
    defineField({ name: 'verified', title: 'Verified Real Testimonial', type: 'boolean', initialValue: false }),
  ],
});
