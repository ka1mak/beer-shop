import axios from 'axios'

export const BASE_URL = 'https://api.punkapi.com/v2'

export const axiosRequest = axios.create({
  baseURL: BASE_URL
})
