'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import GlobalSearch from '@components/GlobalSearch/GlobalSearch'
import Navigation from '@components/Navigation/Navigation'
import { PAGE_SLUGS } from '@constants/pages'
import LogoSvg from '@public/icons/logo.svg'
import MenuCloseSvg from '@public/icons/menu-close.svg'
import MenuSvg from '@public/icons/menu.svg'

const Header = () => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false)
  const isTablet = useMediaQuery({ maxWidth: 1023 })

  return (
    <header className='fixed top-0 right-0 left-0 w-full flex items-center justify-between py-4 px-[20px] lg:px-20 bg-[#63A59B] '>
      <div className='flex items-center gap-3'>
        <Link href={PAGE_SLUGS.home}>
          <LogoSvg />
        </Link>
        <h1 className='text-[20px] duration-300 hover:text-[#FEBF11]'>Тут шукають Бога</h1>
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
        <GlobalSearch />
      </div>
      <div className='flex lg:hidden z-50' onClick={() => setMenuStatus(prevStatus => !prevStatus)}>
        {menuStatus ? <MenuCloseSvg /> : <MenuSvg />}
      </div>
    </header>
  )
}

export default Header
