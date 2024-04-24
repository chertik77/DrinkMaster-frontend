import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { AuthResponse } from '@/types/auth.types'

import { alovaClassic } from '@/api'
import { API_ENDPOINTS } from '@/config/api-endpoints.config'

import { AUTH_TOKEN_SERVICE, saveTokenToCookies } from './auth-token.service'

class AuthService {
  main(type: 'signin' | 'signup', data: SigninSchemaFields) {
    const r = alovaClassic.Post<AuthResponse>(
      type === 'signin' ? API_ENDPOINTS.SIGNIN : API_ENDPOINTS.SIGNUP,
      data
    )

    r.then(r => {
      if (r.accessToken) saveTokenToCookies(r.accessToken)
    })

    return r
  }

  async getNewTokens() {
    const r = await alovaClassic.Post<AuthResponse>(
      API_ENDPOINTS['ACCESS-TOKEN']
    )

    if (r.accessToken) saveTokenToCookies(r.accessToken)

    return r
  }

  async signout() {
    const r = await alovaClassic.Post<boolean>(API_ENDPOINTS.SIGNOUT)

    if (r) AUTH_TOKEN_SERVICE.removeTokenFromCookies()

    return r
  }
}

export const authService = new AuthService()
