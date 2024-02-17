import { Metadata } from 'next'
import Sermons from '@pages/Sermons/Sermons'

export const metadata: Metadata = {
  title: 'Проповіді',
  description: 'Проповіді. Проповіді Пасторів, Священників. Життя християн. Запитай у священника. Літургія, Святі Таїнства.',
}

const SermonsPage = () => <Sermons />

export default SermonsPage
