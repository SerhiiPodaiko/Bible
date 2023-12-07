import cn from 'classnames'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

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
      <body className={cn(font.className, 'green')}>
        <Header />
        <main className='lg:px-20 md:px-14 px-[20px] py-5'>{children}</main>
      </body>
    </html>
  )
}
