// NEXT_PUBLIC_API_URL=https://api.unsplash.com/
// NEXT_APPLICATION_ID=544370
// NEXT_ACCESS_KEY=TfC295-zb75dhrMiGF92KL9p32eSfDirnrm-7QgF3IU
// NEXT_SECRET_KEY=618QqMwJWVfuflB-h_fmAWgpdEDbS3vvvJGdEqDd0pw

export const fetchGetRandomPhotos = async (count:number = 3, query:string = 'bible') => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/photos/random/?client_id=TfC295-zb75dhrMiGF92KL9p32eSfDirnrm-7QgF3IU&count=${count}&query=${query}`
    )

    if (response.status === 404 || !response.ok) {
      throw new Error('Server error:' + response.status + ': ' + response)
    }

    const body = await response.json()

    return body
  } catch (error: any) {
    console.log('Error fetching random photos', error)
    return error
  }
}
