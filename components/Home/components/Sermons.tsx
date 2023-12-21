import HomilistImage from '@public/images/homilist/homilist_01.jpeg'
import Image from 'next/image'
import { CiYoutube } from 'react-icons/ci'
import { FaTiktok } from 'react-icons/fa'

const sermons = [
  { title: 'Церква Спасителя Христа м.Тернопіль', author: 'Іван Пендишляк' },
  { title: 'Церква Спасителя Христа м.Тернопіль', author: 'Василь Колодій' },
  { title: 'Церква Спасителя Христа м.Тернопіль', author: 'Роман Братковськийц' },
]

const Sermons = () => {
  return (
    <section className='snap-center section'>
      <h2 className='pl-7 mt-10 text-[30px] mb-5 bg-[#63A59B] border-l border-l--[#63A59B]'>Найкращі проповіді</h2>
      <div className='flex gap-5'>
        <div className='pb-5 flex flex-col bg-[#FCF8F4] items-start gap-3 shadow-[0_35px_60px_5px_rgba(0,0,0,0.2)] rounded-[8px]'>
          <Image src={HomilistImage} className='rounded-[8px] w-full' alt='Проповідник | Александр Димиторов' />
          <h4 className='px-5 text-[14px]'>Олександр Димитров</h4>
          <div className='px-5  flex items-center gap-1'>
            <a
              href='https://www.youtube.com/@alexanderdimitrov14'
              target='_blank'
              className='py-2 px-3 border border-white hover:bg-[#63A59B] duration-300 rounded-[8px]'
            >
              <CiYoutube size={20} />
            </a>
            <a
              href='https://www.tiktok.com/@alexanderdimitrov14?_t=8hz7BmOaqRC&_r=1'
              target='_blank'
              className='py-2 px-3 border border-white hover:bg-[#63A59B] duration-300 rounded-[8px]'
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sermons
