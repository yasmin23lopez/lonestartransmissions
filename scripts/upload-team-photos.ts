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

const teamPhotos = [
  { id: 'team-armando', photo: 'public/armando_photo.jpg' },
  { id: 'team-juvenal-toledo', photo: 'public/juvenal_photo.jpg' },
  { id: 'team-gerardo-campos', photo: 'public/gerardo_photo.jpg' },
  { id: 'team-german-guerrero', photo: 'public/german_photo.jpg' },
  { id: 'team-jose-torres', photo: 'public/jose_photo.jpg' },
  { id: 'team-george-martinez', photo: 'public/george_photo.jpg' },
]

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

async function updateTeamMemberPhoto(memberId: string, imageAssetId: string) {
  try {
    await client
      .patch(memberId)
      .set({
        photo: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAssetId,
          },
        },
      })
      .commit()
    console.log(`  ✓ Updated team member: ${memberId}`)
  } catch (error) {
    console.error(`  ✗ Error updating ${memberId}:`, error)
  }
}

async function main() {
  console.log('Uploading team photos to Sanity...\n')

  for (const member of teamPhotos) {
    console.log(`Processing ${member.id}...`)
    const assetId = await uploadImage(member.photo)
    if (assetId) {
      await updateTeamMemberPhoto(member.id, assetId)
    }
  }

  console.log('\nDone!')
}

main()
