import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const financingPartners = [
  { 
    _id: 'financing-easypay',
    name: "EasyPay Finance", 
    applyUrl: "https://customerappx.easypayfinance.com/application/A52AADEF",
    tagline: "Easy Approval Process",
    order: 1 
  },
  { 
    _id: 'financing-snap-finance',
    name: "Snap Finance", 
    applyUrl: "https://snapf.in/PTgnwlr",
    tagline: "Up to $5,000",
    order: 2 
  },
  { 
    _id: 'financing-affirm',
    name: "Affirm", 
    applyUrl: "",
    tagline: "Pay Over Time",
    order: 3 
  },
  { 
    _id: 'financing-klarna',
    name: "Klarna", 
    applyUrl: "",
    tagline: "Flexible Payments",
    order: 4 
  },
]

async function migrate() {
  console.log('Updating Financing Partners with taglines and applyUrl...\n')

  for (const partner of financingPartners) {
    await client.patch(partner._id)
      .set({ 
        applyUrl: partner.applyUrl,
        tagline: partner.tagline,
      })
      .commit()
    console.log(`  ✓ ${partner.name}`)
  }

  console.log('\n✅ Financing partners updated!')
}

migrate().catch(console.error)
