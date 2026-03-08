import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  useCdn: false,
})

// Map service slugs to local images (using transmission images for now)
const SERVICE_IMAGES: Record<string, string> = {
  'transmission': 'transmissions_hero.png',
  'diagnostic': 'transmission1.png',
  'brakes': 'tranmission2.png',
  'hvac': 'tranmission3.png',
  'oil-change': 'bg.jpg',
}

async function uploadImage(filename: string): Promise<string> {
  const filePath = join(process.cwd(), 'public', filename)
  
  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }
  
  const imageBuffer = readFileSync(filePath)
  
  const asset = await client.assets.upload('image', imageBuffer, {
    filename,
  })
  
  console.log(`Uploaded ${filename}: ${asset._id}`)
  return asset._id
}

async function updateService(slug: string, imageAssetId: string) {
  // Find the document
  const doc = await client.fetch(`*[_type == "service" && slug.current == $slug][0]._id`, { slug })
  
  if (!doc) {
    console.log(`No service found for slug: ${slug}`)
    return
  }
  
  // Update with image
  await client.patch(doc)
    .set({
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      },
    })
    .commit()
  
  console.log(`Updated service ${slug} with image`)
}

async function main() {
  console.log('Uploading service images...\n')
  
  for (const [slug, filename] of Object.entries(SERVICE_IMAGES)) {
    try {
      console.log(`Processing ${slug}...`)
      const assetId = await uploadImage(filename)
      await updateService(slug, assetId)
      console.log(`✓ ${slug} done\n`)
    } catch (error) {
      console.error(`Error processing ${slug}:`, error)
    }
  }
  
  console.log('Done!')
}

main()
