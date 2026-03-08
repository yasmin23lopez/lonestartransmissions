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

const testimonialImages: Record<string, string> = {
  'testimonial-1': 'review1.jpg',
  'testimonial-2': 'review_2.jpg',
}

async function uploadImage(filePath: string) {
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

async function uploadTestimonialImages() {
  console.log('Uploading testimonial images...\n')

  for (const [docId, imageName] of Object.entries(testimonialImages)) {
    try {
      const imageRef = await uploadImage(imageName)
      await client.patch(docId).set({ image: imageRef }).commit()
      console.log(`  ✓ ${imageName}`)
    } catch (error) {
      console.log(`  ✗ ${imageName} - ${error}`)
    }
  }

  console.log('\n✅ Testimonial images uploaded!')
}

uploadTestimonialImages().catch(console.error)
