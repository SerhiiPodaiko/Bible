import { PAGE_SLUGS } from '@constants/pages'
import NotFoundImage from '@public/images/404/404.avif'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col'>
      <div className='mt-5 p-5 flex flex-col gap-5 border border-[#5DE4A9] rounded-[10px]'>
        <h2>Не знайдено</h2>
        <p>Не вдалося знайти запитуваний ресурс</p>
        <Image src={NotFoundImage} className='self-center rounded' alt='404' />
        <Link
          href={PAGE_SLUGS.home}
          className='py-2 px-3 rounded bg-[#5DE4A9] self-center hover:scale-[0.98] duration-300'
        >
          На головну
        </Link>
      </div>
    </div>
  )
}
