import axios from 'axios'
import { configDotenv } from 'dotenv'

configDotenv()

export const ShyftApi = axios.create({
  baseURL: 'https://api.shyft.to/sol/v1/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.SHYFT_API_KEY,
  },
})
