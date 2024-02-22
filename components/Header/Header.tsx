'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { PAGE_SLUGS } from '@constants/pages'
import LogoSvg from '@public/icons/logo.svg'
import Navigation from './components/Navigation'

const Header = () => {
  const router = useRouter()

  return (
    <header className='relative flex items-center flex-col gap-4 lg:gap-0 lg:flex-row justify-between py-4 px-[20px] z-20'
    >
      <div className='flex items-center gap-3'>
        <Link href={PAGE_SLUGS.home} title='Лого'>
          <LogoSvg />
        </Link>
        <h1
          onClick={() => router.push(PAGE_SLUGS.home)}
          className='text-[20px] duration-300 hover:text-[#FEBF11] cursor-pointer'
        >
          Тут шукають Бога
        </h1>
      </div>
      <Navigation />
    </header>
  )
}

export default Header
