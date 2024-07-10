import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

import { authTokenService, EnumTokens } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'

export const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true
})

const isServer = typeof window === 'undefined'

axiosInstance.interceptors.request.use(async config => {
  if (isServer) {
    const { cookies } = await import('next/headers'),
      token = cookies().get(EnumTokens.AccessToken)?.value

    if (token) config.headers.Authorization = `Bearer ${token}`
  } else {
    const token = authTokenService.getAccessTokenFromCookies()

    if (token) config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

createAuthRefreshInterceptor(axiosInstance, async () => {
  authService
    .getNewTokens()
    .catch(() => authTokenService.removeTokenFromCookies())
})
