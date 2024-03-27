import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { AuthResponse } from '@/types/auth.types'

import { alovaClassic } from '@/api'
import { API_ENDPOINTS } from '@/config/api-endpoints.config'

import { AUTH_TOKEN_SERVICE } from './auth-token.service'

class AuthService {
  signin(type: 'signin' | 'signup', data: SigninSchemaFields) {
    const response = alovaClassic.Post<AuthResponse>(
      type === 'signin' ? API_ENDPOINTS.SIGNIN : API_ENDPOINTS.SIGNUP,
      data
    )

    response.then(r => {
      if (r.accessToken) AUTH_TOKEN_SERVICE.saveTokenToCookies(r.accessToken)
    })

    return response
  }
}

export const AUTH_SERVICE = new AuthService()
