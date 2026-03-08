import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import path from 'path'

const client = createClient({
  projectId: '1dsud7is',
  dataset: 'production',
  token: 'skKKGmTwZlEe4OK8fFhB5KfgclmrxF3vWeoXBocqmV2a9wnSNhIPVU4RxoFEt4TioBjdSOHyyr7om3Ry30VEssqIxMGK1sTqid5r5YRaH6Shzev2QyIOJCUCfLuxQnWDUmRD01YpoqgnEt2FXlhGx9FMzALzq9opv0CgT8zGzfRX4tlqPOdB',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Mapping of documents to their images
const teamMemberImages: Record<string, string> = {
  'team-armando': 'armando_photo.jpg',
  'team-juvenal-toledo': 'juvenal_photo.jpg',
  'team-gerardo-campos': 'gerardo_photo.jpg',
  'team-german-guerrero': 'german_photo.jpg',
  'team-jose-torres': 'jose_photo.jpg',
  'team-george-martinez': 'george_photo.jpg',
}

const financingImages: Record<string, string> = {
  'financing-easypay': 'easypay.webp',
  'financing-snap-finance': 'snap.jpeg',
  'financing-affirm': 'affirm.png',
  'financing-klarna': 'klarna.png',
}

async function uploadImage(filePath: string): Promise<{ _type: string; asset: { _type: string; _ref: string } }> {
  const fullPath = path.join(process.cwd(), 'public', filePath)
  const imageAsset = await client.assets.upload('image', createReadStream(fullPath), {
    filename: filePath,
  })
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: imageAsset._id,
    },
  }
}

async function uploadImages() {
  console.log('Uploading images...\n')

  // Upload Team Member photos
  console.log('Team Members:')
  for (const [docId, imageName] of Object.entries(teamMemberImages)) {
    try {
      const imageRef = await uploadImage(imageName)
      await client.patch(docId).set({ photo: imageRef }).commit()
      console.log(`  ✓ ${imageName}`)
    } catch (error) {
      console.log(`  ✗ ${imageName} - ${error}`)
    }
  }

  // Upload Financing Partner logos
  console.log('\nFinancing Partners:')
  for (const [docId, imageName] of Object.entries(financingImages)) {
    try {
      const imageRef = await uploadImage(imageName)
      await client.patch(docId).set({ logo: imageRef }).commit()
      console.log(`  ✓ ${imageName}`)
    } catch (error) {
      console.log(`  ✗ ${imageName} - ${error}`)
    }
  }

  console.log('\n✅ Image upload complete!')
}

uploadImages().catch(console.error)
