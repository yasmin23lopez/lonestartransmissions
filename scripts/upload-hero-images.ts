import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Hero images to upload - using existing images from public folder
const heroImages: Record<string, string> = {
  'about': 'public/about_hero.jpg',
}

async function uploadImage(filePath: string): Promise<string | null> {
  try {
    const fullPath = path.resolve(filePath)
    if (!fs.existsSync(fullPath)) {
      console.log(`  File not found: ${fullPath}`)
      return null
    }
    
    const imageBuffer = fs.readFileSync(fullPath)
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(filePath),
    })
    console.log(`  ✓ Uploaded: ${filePath}`)
    return asset._id
  } catch (error) {
    console.error(`  ✗ Error uploading ${filePath}:`, error)
    return null
  }
}

async function updatePageWithHeroImage(pageId: string, imageAssetId: string) {
  try {
    await client
      .patch(`page-${pageId}`)
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
    console.log(`  ✓ Updated page: ${pageId}`)
  } catch (error) {
    console.error(`  ✗ Error updating page ${pageId}:`, error)
  }
}

async function main() {
  console.log('Uploading hero images to Sanity...\n')

  for (const [pageId, imagePath] of Object.entries(heroImages)) {
    console.log(`Processing ${pageId}...`)
    const assetId = await uploadImage(imagePath)
    if (assetId) {
      await updatePageWithHeroImage(pageId, assetId)
    }
  }

  console.log('\nDone!')
}

main()
