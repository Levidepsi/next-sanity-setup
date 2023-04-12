import type { BlockSchemaType as Block, Image } from 'sanity'

export interface PagePayload {
  title?: string
  content?: any
  featureImage?: any
  slug?: string
}

export interface Homepage {
  title?: string
  slug?: string
  overview?: Block[]
  featureImage?: any
}
