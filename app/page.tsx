import { getHomepage, getSettings } from 'lib/sanity.client'


// Example how to add meta tag

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const { featureImage } = await getHomepage()

//   let metaTitle = `Mister Nice`

//   return {
//     title: metaTitle,
//     openGraph: {
//       description:
//         'Mister Nice, the new luxurious French restaurant set in the heart of London’s most desired neighbourhood, Mayfair, will provide an all-day service with simple, fresh and compelling dishes all made using seasonal ingredients. Mister Nice will be a home away from home for its guests and will play host to an eclectic mix of individuals, from visual artists to musicians and the fashion set. Mister Nice promises to provide an exclusive, undeniably tempting atmosphere.',
//       title: metaTitle,
//       // url: "https://admin.profinpartners.com/",
//       siteName: 'Mister Nice',
//       images: [
//         {
//           url: featureImage,
//           width: 500,
//           height: 500,
//         },
//       ],
//     },
//   }
// }

export default async function IndexRoute({ params }: { params: { slug: string } }) {
  // Fetch queries in parallel

  const { title, overview, featureImage, components } = await getHomepage()

  return (
    <>
    This is where Homepage will Render
      {/* <HomepageWrap slug={params.slug} components={components} /> */}
    </>
  )
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
