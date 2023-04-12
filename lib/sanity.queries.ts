import { groq } from 'next-sanity'

export const settingsQuery = groq`*[_type == "settings"][0]{
  title,
  description,
  ogImage,
  address,

}`
export const navQuery = groq`*[_type == "settings"][0] {
  menuItems[]->{
    "slug": slug.current,
    title,
  },

}`

export const homepageQuery = groq`*[_type == "home"][0]{
  ...,
  "featureImage": featureImage.asset->url,
}`

export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
    title,
   content,
   "featureImage": featureImage.asset->url,
   "slug": slug.current,

 
}`

export interface Author {
  name?: string
  picture?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
  address?: string
}
