import { PAGE_SLUGS } from '@constants/pages'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='flex-col lg:flex-row flex items-center gap-5'>
      <a
        target='_blank'
        href='https://www.bible.com/bible/188/MAT.1.UKRK'
        className='py-2 px-3 hover:bg-[#C46529] rounded duration-300'
      >
        Біблія
      </a>
      <Link href={PAGE_SLUGS.films} className='py-2 px-3 hover:bg-[#C46529] rounded duration-300'>
        Всі Фільми
      </Link>
    </nav>
  )
}

export default Navigation
