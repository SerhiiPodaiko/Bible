import GalleryItem from '@components/Home/Gallery/GalleryItem'
import { fetchGetRandomPhotos } from '@lib/fetchGetRandomPhotos'
import { notFound } from 'next/navigation'

const Gallery = async () => {
  const photos = await fetchGetRandomPhotos()

  if (!photos.length) {
    return notFound()
  }

  return <GalleryItem photos={photos} />

}

export default Gallery
