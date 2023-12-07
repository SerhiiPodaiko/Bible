import axios, { AxiosInstance } from 'axios'

// 6c696cd1d82e2723-03
// 6c696cd1d82e2723-04
const bibleVersionID: string = '6c696cd1d82e2723-03'

const API: AxiosInstance = axios.create({
  baseURL: `${(process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '')}/v1/bibles/${bibleVersionID}`,
  timeout: 60000,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin:": "*"
    'api-key': '17d8d467a638690941ea3bdca9783faf',
  },
})

export default API
