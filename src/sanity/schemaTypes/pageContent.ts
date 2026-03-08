import { defineField, defineType } from 'sanity'

export const pageContent = defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      description: 'Unique identifier for the page (e.g., home, about, contact, financing, faq)',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Contact', value: 'contact' },
          { title: 'Financing', value: 'financing' },
          { title: 'FAQ', value: 'faq' },
        ],
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'Small text above the title (e.g., "WHO WE ARE")',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main hero title',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          description: 'Description text below the title',
        }),
        defineField({
          name: 'image',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'sectionId',
              title: 'Section ID',
              type: 'string',
              description: 'Unique identifier for this section',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Small text above the title',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'text',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'image',
              title: 'Section Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          options: {
            list: [
              { title: 'Red', value: '#DC2626' },
              { title: 'Blue', value: '#1314CC' },
              { title: 'Dark Blue', value: '#16215B' },
            ],
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageId',
    },
    prepare({ title }) {
      const pageNames: Record<string, string> = {
        home: 'Home Page',
        about: 'About Page',
        contact: 'Contact Page',
        financing: 'Financing Page',
        faq: 'FAQ Page',
      }
      return {
        title: pageNames[title] || title,
      }
    },
  },
})
