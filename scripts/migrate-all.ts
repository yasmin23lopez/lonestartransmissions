import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Site Settings
const siteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  phone: '281-462-4970',
  email: 'lonestartransimissions@gmail.com',
  address: '4321 US-90',
  city: 'Crosby',
  state: 'TX',
  zip: '77532',
  hoursWeekday: '8:00 AM - 6:00 PM',
  hoursSaturday: '8:00 AM - 12:00 PM',
  hoursSunday: 'Closed',
  facebookUrl: 'https://www.facebook.com/p/Lonestar-Transmissions-61569914734217/',
  yelpUrl: 'https://www.yelp.com/biz/lonestar-transmissions-crosby',
  googleMapsUrl: 'https://maps.google.com/?q=4321+US-90+Crosby+TX+77532',
  bookingUrl: 'https://booking.shopgenie.io/?shop=lonestartransmissions-4250819731&preselect_account=lonestartransmissions-4250819473',
  announcements: [
    { _key: 'a1', text: 'Free Towing', subtext: '*with major repair' },
    { _key: 'a2', text: '10% off military discount', subtext: '*on labor' },
    { _key: 'a3', text: 'We work with extended warranty', subtext: '' },
  ],
}

// Testimonials
const testimonials = [
  { name: "Miss AmericanPie", title: "1979 Ford F250 - C6 Transmission Rebuild", text: "We took a C6 to Juvenal to be rebuilt for our '79 Ford F250. The transmission was installed on time and they even sourced a hard-to-find part. It came out flawless. Juvenal told us to bring the truck when they installed the transmission for a full inspection. Once installed, we brought it in and they had it running perfectly in less than an hour. They even installed a grommet on the linkage we had so much trouble with right away! Customer service and attention to detail are top-notch, even on classics! Definitely a customer for life. THANK YOU AGAIN!", rating: 5, hasImage: true, order: 1 },
  { name: "Jody", title: "Chevy Silverado Transmission Rebuild", text: "My Chevy Silverado's transmission broke down at work. Lonestar immediately sent a truck to pick it up and rebuilt my transmission in 4 business days for a fair price. The truck shifts smoother than ever. They took me back to the shop and showed me everything they were doing to the truck; they kept me informed every step of the way. Definitely a satisfied customer. Thanks, Juve and Armando!", rating: 5, hasImage: true, order: 2 },
  { name: "Don G.", title: "Thorough Google Search Led Me Here", text: "After a thorough Google search, I found this shop. They had 'REAL' Google reviews, not AI-generated like many others. I spoke with them on the phone and explained my transmission symptoms. They were very knowledgeable. I decided to hire them and don't regret it one bit. They diagnosed the problem within hours of dropping it off. As soon as I gave them the go-ahead, they started working right away. After opening the transmission, they found everything that needed to be changed and explained it to me in detail. They rebuilt my transmission in two days with upgraded parts and my truck was back on the road without issues. I've only used it a few days or miles, but I can tell they did it right. So far no problems. Their work is backed by a 12-month or 12,000-mile warranty. The rebuild price was excellent and reasonable. I highly recommend them! Update 04/10/2025: I came back for a check-up a week later. They found an oil leak in the slip yoke seal. They replaced it at no charge. My truck still runs smoothly.", rating: 5, order: 3 },
  { name: "Sonny Hernandez", title: "Understanding & Professional Service", text: "I just want to say, Thank you, to Juve and his team. Even though my truck seems to be seeing some future problems, Juve was kind enough to understand the financial stress that comes with rebuilding or replacing a transmission. We did something like a quick fix per MY request with a Fluid and Filter Service that is required by GMC Service. They don't explain this when you buy a GMC vehicle that the transmission fluid must be replaced between 40k to 60k miles depending on how you drive your vehicle. If this isn't done it could lead to more transmission problems. Thanks GMC for the headache you've caused me. I've had my truck for two weeks and the shuddering seems to have decreased, but by no means is this the remedy for a permanent fix, but it was necessary. I know one thing, I'll be taking my truck to Juve at Lonestar Transmission when I need a transmission rebuild or replacement. These guys are great and very understanding. I recommend them for all your transmission repairs.", rating: 5, order: 4 },
  { name: "Christopher Sutphin", title: "Customer for Life", text: "I don't usually write reviews, but in this case I think it's important, considering the cost of transmission repairs. Lonestar did an excellent job repairing my transmission. They worked with my warranty company to get the repairs approved and rebuilt my transmission in 3 days. They saved me a lot of money and my truck runs better than when I bought it. Everyone is very professional and did exactly what they promised me, and my truck was repaired and ready when they said it would be. Thank you so much, Lonestar, God bless you. I definitely recommend them; I'm a customer for life.", rating: 5, order: 5 },
  { name: "Irvin Woodard", title: "Ford Transit Van Repair", text: "The guys at Lonestar Transmission did a fantastic job on my Ford Transit van. Good price, excellent service and very good advice about potential problems based on their experience. They even called me the next day to ask how everything was going and took the trouble to locate a part I'll need to replace in the future because it tends to fail. I highly recommend this shop for any transmission-related needs.", rating: 5, order: 6 },
  { name: "Joseph Ryan F.", title: "'97 Mustang GT & 2018 Silverado 4x4", text: "The guys at Lonestar did an excellent job. They earned my trust. Rebuilt the transmission on my '97 Mustang GT and my 2018 Silverado 4x4. They did the job right in about 3 days. They don't mess around. Diagnosed the problem, gave me a price, and that's what I paid. Thanks, Lonestar!", rating: 5, order: 7 },
  { name: "Manuel R.", title: "Ford Truck Transmission Replacement", text: "Juvenal was kind and took the time to explain the entire transmission replacement process for my Ford truck. Prices were fair and the work was done within the estimated time. The truck runs great. I recommend this place.", rating: 5, order: 8 },
  { name: "Cedric M.", title: "Transmission Leak Fixed", text: "Talked to Juve and instantly knew he was a straightforward person. They checked my truck for free and gave me a quote. Transmission is fixed and no longer leaking. Armando also went above and beyond to make sure I was happy. Will definitely return for future repairs.", rating: 5, order: 9 },
  { name: "Ceci F.", title: "Professional Service & Fair Prices", text: "This shop is excellent, very professional. I'm very happy with the repairs, prices are very competitive. They gave me a clear and detailed quote. Thank you so much!", rating: 5, order: 10 },
]

// Updated FAQs
const faqs = [
  { question: "Is the diagnostic really free?", answer: "Yes! We offer a completely free diagnostic with a 25-point inspection to identify any transmission issues.", order: 1 },
  { question: "Do you offer free towing?", answer: "Yes, we offer free towing for transmission repairs within our service area. Call us for details.", order: 2 },
  { question: "Do you offer financing?", answer: "Yes, we offer flexible financing options to help you get your car fixed without breaking the bank.", order: 3 },
  { question: "How long does a repair take?", answer: "Most repairs are completed within 1-3 days. We'll give you an accurate timeline after the diagnostic.", order: 4 },
  { question: "Do you work on all vehicle types?", answer: "Yes, we service all makes and models—domestic and foreign, cars, trucks, and SUVs.", order: 5 },
]

async function migrate() {
  console.log('Starting full migration...\n')

  // Migrate Site Settings
  console.log('Migrating Site Settings...')
  await client.createOrReplace(siteSettings)
  console.log('  ✓ Site Settings')

  // Migrate Testimonials
  console.log('\nMigrating Testimonials...')
  for (const t of testimonials) {
    const doc = {
      _type: 'testimonial',
      _id: `testimonial-${t.order}`,
      name: t.name,
      title: t.title,
      text: t.text,
      rating: t.rating,
      order: t.order,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ ${t.name}`)
  }

  // Update FAQs with new content
  console.log('\nUpdating FAQs...')
  for (const faq of faqs) {
    const doc = {
      _type: 'faq',
      _id: `faq-${faq.order}`,
      question: faq.question,
      answer: faq.answer,
      order: faq.order,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ FAQ ${faq.order}`)
  }

  console.log('\n✅ Full migration complete!')
  console.log('\nNext steps:')
  console.log('1. Run: npx tsx scripts/upload-images.ts (to upload team & financing images)')
  console.log('2. Upload testimonial images manually in Studio (review1.jpg, review_2.jpg)')
}

migrate().catch(console.error)
