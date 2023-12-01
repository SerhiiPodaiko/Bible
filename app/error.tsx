'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Error client', error)
  }, [error])

  return (
    <div>
      <h2>Щось пішло не так!</h2>
      <button onClick={() => reset()}>Спробуйте знову</button>
    </div>
  )
}