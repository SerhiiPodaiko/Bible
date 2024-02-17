'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchGetRandomPhotos } from '@lib/fetchGetRandomPhotos'
import SkeletonUI from '@ui/Skeleton/SkeletonUI'

const GalleryItem = ({ photos }: { photos: any }) => {
  const [photosData, setPhotoData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')

  const generateNewPhotos = async () => {
    setIsLoading(true)
    const newPhotos = await fetchGetRandomPhotos(10, query)

    setPhotoData((prevPhotos: any) => [...prevPhotos, ...newPhotos])
    setIsLoading(false)
    setQuery('')
  }

  useEffect(() => {
    setPhotoData(photos)
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <div className='mt-10 grid grid-cols-3 gap-4'>
        {photosData?.map((photo: any) =>
          photo.urls.raw ? (
            <Image
              key={photo.id}
              width={400}
              height={300}
              src={photo.urls.raw}
              className='rounded-[8px] cursor-pointer max-h-[400px] h-full'
              alt={photo.alt_description}
            />
          ) : (
            <SkeletonUI />
          )
        )}
      </div>
      <div className='flex justify-center items-center gap-2'>
        <input
          type='search'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className='p-2 text-[#047E6E] border-b border-[#047E6E] outline-none placeholder:text-[#047E6E]'
          placeholder='Що шукаєте?'
        />
        <button
          className='self-center py-2 px-3 border-2 border-transparent bg-[#047E6E] hover:text-white hover:border-white
          rounded duration-300 disabled:bg-gray-500'
          type='button'
          disabled={!query}
          onClick={generateNewPhotos}
        >
          {isLoading ? 'Загрузка...' : 'Знайти'}
        </button>
      </div>
    </div>
  )
}

export default GalleryItem
