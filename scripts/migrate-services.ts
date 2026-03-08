import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const services = [
  { 
    _id: 'service-diagnostic',
    title: "FREE DIAGNOSTIC", 
    subtitle: "25-Point Inspection", 
    description: "Comprehensive diagnostic to identify any issues. No charge, no obligation.",
    slug: { _type: 'slug', current: 'diagnostic' },
    icon: "CarDiagnosticIcon",
    order: 1 
  },
  { 
    _id: 'service-oil-change',
    title: "OIL CHANGE", 
    subtitle: "Full Service", 
    description: "Keep your engine running smooth with regular oil changes and filter replacements.",
    slug: { _type: 'slug', current: 'oil-change' },
    icon: "OilChangeIcon",
    order: 2 
  },
  { 
    _id: 'service-brakes',
    title: "BRAKES", 
    subtitle: "Repair & Replacement", 
    description: "Brake pads, rotors, calipers—we handle all brake repairs to keep you safe.",
    slug: { _type: 'slug', current: 'brakes' },
    icon: "BrakesIcon",
    order: 3 
  },
  { 
    _id: 'service-hvac',
    title: "HEAT OR A/C", 
    subtitle: "Climate Control", 
    description: "Stay comfortable year-round with our heating and A/C repair services.",
    slug: { _type: 'slug', current: 'hvac' },
    icon: "HeatACIcon",
    order: 4 
  },
  { 
    _id: 'service-transmission',
    title: "TRANSMISSION", 
    subtitle: "Repair & Rebuild", 
    description: "Expert service for automatic and manual transmissions—repairs, rebuilds, and maintenance.",
    slug: { _type: 'slug', current: 'transmission' },
    icon: "TransmissionIcon",
    order: 5 
  },
]

async function migrate() {
  console.log('Migrating Services...\n')

  for (const service of services) {
    const doc = {
      _type: 'service',
      ...service,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ ${service.title}`)
  }

  console.log('\n✅ Services migration complete!')
}

migrate().catch(console.error)
