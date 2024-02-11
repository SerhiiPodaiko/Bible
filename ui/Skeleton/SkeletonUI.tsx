import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonUI = ({ count = 1 }: { count?: number }) => {
  return (
    <div className='flex justify-center'>
      <Skeleton count={count} />
    </div>
  )
}

export default SkeletonUI
