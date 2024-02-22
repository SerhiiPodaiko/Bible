'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import HeroImage from '@public/images/hero.jpg'
import { PAGE_SLUGS } from '@constants/pages'
import Header from '@components/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const homePath = pathname === PAGE_SLUGS.home

  return (
    <div className={cn('min-h-screen relative overflow-y-hidden', homePath && 'flex justify-center items-center')}>
      { !homePath && <Header />  }
      <Image
        src={HeroImage}
        className='top-0 bottom-0 left-0 h-full right-0 absolute  opacity-70'
        alt='Hero'
      />
      {children}
    </div>
  )
}

export default Layout
