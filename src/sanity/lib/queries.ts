import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  phone,
  email,
  address,
  city,
  state,
  zip,
  hoursWeekday,
  hoursSaturday,
  hoursSunday,
  facebookUrl,
  yelpUrl,
  googleMapsUrl,
  bookingUrl,
  announcements[]{
    _key,
    text,
    subtext
  }
}`

// Services
export const servicesQuery = groq`*[_type == "service"] | order(order asc){
  _id,
  title,
  subtitle,
  description,
  slug,
  icon,
  "image": image.asset->url,
  order
}`

// Team Members
export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  role,
  "photo": photo.asset->url,
  order
}`

// FAQs
export const faqsQuery = groq`*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer,
  order
}`

// Financing Partners
export const financingPartnersQuery = groq`*[_type == "financingPartner"] | order(order asc){
  _id,
  name,
  "logo": coalesce(logo.asset->url, url),
  "applyUrl": coalesce(applyUrl, url),
  tagline,
  order
}`

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  title,
  text,
  rating,
  "image": image.asset->url,
  order
}`

// Page Content
export const pageContentQuery = groq`*[_type == "pageContent" && pageId == $pageId][0]{
  pageId,
  hero {
    label,
    title,
    subtitle,
    "image": image.asset->url
  },
  sections[] {
    sectionId,
    label,
    title,
    subtitle,
    content,
    "image": image.asset->url
  },
  cta {
    title,
    subtitle,
    backgroundColor
  }
}`
