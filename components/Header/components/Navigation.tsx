import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PAGE_SLUGS } from '@constants/pages'

const links = [
  {
    path: PAGE_SLUGS.films,
    title: 'Фільми'
  },
  {
    path: PAGE_SLUGS.sermons,
    title: 'Проповіді'
  }
]

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className='flex-col lg:flex-row flex items-center gap-5'>
      <a
        target='_blank'
        href='https://www.bible.com/bible/188/MAT.1.UKRK'
        className='py-2 px-3 border-2 border-transparent hover:bg-transparent hover:text-white
         hover:border-white rounded duration-300'
      >
        Біблія
      </a>
      <a
        target='_blank'
        href='https://www.bible.com/bible/188/PSA.1.UKRK'
        className='py-2 px-3 border-2 border-transparent hover:bg-transparent hover:text-white
         hover:border-white rounded duration-300'
      >
        Псалми
      </a>
      {
        links.map((link, index) => (
          <Link
            key={link.title}
            href={link.path}
            className={`py-2 px-3 border-2 border-transparent hover:bg-transparent hover:text-white
         hover:border-white rounded duration-300 ${pathname === link.path ? 'text-white bg-[#C46529] hover:bg-[#C46529] hover:border-[#C46529]' : 'bg-transparent'}`}
          >
            {link.title}
          </Link>
        ))
      }
    </nav>
  )
}

export default Navigation
