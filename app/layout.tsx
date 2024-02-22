import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import GoogleAnalytics from '@components/Analytics/GoogleAnalytics'
import CookieBanner from '@components/CookieBanner/CookieBanner'
import Layout from '@components/Layout/Layout'
import '@styles/globals.scss'

// Fonts
const font = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

// Metadata
export const metadata: Metadata = {
  title: 'Головна | Тут шукають Бога',
  description:
    'Найкращі проповіді. Зібрки проповідей. Євангелісти. Пояснення Божого слова. Єванглія. Біблія. Священники. Найкращий священник. ' +
    'Церка. Віра. Надія. Любов. Спасіння. Нарождення згори. Хрещення Духом святим. Світі. Кінець світу, Прихід Усуса Христа. Месія. Літургія, Святі Таїнства.',
  icons: {
    icon: '/favicons/bible-home.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='uk' suppressHydrationWarning>
      <GoogleAnalytics GA_MEASUREMENT_ID={'G-N3DSNYXS69'} />
      <body className={font.className}>
      <Layout>
        {children}
      </Layout>
      <CookieBanner />
      </body>
    </html>
  )
}
