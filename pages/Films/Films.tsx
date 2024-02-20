'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Films.css'


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
  return (
    <section className='relative p-2 lg:p-10 text-[#9B9B9B] '>
      <Carousel responsive={responsiveScreen}>
        <div className='flex flex-col'>
            <iframe
              className='h-[50vh] rounded-[10px]'
              scrolling='no'
              src='https://ashdi.vip/vod/79265?'
              frameBorder='0'
              width='100%'
              height='100%'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
            ></iframe>

          <div className='h-[50vh] overflow-y-auto'>
            <h3 className='text-white my-5 text-[30px]'>Про що фільм "Страсті Христові":</h3>
            <p className='text-white'>
              Фільм «Страсті Христові» розповідає про останні дні життя Божого Сина. Зраджений одним зі своїх учнів,
              Іудою, Ісус виявляється захопленим солдатами під час молитви. Він зупиняє своїх послідовників, які
              мають
              намір вступити в бій з охороною і відправляється на суд. Понтій Пілат має намір провести процедуру за
              всіма правилами, не дивлячись на тиск з боку церкви. Він довіряє віщому сну своєї дружини про Ісуса і
              не
              бажає йому смерті. Пілат двічі дає можливість людям врятувати Христа від страти, але натовп жадає
              крові
              і
              навіть після жорстокого знущання над своєю жертвою відмовляє йому в праві на життя. Ісус змушений сам
              нести свій хрест на шляху до Голгофи. Там його вже знесиленого розпинають разом з двома злочинцями.
              Навіть
              під час нелюдських страждань Христос не думає про себе, а молиться за тих, хто опинився поруч з ним.
              Як
              тільки Ісус вмирає, починається землетрус, що супроводжується зливою. Місто і його мешканці впадають в
              паніку. Так добігають кінця дні на землі Сина Божого, який помер за людські гріхи.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <iframe
            className='h-[50vh] rounded-[10px]'
            scrolling='no'
            width='100%'
            height='100%'
            src='https://ashdi.vip/vod/2089'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
          ></iframe>
          <div className='h-[50vh] mt-10 text-justify overflow-y-auto'>
            <h3 className='text-white my-5 text-[30px]'>Про що фільм "Син Божий":</h3>
            <p className='text-white'>
              Чергова інтерпретація біблійної "історії" Ісуса Христа втілена в кінофільмі "Син Божий". Це нове бачення
              всіх подій, які супроводжували життєвий шлях Ісуса Христа, від моментів Його появи на Землі і моментів
              Його Вознесіння. Цікавий погляд режисера Крістофера Спенсера дозволяє подивитися вглиб цієї легенди.
              Коли
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
      </Carousel>
    </section>
  )
}

export default Films
