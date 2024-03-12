import Image from 'next/image'

import { SERMONS_DATA } from '../../makeData/sermonsData'

const Sermons = () => {
  return (
    <section className='relative z-30 py-5 text-[#047E6E] p-5'>
      <main className='py-5'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 col-1 gap-5'>
          {
           SERMONS_DATA?.map(sermon => (
             <div key={sermon.id}
                  className='px-5 py-10 flex flex-col justify-between gap-2 bg-white opacity-80 rounded-[10px]'>
               <Image src={sermon.image} alt={sermon.title} />
               <div className='flex flex-col gap-4'>
                 <h2 className='text-xl text-green-500 italic'>{sermon.title}</h2>
                 <a
                   href={sermon.videoPreview}
                   className='px-5 py-2 self-start text-white bg-green-500 text-center rounded duration-300 hover:bg-[#FEBF11]'
                   target='_blank'
                 >
                   Дивитись
                 </a>
               </div>

             </div>
           ))
          }
          {!SERMONS_DATA && <h2 className='self-center order-2'>Загрузка..</h2>}
        </div>
      </main>
    </section>
  )
}

export default Sermons
