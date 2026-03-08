import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { teamMember } from './teamMember'
import { faq } from './faq'
import { financingPartner } from './financingPartner'
import { siteSettings } from './siteSettings'
import { testimonial } from './testimonial'
import { pageContent } from './pageContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, service, teamMember, faq, financingPartner, testimonial, pageContent],
}
