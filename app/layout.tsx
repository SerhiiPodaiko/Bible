import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

// Globals styles
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
  title: 'Біблія | Головна',
  description:
    'Досліджуйте світ Святого Письма та слова Божого на веб-сайті "Біблія | Дім". Знаходьте вдохновлення, роздуми та глибоке розуміння біблійних текстів. Поглибіться у вивчення духовності та віри через унікальний підхід до Біблії. Спільно досліджуймо вчення та принципи, щоб збагатити свій духовний шлях. Створено з любов\'ю для тих, хто шукає мудрість та світло в слові Божому. #БіблійнеВивчення #СловоБоже #ДуховнийРозвиток',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
