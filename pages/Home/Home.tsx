import Image from 'next/image'
import HeroImage from '@public/images/hero.jpg'
import Header from '@components/Header/Header'

const Home = () => (
  <section
    className='relative w-screen h-[100vh] lg:h-[70vh] lg:w-[80vw] flex flex-col text-white z-20 justify-between'>
    <Image
      src={HeroImage}
      className='absolute h-full top-0 bottom-0 left-0 right-0 rounded-0 lg:rounded-[10px]'
      alt='Hero'
    />
    <Header />
    <div className='mb-[100px] z-20'>
      <h1 className='px-3 lg:mx-0 text-center w-full mx-auto text-[22px text-[14px] sm:text-[26px] lg:text-[30px]'>
        Тут ви знайдете найкращі зібрані біблійні фільми про Ісуса Христа. Проповіді пастерів, священників, людей та
        багато іншого.
      </h1>
    </div>
  </section>
)
export default Home
