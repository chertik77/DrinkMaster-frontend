import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

import { authTokenService } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'

export const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

axiosInstance.interceptors.request.use(config => {
  const token = authTokenService.getAccessTokenFromCookies()

  if (config?.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

createAuthRefreshInterceptor(axiosInstance, async () =>
  authService
    .getNewTokens()
    .catch(() => authTokenService.removeTokenFromCookies())
)
