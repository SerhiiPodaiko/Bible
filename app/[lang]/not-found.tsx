import { PAGE_SLUGS } from '@constants/pages'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col'>
      <h2>Не знайдено</h2>
      <p>Не вдалося знайти запитуваний ресурс</p>
      <Link href={PAGE_SLUGS.home}>На головну</Link>
    </div>
  )
}
