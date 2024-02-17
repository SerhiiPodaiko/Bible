import Image from 'next/image'

import HeroImage from '@public/images/hero.jpg'
import Header from '@components/Header/Header'

const About = () => (
  <section className='relative h-[70vh] w-[80vw] flex flex-col justify-between text-white z-20'>
    <Image
      src={HeroImage}
      className='absolute h-full top-0 bottom-0 left-0 right-0 rounded-[10px]'
      alt='Hero'
    />
    <Header />
    <div className='mb-[100px] z-20'>
      <h1 className='max-w-[900px] w-full mx-auto text-center text-[22px] sm:text-[26px] lg:text-[30px]'>
        Тут ви знайдете найкращі зібрані біблійні фільми про Ісуса Христа. Проповіді пастерів, священників, людей та
        багато іншого.
      </h1>
    </div>
  </section>
)

export default About
