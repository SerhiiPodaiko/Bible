import cn from 'classnames'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import CookieBanner from '@components/CookieBanner'
import GoogleAnalytics from '@components/GoogleAnalytics'
import Header from '@components/Header/Header'
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
  title: 'Головна | Проповіді',
  description:
    'Найкращі проповіді. Зібрки проповідей. Євангелісти. Пояснення Божого слова. Єванглія. Біблія. Священники. Найкращий священник. Церка. Віра. Надія. Любов. Спасіння. Нарождення згори. Хрещення Духом святим. Світі. Кінець світу, Прихід Усуса Христа. Месія',
  icons: {
    icon: '/favicons/bible-home.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='uk'>
      <GoogleAnalytics GA_MEASUREMENT_ID={'G-N3DSNYXS69'} />
      <body className={font.className}>
        <Header />
        <main className={cn('lg:px-20 md:px-14 px-[20px] py-[80px]')}>{children}</main>
        <CookieBanner />
      </body>
    </html>
  )
}
