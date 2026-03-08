import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Team Members data
const teamMembers = [
  { name: "Armando", role: "Founder & Owner", order: 1 },
  { name: "Juvenal Toledo", role: "Shop Manager", order: 2 },
  { name: "Gerardo Campos", role: "R&R Specialist", order: 3 },
  { name: "German Guerrero", role: "High Tech Mechanic", order: 4 },
  { name: "Jose Torres", role: "High Tech Mechanic", order: 5 },
  { name: "George Martinez", role: "Transmission Builder", order: 6 },
]

// FAQs data
const faqs = [
  { question: "How long does a transmission repair take?", answer: "Most transmission repairs take 2-4 days, depending on the complexity. We'll give you an accurate estimate after our free diagnostic.", order: 1 },
  { question: "Do you offer warranties?", answer: "Yes! All our transmission repairs come with a warranty. Ask us about our specific warranty terms for your repair.", order: 2 },
  { question: "What payment options do you accept?", answer: "We accept cash, all major credit cards, and offer financing through EasyPay, Snap Finance, Affirm, and Klarna.", order: 3 },
  { question: "Do you work on all vehicle makes?", answer: "Yes, we work on all makes and models - domestic and foreign. Our technicians are trained on the latest transmission systems.", order: 4 },
  { question: "Is the diagnostic really free?", answer: "Absolutely! We offer a completely free diagnostic to identify your transmission issues with no obligation.", order: 5 },
]

// Services data
const services = [
  { 
    title: "Free Diagnostic", 
    slug: "diagnostic",
    subtitle: "Car Problems?",
    description: "Not sure what's wrong with your vehicle? Our expert technicians will diagnose the issue for free.",
    icon: "diagnostic",
    order: 1,
    features: ["Complete computer diagnostic", "Visual inspection", "Test drive assessment", "Detailed report", "No obligation quote"]
  },
  { 
    title: "Oil Change", 
    slug: "oil-change",
    description: "Keep your engine running smoothly with our professional oil change service.",
    icon: "oil-change",
    order: 2,
    features: ["Conventional & synthetic options", "Filter replacement", "Fluid level check", "Multi-point inspection"]
  },
  { 
    title: "Brakes", 
    slug: "brakes",
    description: "Expert brake repair and replacement to keep you safe on the road.",
    icon: "brakes",
    order: 3,
    features: ["Brake pad replacement", "Rotor resurfacing/replacement", "Brake fluid flush", "ABS diagnostics"]
  },
  { 
    title: "Heat or A/C", 
    slug: "hvac",
    description: "Stay comfortable year-round with our heating and air conditioning services.",
    icon: "hvac",
    order: 4,
    features: ["A/C recharge", "Compressor repair", "Heater core service", "Climate control diagnostics"]
  },
  { 
    title: "Transmission", 
    slug: "transmission",
    description: "Our specialty - complete transmission repair, rebuild, and replacement services.",
    icon: "transmission",
    order: 5,
    features: ["Transmission rebuild", "Fluid flush & change", "Clutch replacement", "Torque converter service", "Complete replacement"]
  },
]

// Financing Partners data
const financingPartners = [
  { 
    name: "EasyPay", 
    url: "https://customerappx.easypayfinance.com/application/A52AADEF",
    description: "Flexible payment plans to fit your budget.",
    order: 1,
    features: ["Quick approval", "Flexible terms", "No credit needed"]
  },
  { 
    name: "Snap Finance", 
    url: "https://snapf.in/PTgnwlr",
    description: "Approvals up to $5,000 with easy monthly payments.",
    order: 2,
    features: ["Up to $5,000", "Easy approval", "Monthly payments"]
  },
  { 
    name: "Affirm", 
    url: "#",
    description: "Buy now, pay over time with transparent pricing.",
    order: 3,
    features: ["No hidden fees", "Flexible payments", "Quick checkout"]
  },
  { 
    name: "Klarna", 
    url: "#",
    description: "Split your purchase into easy installments.",
    order: 4,
    features: ["Pay in 4", "No interest", "Instant decisions"]
  },
]

async function migrate() {
  console.log('Starting migration...')

  // Migrate Team Members
  console.log('\nMigrating Team Members...')
  for (const member of teamMembers) {
    const doc = {
      _type: 'teamMember',
      _id: `team-${member.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: member.name,
      role: member.role,
      order: member.order,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ ${member.name}`)
  }

  // Migrate FAQs
  console.log('\nMigrating FAQs...')
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

  // Migrate Services
  console.log('\nMigrating Services...')
  for (const service of services) {
    const doc = {
      _type: 'service',
      _id: `service-${service.slug}`,
      title: service.title,
      slug: { _type: 'slug', current: service.slug },
      subtitle: service.subtitle || null,
      description: service.description,
      icon: service.icon,
      order: service.order,
      features: service.features,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ ${service.title}`)
  }

  // Migrate Financing Partners
  console.log('\nMigrating Financing Partners...')
  for (const partner of financingPartners) {
    const doc = {
      _type: 'financingPartner',
      _id: `financing-${partner.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: partner.name,
      url: partner.url,
      description: partner.description,
      order: partner.order,
      features: partner.features,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ ${partner.name}`)
  }

  console.log('\n✅ Migration complete!')
}

migrate().catch(console.error)
