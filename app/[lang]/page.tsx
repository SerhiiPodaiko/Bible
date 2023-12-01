import Home from '@components/Home/Home'
import { Locale } from '../../i18n.config'

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => <Home lang={lang} />

export default HomePage
