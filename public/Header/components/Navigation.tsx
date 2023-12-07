const links = [
  { title: 'Біблія', path: 'https://www.bible.com/bible/188/MAT.1.UKRK' },
  { title: 'Відео', path: 'https://www.bible.com/uk/videos' },
]

const Navigation = () => {
  return (
    <nav className='flex-col lg:flex-row flex items-center gap-5'>
      {links.map(link => (
        <a
          key={link.title}
          target='_blank'
          href={link.path}
          className='py-2 px-3 hover:bg-[#C46529] rounded duration-300'
        >
          {link.title}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
