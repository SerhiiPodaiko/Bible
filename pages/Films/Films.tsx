'use client'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Films.css'

import GalleryImageFive from '@public/images/films/assionOfChrist/gallery_1.jpeg'
import GalleryImageSix from '@public/images/films/assionOfChrist/gallery_2.jpeg'
import GalleryImageSeven from '@public/images/films/assionOfChrist/gallery_3.jpeg'
import GalleryImageEight from '@public/images/films/assionOfChrist/gallery_4.jpeg'
import GalleryImageOne from '@public/images/films/sonOfGod/gallery_1.png'
import GalleryImageTwo from '@public/images/films/sonOfGod/gallery_2.png'
import GalleryImageThree from '@public/images/films/sonOfGod/gallery_3.png'
import GalleryImageFour from '@public/images/films/sonOfGod/gallery_4.jpeg'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1799, min: 1300 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 1299, min: 501 },
    items: 1.5,
  },
  mobileMobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
}

const Films = () => {
  return (
    <section className='relative py-10 text-[#9B9B9B] z-30'>
      <div className='mt-10 px-32 flex flex-col gap-10'>
        <div className='h-full flex flex-col gap-5'>
          <iframe
            className='h-[500px] rounded-[10px]'
            scrolling='no'
            src='https://ashdi.vip/vod/79265?'
            frameBorder='0'
            width='100%'
            height='100%'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
          ></iframe>
          <div className='mt-10 text-justify'>
            <Carousel responsive={responsive} className='flex gap-5'>
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageFive} alt='Image 1' />
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageSix} alt='Image 2' />
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageSeven} alt='Image 3' />
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageEight} alt='Image 4' />
            </Carousel>
            <h3 className='text-white my-5 text-[30px]'>Про що фільм "Страсті Христові":</h3>
            <p className='text-white'>
              Фільм «Страсті Христові» розповідає про останні дні життя Божого Сина. Зраджений одним зі своїх учнів,
              Іудою, Ісус виявляється захопленим солдатами під час молитви. Він зупиняє своїх послідовників, які мають
              намір вступити в бій з охороною і відправляється на суд. Понтій Пілат має намір провести процедуру за
              всіма правилами, не дивлячись на тиск з боку церкви. Він довіряє віщому сну своєї дружини про Ісуса і не
              бажає йому смерті. Пілат двічі дає можливість людям врятувати Христа від страти, але натовп жадає крові і
              навіть після жорстокого знущання над своєю жертвою відмовляє йому в праві на життя. Ісус змушений сам
              нести свій хрест на шляху до Голгофи. Там його вже знесиленого розпинають разом з двома злочинцями. Навіть
              під час нелюдських страждань Христос не думає про себе, а молиться за тих, хто опинився поруч з ним. Як
              тільки Ісус вмирає, починається землетрус, що супроводжується зливою. Місто і його мешканці впадають в
              паніку. Так добігають кінця дні на землі Сина Божого, який помер за людські гріхи.
            </p>
          </div>
        </div>
        <div className='h-full flex flex-col gap-5'>
          <iframe
            className='h-[500px] rounded-[10px]'
            scrolling='no'
            width='100%'
            height='100%'
            src='https://ashdi.vip/vod/2089'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
          ></iframe>
          <div className='mt-10 text-justify'>
            <Carousel responsive={responsive} className='flex gap-5'>
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageOne} alt='Image 1' />
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageTwo} alt='Image 2' />
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageThree} alt='Image 3' />
              <Image className='h-[300px] w-[100%] rounded-[8px]' src={GalleryImageFour} alt='Image 4' />
            </Carousel>
            <h3 className='text-white my-5 text-[30px]'>Про що фільм "Син Божий":</h3>
            <p className='text-white'>
              Чергова інтерпретація біблійної "історії" Ісуса Христа втілена в кінофільмі "Син Божий". Це нове бачення
              всіх подій, які супроводжували життєвий шлях Ісуса Христа, від моментів Його появи на Землі і моментів
              Його Вознесіння. Цікавий погляд режисера Крістофера Спенсера дозволяє подивитися вглиб цієї легенди. Коли
              Ісус з'явився на Землі, Він став цікавий оточуючим, адже історія про Його непорочного зачаття по-істині
              потрясла весь світ. Мудрість і знання Сина Божого заслуговує наслідування і багато його послідовників
              стали учнями Ісуса. Отже, першим етапом стає Народження. Другий етап - Його вчення і ходіння по світу з
              метою проповіді. Одним з найбільш яскравих моментів фільму є Розп'яття Ісуса Христа, яке здатне потрясти
              навіть найсуворіше і кам'яне серце. В "Сина Божого" розп'яття представлено не так люто, як це було
              передано глядачам у виконанні режисера Мела Гібсона. Розп'яття і Вознесіння Ісуса стають по-істині через
              відкуплення всіх гріхів людства. У головній ролі - Діого Моргадо.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Films
