'use client'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import ArrowRight from '@public/arrow-right.svg'
import './Films.css'
import { FILMS_DATA } from './data'

const responsiveScreen = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1799, min: 1300 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1299, min: 501 },
    items: 1,
  },
  mobileMobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
}

const Films = () => {
  const [statusDescription, setStatusDescription] = useState<boolean>(false)

  return (
    <section className='relative p-2 lg:p-10 text-[#9B9B9B] overscroll-y-auto'>
      <Carousel responsive={responsiveScreen}>
        {
          FILMS_DATA.map(film => (
            <div className='flex flex-col' key={film.id}>
              <iframe
                className='h-[60vh] rounded-[10px]'
                scrolling='no'
                src='https://ashdi.vip/vod/79265?'
                frameBorder='0'
                width='100%'
                height='100%'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
              ></iframe>

              <div className=''>
                <h3 className='text-white my-5 text-[30px]'>Про що фільм "{film.title}":</h3>
                <div className='flex flex-col p-4 text-black bg-white rounded-[10px] opacity-70 text-[14px] lg:text-[20px] duration-300'>
                  <p>{ statusDescription ? film.description :  film.description.slice(0, 300)}</p>
                  <div
                    className='w-[45px] h-[45px] flex items-center justify-center bg-yellow-500 rounded-full cursor-pointer duration-300 hover:translate-y-3'
                    onClick={() => setStatusDescription(prev => !prev)}
                  >
                    <ArrowRight className={`${statusDescription ? 'rotate-[270deg]' : 'rotate-[90deg]'}`} />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </section>
  )
}

export default Films
