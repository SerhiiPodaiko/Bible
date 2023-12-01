import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

import '@styles/globals.scss'
import { i18n, Locale } from '../../i18n.config'

// Fonts
const font = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => {
    {
      lang: locale
    }
  })
}

// Metadata
export const metadata: Metadata = {
  title: 'Біблія | Головна',
  description: 'dss',
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={params.lang}>
      <body className={font.className}>{children}</body>
    </html>
  )
}
