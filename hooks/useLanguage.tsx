import { getDictionary } from '@lib/dictionary'
import { Locale } from '../i18n.config'

const useLanguage = async ({ lang }: { lang: Locale }) => {
  const t = await getDictionary(lang)

  return {
    t,
  }
}

export default useLanguage
