'use client'
import NotFoundImage from '@public/images/404.avif'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Error client', error)
  }, [error])

  return (
    <div className='mt-5 p-5 flex flex-col gap-5 border border-[#63A59B] rounded'>
      <h2>{error ? error.message : 'Щось пішло не так!'}</h2>
      <Image src={NotFoundImage} className='self-center rounded' alt='404' />
      <button
        onClick={() => reset()}
        className='py-2 px-3 rounded bg-[#63A59B] self-center hover:scale-[0.98] duration-300'
      >
        Спробуйте знову
      </button>
    </div>
  )
}
