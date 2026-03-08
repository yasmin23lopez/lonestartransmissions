import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { join } from 'path'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  useCdn: false,
})

// Map pages to local images
const PAGE_HERO_IMAGES: Record<string, string> = {
  'contact': 'bg2.jpg',
  'financing': 'bg3.jpg', 
  'faq': 'bg.jpg',
}

async function uploadImage(filename: string): Promise<string> {
  const filePath = join(process.cwd(), 'public', filename)
  const imageBuffer = readFileSync(filePath)
  
  const asset = await client.assets.upload('image', imageBuffer, {
    filename,
  })
  
  console.log(`Uploaded ${filename}: ${asset._id}`)
  return asset._id
}

async function updatePageContent(pageId: string, imageAssetId: string) {
  // Find the document
  const doc = await client.fetch(`*[_type == "pageContent" && pageId == $pageId][0]._id`, { pageId })
  
  if (!doc) {
    console.log(`No pageContent found for ${pageId}`)
    return
  }
  
  // Update with image
  await client.patch(doc)
    .set({
      'hero.image': {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      },
    })
    .commit()
  
  console.log(`Updated ${pageId} with hero image`)
}

async function main() {
  console.log('Uploading hero images for pages...\n')
  
  for (const [pageId, filename] of Object.entries(PAGE_HERO_IMAGES)) {
    try {
      console.log(`Processing ${pageId}...`)
      const assetId = await uploadImage(filename)
      await updatePageContent(pageId, assetId)
      console.log(`✓ ${pageId} done\n`)
    } catch (error) {
      console.error(`Error processing ${pageId}:`, error)
    }
  }
  
  console.log('Done!')
}

main()
