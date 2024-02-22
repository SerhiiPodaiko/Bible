import Link from 'next/link'
import Image from 'next/image'

import { PAGE_SLUGS } from '@constants/pages'
import NotFoundImage from '@public/images/404/404.avif'

export default function NotFound() {
  return (
    <div className='relative flex flex-col z-50 mx-1 lg:mx-20 bg-white rounded-[10px]'>
      <div className='mt-5 p-5 flex flex-col gap-5'>
          <h2 className='text-2xl text-center'>Такого ресурсу не знайдено</h2>
        <Image src={NotFoundImage} className='self-center rounded-[10px]' alt='404' />
        <div className='flex items-center justify-center gap-2'>
          <Link
            href={PAGE_SLUGS.home}
            className='py-2 px-3 border border-[#5DE4A9] text-[#5DE4A9] rounded bg-transparent self-center hover:scale-[0.98] duration-300'
          >
            На головну
          </Link>
          <a
            href="javascript:window.location.reload(true)"
            className='py-2 px-3 rounded bg-[#5DE4A9] self-center hover:scale-[0.98] duration-300 text-white'
          >
              Спробувати ще раз
          </a>
        </div>
      </div>
    </div>
  )
}
