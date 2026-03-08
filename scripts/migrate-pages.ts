import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const pageContents = [
  {
    _id: 'page-about',
    _type: 'pageContent',
    pageId: 'about',
    hero: {
      label: 'WHO WE ARE',
      title: 'ABOUT US',
      subtitle: '20+ years of transmission expertise serving Crosby, Texas and the greater Houston area.',
    },
    sections: [
      {
        _key: 'story',
        sectionId: 'story',
        label: 'OUR STORY',
        title: 'FAMILY OWNED & OPERATED',
        subtitle: 'Lonestar Transmissions was founded with a simple mission: provide honest, reliable transmission repair at fair prices. What started as a small shop has grown into one of the most trusted transmission specialists in the Houston area.',
      },
      {
        _key: 'why-us',
        sectionId: 'why-us',
        label: 'WHY CHOOSE US',
        title: 'THE LONESTAR DIFFERENCE',
        subtitle: '',
      },
      {
        _key: 'location',
        sectionId: 'location',
        label: 'OUR LOCATION',
        title: 'VISIT US IN CROSBY, TEXAS',
        subtitle: 'Conveniently located on US-90, we\'re easy to find and ready to help with all your transmission needs.',
      },
    ],
    cta: {
      title: 'READY TO GET STARTED?',
      subtitle: 'Call us for a free diagnostic or book your appointment online. We\'ll take care of the rest.',
      backgroundColor: '#DC2626',
    },
  },
  {
    _id: 'page-contact',
    _type: 'pageContent',
    pageId: 'contact',
    hero: {
      label: 'GET IN TOUCH',
      title: 'CONTACT US',
      subtitle: 'Have questions? Need a quote? We\'re here to help. Reach out by phone, email, or stop by our shop in Crosby.',
    },
    sections: [
      {
        _key: 'hours',
        sectionId: 'hours',
        label: 'BUSINESS HOURS',
        title: 'WHEN WE\'RE OPEN',
        subtitle: '',
      },
    ],
    cta: {
      title: 'FREE DIAGNOSTIC AVAILABLE',
      subtitle: 'Not sure what\'s wrong with your transmission? Bring it in for a free 25-point inspection. No obligation.',
      backgroundColor: '#DC2626',
    },
  },
  {
    _id: 'page-financing',
    _type: 'pageContent',
    pageId: 'financing',
    hero: {
      label: 'FLEXIBLE PAYMENT OPTIONS',
      title: 'FINANCING AVAILABLE',
      subtitle: 'Don\'t let car trouble break the bank. We partner with multiple financing companies so you can get back on the road without the stress.',
    },
    sections: [
      {
        _key: 'partners',
        sectionId: 'partners',
        label: 'OUR PARTNERS',
        title: 'FINANCING OPTIONS',
        subtitle: '',
      },
      {
        _key: 'how-it-works',
        sectionId: 'how-it-works',
        label: 'HOW IT WORKS',
        title: 'SIMPLE PROCESS',
        subtitle: '',
      },
    ],
    cta: {
      title: 'READY TO GET STARTED?',
      subtitle: 'Call us today to learn more about our financing options or schedule your free diagnostic.',
      backgroundColor: '#1314CC',
    },
  },
  {
    _id: 'page-faq',
    _type: 'pageContent',
    pageId: 'faq',
    hero: {
      label: 'FREQUENTLY ASKED QUESTIONS',
      title: 'QUESTIONS? WE\'VE GOT ANSWERS.',
      subtitle: 'Find answers to common questions about our transmission services, pricing, and process.',
    },
    sections: [],
    cta: {
      title: 'STILL HAVE QUESTIONS?',
      subtitle: 'Our team is here to help. Give us a call or stop by our shop in Crosby for a free consultation.',
      backgroundColor: '#DC2626',
    },
  },
]

async function migratePages() {
  console.log('Starting page content migration...')

  for (const page of pageContents) {
    try {
      const result = await client.createOrReplace(page)
      console.log(`✓ Created/updated page: ${page.pageId}`)
    } catch (error) {
      console.error(`✗ Error creating page ${page.pageId}:`, error)
    }
  }

  console.log('\nPage content migration complete!')
}

migratePages()
