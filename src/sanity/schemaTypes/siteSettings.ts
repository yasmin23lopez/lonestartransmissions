import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'contact', title: 'Contact Info' },
    { name: 'hours', title: 'Business Hours' },
    { name: 'social', title: 'Social Media' },
    { name: 'announcements', title: 'Announcements' },
    { name: 'urls', title: 'URLs & Links' },
  ],
  fields: [
    // Contact Info
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'zip',
      title: 'ZIP Code',
      type: 'string',
      group: 'contact',
    }),

    // Business Hours
    defineField({
      name: 'hoursWeekday',
      title: 'Weekday Hours',
      type: 'string',
      description: 'e.g., "8:00 AM - 6:00 PM"',
      group: 'hours',
    }),
    defineField({
      name: 'hoursSaturday',
      title: 'Saturday Hours',
      type: 'string',
      description: 'e.g., "8:00 AM - 12:00 PM"',
      group: 'hours',
    }),
    defineField({
      name: 'hoursSunday',
      title: 'Sunday Hours',
      type: 'string',
      description: 'e.g., "Closed"',
      group: 'hours',
    }),

    // Social Media
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'yelpUrl',
      title: 'Yelp URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
      group: 'social',
    }),

    // Announcements
    defineField({
      name: 'announcements',
      title: 'Announcement Bar Messages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Main Text', type: 'string' },
            { name: 'subtext', title: 'Subtext', type: 'string' },
          ],
        },
      ],
      group: 'announcements',
    }),

    // URLs
    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
      group: 'urls',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
