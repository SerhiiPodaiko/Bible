const GlobalSearch = () => {
  return (
    <div className='w-full px-[20px] sm:w-[50%] lg:w-auto flex items-center'>
      <input
        type='search'
        className='py-2 px-5 hover:outline-1 hover:outline-amber-400 duration-300 shadow shadow-black outline-none rounded-[8px] w-full bg-amber-50 text-black'
        placeholder='Пошук'
      />
    </div>
  )
}

export default GlobalSearch
