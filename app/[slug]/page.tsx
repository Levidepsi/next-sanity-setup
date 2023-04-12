import { getPageBySlug } from 'lib/sanity.client'
import { previewData } from 'next/headers'
import { notFound } from 'next/navigation'

// Example how to add meta tag
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const preview = previewData()
//   const token = isPreviewData(preview) ? preview.token : null

//   // const token = previewData()?.token ?? null
//   const page = await getPageBySlug(params.slug, token)

//   let metaTitle = `Mister Nice | ${page?.title}`

//   return {
//     title: metaTitle,
//     openGraph: {
//       description: `Mister Nice | ${page?.title}`,
//       title: metaTitle,
//       // url: "https://admin.profinpartners.com/",
//       siteName: 'Mister Nice',
//       images: [
//         {
//           url: page?.featureImage,
//           width: 500,
//           height: 500,
//         },
//       ],
//     },
//   }
// }

interface PreviewData {
  token?: string
  // add any other properties that `previewData()` may return
}

function isPreviewData(data: any): data is PreviewData {
  return typeof data === 'object' && data !== null && 'token' in data
}

export default async function PageSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  // Fetch queries in parallel
  //const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])
  const preview = previewData()
  const token = isPreviewData(preview) ? preview.token : null

  const page = await getPageBySlug(params.slug, token)

  // page dynamic
  if (page) {
    return (
      <>
        This is where pages will render
        {/* <Page data={page} slug={params.slug}></Page> */}
      </>
    )
  }

  // if page is not found render notFound from nextjs

  return notFound()
}

export async function generateStaticParams() {
  return [
    // examples
    { slug: 'about' }, // -> lets cache these pages as they will never change!
    // ... they will automatically detect other pages and cached it with 'force-cache' option by default. This is the new features of next js 13, bitch!
  ]
}
