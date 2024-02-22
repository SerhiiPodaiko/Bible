import randomId from '@utils/randomId'
import sermon1 from '@public/images/sermons/screen-1.png'
import sermon2 from '@public/images/sermons/screen-2.png'
import sermon3 from '@public/images/sermons/screen-3.png'

export const SERMONS_DATA = [
  {
    title: 'Церква Спасителя Христа',
    image: sermon1,
    id: randomId(),
    videoPreview: 'https://christ.org.ua/video/'
  },
  {
    title: 'Спільнота Галілея',
    image: sermon2,
    id: randomId(),
    videoPreview: 'https://www.youtube.com/@GalileaUkraine/playlists'
  },
  {
    title: 'Свяшенник Василь Колодій',
    image: sermon3,
    id: randomId(),
    videoPreview: 'https://www.youtube.com/@andrijmackiv7503/videos'
  }
]
