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
    <div className={cn('relative', homePath ? 'h-screen flex justify-center items-center' : '')}>
      { !homePath && <Header />  }
      <Image
        src={HeroImage}
        className='absolute h-full top-0 bottom-0 left-0 right-0 opacity-70'
        alt='Hero'
      />
      {children}
    </div>
  )
}

export default Layout
