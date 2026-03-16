import { client } from './client'
import {
  siteSettingsQuery,
  servicesQuery,
  serviceBySlugQuery,
  teamMembersQuery,
  faqsQuery,
  financingPartnersQuery,
  testimonialsQuery,
  pageContentQuery,
} from './queries'

// Types
export interface SiteSettings {
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  hoursWeekday: string
  hoursSaturday: string
  hoursSunday: string
  facebookUrl: string
  yelpUrl: string
  googleMapsUrl: string
  bookingUrl: string
  announcements: { _key: string; text: string; subtext: string }[]
}

export interface Service {
  _id: string
  title: string
  subtitle: string
  description: string
  slug: { current: string }
  icon: string
  image: string
  order: number
  features?: string[]
  warningSigns?: string[]
  extraSections?: { title: string; items: { name: string; desc: string }[] }[]
  benefits?: { title: string; desc: string }[]
  faqs?: { question: string; answer: string }[]
  ctaTitle?: string
  ctaSubtitle?: string
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  photo: string
  order: number
}

export interface FAQ {
  _id: string
  question: string
  answer: string
  order: number
}

export interface FinancingPartner {
  _id: string
  name: string
  logo: string
  applyUrl: string
  tagline: string
  order: number
}

export interface Testimonial {
  _id: string
  name: string
  title: string
  text: string
  rating: number
  image: string | null
  order: number
}

export interface PageSection {
  sectionId: string
  label: string
  title: string
  subtitle: string
  content: unknown[]
  image: string | null
}

export interface PageContent {
  pageId: string
  hero: {
    label: string
    title: string
    subtitle: string
    image: string | null
  }
  sections: PageSection[]
  cta: {
    title: string
    subtitle: string
    backgroundColor: string
  }
}

// Fetch functions
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } })
}

export async function getServices(): Promise<Service[]> {
  return client.fetch(servicesQuery, {}, { next: { revalidate: 60 } })
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch(serviceBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(teamMembersQuery, {}, { next: { revalidate: 60 } })
}

export async function getFAQs(): Promise<FAQ[]> {
  return client.fetch(faqsQuery, {}, { next: { revalidate: 60 } })
}

export async function getFinancingPartners(): Promise<FinancingPartner[]> {
  return client.fetch(financingPartnersQuery, {}, { next: { revalidate: 60 } })
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(testimonialsQuery, {}, { next: { revalidate: 60 } })
}

// Combined fetch for pages that need multiple data types
export async function getHomePageData() {
  const [settings, services, testimonials, faqs, financingPartners, pageContent] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getTestimonials(),
    getFAQs(),
    getFinancingPartners(),
    getPageContent('home'),
  ])
  return { settings, services, testimonials, faqs, financingPartners, pageContent }
}

export async function getAboutPageData() {
  const [settings, teamMembers, faqs] = await Promise.all([
    getSiteSettings(),
    getTeamMembers(),
    getFAQs(),
  ])
  return { settings, teamMembers, faqs }
}

export async function getPageContent(pageId: string): Promise<PageContent | null> {
  return client.fetch(pageContentQuery, { pageId }, { next: { revalidate: 60 } })
}

export async function getFinancingPageData() {
  const [settings, partners, pageContent] = await Promise.all([
    getSiteSettings(),
    getFinancingPartners(),
    getPageContent('financing'),
  ])
  return { settings, partners, pageContent }
}

export async function getContactPageData() {
  const [settings, pageContent] = await Promise.all([
    getSiteSettings(),
    getPageContent('contact'),
  ])
  return { settings, pageContent }
}

export async function getFAQPageData() {
  const [settings, faqs, pageContent] = await Promise.all([
    getSiteSettings(),
    getFAQs(),
    getPageContent('faq'),
  ])
  return { settings, faqs, pageContent }
}

export async function getAboutPageDataFull() {
  const [settings, teamMembers, faqs, pageContent] = await Promise.all([
    getSiteSettings(),
    getTeamMembers(),
    getFAQs(),
    getPageContent('about'),
  ])
  return { settings, teamMembers, faqs, pageContent }
}
