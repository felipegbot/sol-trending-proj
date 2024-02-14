import { Network, ShyftSdk } from '@shyft-to/js';
import axios from 'axios';
import { configDotenv } from 'dotenv'

configDotenv()
export const ShyftApi = axios.create({
  baseURL: 'https://api.shyft.to/sol/v1/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.SHYFT_API_KEY,
  },
})
export const InitializedShyftSdk = new ShyftSdk({ apiKey: process.env.SHYFT_API_KEY, network: Network.Mainnet }); 
