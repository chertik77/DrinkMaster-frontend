import type { SigninSchema, SignupSchema } from '@/lib/schemas/auth.schema'
import type { AuthResponse } from '@/typings/auth.types'

import { axiosInstance } from '@/api'
import { ApiEndpoints } from '@/config/api-endpoints.config'

import { authTokenService } from './auth-token.service'

export const authService = {
  async signup(data: SignupSchema) {
    const r = await axiosInstance.post<AuthResponse>(ApiEndpoints.Signup, data)

    if (r.data.accessToken) {
      authTokenService.saveTokenToCookies(r.data.accessToken)
    }

    return r.data
  },

  async signin(data: SigninSchema) {
    const r = await axiosInstance.post<AuthResponse>(ApiEndpoints.Signin, data)

    if (r.data.accessToken) {
      authTokenService.saveTokenToCookies(r.data.accessToken)
    }

    return r.data
  },

  async getNewTokens() {
    const r = await axiosInstance.post<AuthResponse>(ApiEndpoints.Tokens)

    if (r.data.accessToken)
      authTokenService.saveTokenToCookies(r.data.accessToken)

    return r
  },

  async signout() {
    const r = await axiosInstance.post<boolean>(ApiEndpoints.Signout)

    if (r) authTokenService.removeTokenFromCookies()

    return r
  }
}
