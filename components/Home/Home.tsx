import Link from 'next/link'

import LanguageSwitcher from '@components/LanguageSwitcher'
import { getDictionary } from '@lib/dictionary'
import { Locale } from '../../i18n.config'

const Home = async ({ lang }: { lang: Locale }) => {
  const { metadata } = await getDictionary(lang)

  return (
    <div>
      <Link href={`/${lang}`}>Uk</Link>
      <Link href={`/${lang}`}>Eng</Link>
      <p>{metadata.title}</p>
      <LanguageSwitcher />
    </div>
  )
}

export default Home
