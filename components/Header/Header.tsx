'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { PAGE_SLUGS } from '@constants/pages'
import LogoSvg from '@public/icons/logo.svg'
import MenuCloseSvg from '@public/icons/menu-close.svg'
import MenuSvg from '@public/icons/menu.svg'
import { usePathname, useRouter } from 'next/navigation'
import Navigation from './components/Navigation'

const Header = () => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false)
  const isTablet = useMediaQuery({ maxWidth: 1023 })
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => setMenuStatus(false), [pathname])

  return (
    <header className='relative flex items-center justify-between py-4 px-[20px] z-10'>
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
      <div
        className={cn(
          'flex items-center gap-10 duration-300',
          isTablet
            ? menuStatus
              ? 'fixed top-0 left-0 h-screen flex-col justify-center items-center z-50 w-full bg-[#047E6E]'
              : 'hidden'
            : ''
        )}
      >
        <Navigation />
      </div>
      <div className='flex lg:hidden z-50' onClick={() => setMenuStatus(prevStatus => !prevStatus)}>
        {menuStatus ? <MenuCloseSvg /> : <MenuSvg />}
      </div>
    </header>
  )
}

export default Header
