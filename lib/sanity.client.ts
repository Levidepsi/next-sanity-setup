import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type Settings,
  homepageQuery,
  navQuery,
  pageBySlugQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

import { Homepage, PagePayload } from './../types/index'
/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn: true, token })
    : null
}

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}
export async function getNavigation(): Promise<{}> {
  if (client) {
    return (await client.fetch(navQuery)) || {}
  }
  return {}
}

export async function getHomepage(): Promise<Homepage> {
  if (client) {
    return (await client.fetch(homepageQuery)) || {}
  }
  return {}
}

export async function getPageBySlug(
  slug: string,
  token?: string | null
): Promise<PagePayload | null | undefined> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(pageBySlugQuery, { slug })
  }
  return null
}
