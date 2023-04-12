import 'tailwindcss/tailwind.css'
import 'public/font/font.css'

import { getNavigation, getSettings } from 'lib/sanity.client'

import { usePathname } from 'next/navigation'

// export const metadata = {
//   icons: {
//     icon: '/images/logo.svg',
//   },
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = (await getSettings()) || []
  const navigation = (await getNavigation()) || []

  // layout
  // provider
  // header
  // Homepage
  // - body
  // image

  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
