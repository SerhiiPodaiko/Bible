import Image from 'next/image'

import ScreenOne from '@public/images/sermons/screen-1.png'
import ScreenTwo from '@public/images/sermons/screen-2.png'
import ScreenLogoTwo from '@public/images/sermons/screenLogo-2.jpeg'
import ScreenThree from '@public/images/sermons/screen-3.png'

const Sermons = () => {
  return (
    <section className='relative z-30 py-5 text-[#047E6E] p-5'>
      <main className='py-5'>
        <div className='flex flex-col gap-3'>
          <div className='p-5 flex flex-col items-start gap-2 border border-white rounded-[8px]'>
            <div className='p-5 flex flex-col items-center w-full gap-3'>
              <h2 className='text-3xl border-t-blue-600 text-green-500'>Церква Спасителя Христа</h2>
              <a
                href='https://christ.org.ua/video/'
                className='p-2 text-white bg-green-500 max-w-[200px] w-full text-center rounded duration-300 hover:bg-[#FEBF11]'
                target='_blank'
              >
                Дивитись
              </a>
            </div>
            <Image src={ScreenOne} alt='Церква Спасителя Христа м.Тернопіль' />
          </div>
          <div className='p-5 flex flex-col items-start gap-2 border border-white rounded'>
            <div className='flex flex-col gap-5 items-center'>
              <Image src={ScreenLogoTwo} alt='Спільнота Галілея' />
              <Image src={ScreenTwo} alt='Спільнота Галілея' />
            </div>
            <h2 className='text-2xl'>Спільнота Галілея</h2>
            <a
              href='https://www.youtube.com/@GalileaUkraine/playlists'
              className='p-2 bg-amber-400 text-white rounded duration-300 hover:bg-[#047E6E]'
              target='_blank'
            >
              Дивитись
            </a>
          </div>
          <div className='p-5 flex flex-col items-start gap-2 border border-white rounded'>
            <Image src={ScreenThree} alt='Свяшенник Василь Колодій' />
            <h2 className='text-2xl'>Свяшенник Василь Колодій</h2>
            <a
              href='https://www.youtube.com/@andrijmackiv7503/videos'
              className='p-2 bg-amber-400 text-white rounded duration-300 hover:bg-[#047E6E]'
              target='_blank'
            >
              Дивитись
            </a>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Sermons
