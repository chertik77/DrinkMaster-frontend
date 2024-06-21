import axios from 'axios'

import { authTokenService } from '@/services/auth-token.service'

export const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true
})

axiosInstance.interceptors.request.use(config => {
  const token = authTokenService.getAccessTokenFromCookies()

  if (config?.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
