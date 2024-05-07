import type { User } from '@/types/auth.types'

import { serverAlovaWithAuth } from '@/api/server'
import { API_ENDPOINTS } from '@/config/api-endpoints.config'

import { clientAlovaWithAuth } from '@api'

class UserService {
  getUserProfile() {
    return serverAlovaWithAuth.Get<User>(API_ENDPOINTS.USER_PROFILE)
  }

  changeUserTheme(id: string) {
    return clientAlovaWithAuth.Put(`${API_ENDPOINTS.USER}/${id}`)
  }
}

export const userService = new UserService()
