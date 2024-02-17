import { Metadata } from 'next'
import Films from '@pages/Films/Films'


export const metadata: Metadata = {
  title: 'Фільми',
  description: 'Фільми про Ісуса Христа. Життя Ісуса Христа. Господь наш Спаситель. Бог. Спасіння. Біблія. Блага звістка',
}

const FilmsPage = () => <Films />

export default FilmsPage
