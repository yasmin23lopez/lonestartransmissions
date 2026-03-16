import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short subtitle (e.g., "Repair & Rebuild")',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image used in hero and slider',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Component icon name',
      options: {
        list: [
          { title: 'Car Diagnostic', value: 'CarDiagnosticIcon' },
          { title: 'Oil Change', value: 'OilChangeIcon' },
          { title: 'Brakes', value: 'BrakesIcon' },
          { title: 'Heat/AC', value: 'HeatACIcon' },
          { title: 'Transmission', value: 'TransmissionIcon' },
        ],
      },
    }),
    defineField({
      name: 'features',
      title: 'Features / Services Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of service features shown on the detail page',
    }),
    defineField({
      name: 'warningSigns',
      title: 'Warning Signs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Warning signs that indicate this service is needed',
    }),
    defineField({
      name: 'extraSections',
      title: 'Extra Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'extraSection',
          title: 'Section',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'name', title: 'Name', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'string' }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
      description: 'Additional sections like "Transmission Types", "Oil Types", etc.',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'string' }),
          ],
        },
      ],
      description: 'Benefits shown in the grid (4 items)',
    }),
    defineField({
      name: 'faqs',
      title: 'Service FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' }),
          ],
        },
      ],
      description: 'FAQs specific to this service',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      description: 'Title for the bottom CTA section',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Section Subtitle',
      type: 'text',
      description: 'Subtitle for the bottom CTA section',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display the service',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
