'use client'
import { PAGE_SLUGS } from '@constants/pages'
import Gallery11Image from '@public/images/gallery/child.avif'
import Gallery2Image from '@public/images/gallery/jesus-1.jpeg'
import Gallery3Image from '@public/images/gallery/jesus-2.jpeg'
import Gallery4Image from '@public/images/gallery/jesus-3.jpeg'
import Gallery10Image from '@public/images/gallery/jesus-4.jpeg'
import Gallery9Image from '@public/images/gallery/small.jpeg'
import Gallery5Image from '@public/images/gallery/wolf.jpeg'
import Gallery7Image from '@public/images/gallery/woman.jpeg'
import Gallery8Image from '@public/images/gallery/word.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const galleryData = [
  Gallery4Image,
  Gallery9Image,
  Gallery10Image,
  Gallery11Image,
  Gallery3Image,
  Gallery7Image,
  Gallery5Image,
  Gallery2Image,
  Gallery8Image,
]

const Gallery = () => {
  const [galleries, _] = useState<any[] | null>(galleryData)
  const [showAll, setShowAll] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.includes(PAGE_SLUGS.gallery)) {
      setShowAll(true)
    }
  }, [pathname])

  return (
    <section>
      <div className={`mt-10 flex flex-wrap gap-4 mb-10 ${!showAll && 'flex-nowrap'}`}>
        {galleries?.slice(0, showAll ? galleries.length : 3).map((gallery, index) => (
          <Image
            key={index}
            src={gallery}
            className={`rounded-[8px] cursor-pointer duration-300 opacity-[0.7] hover:scale-[0.99] hover:opacity-100 ${
              !showAll && 'h-[400px] w-[33%]'
            }`}
            alt='Gallery'
          />
        ))}
      </div>
      {!showAll && (
        <Link className='py-2 px-3 rounded border border-white self-start' href={PAGE_SLUGS.gallery}>
          Подивитись більше
        </Link>
      )}
    </section>
  )
}

export default Gallery
