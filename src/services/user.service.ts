import type { User } from '@/types/auth.types'

import { serverAlovaWithAuth } from '@/api/server'
import { API_ENDPOINTS } from '@/config/api-endpoints.config'

class UserService {
  getUserProfile() {
    return serverAlovaWithAuth.Get<User>(API_ENDPOINTS.USER_PROFILE)
  }
}

export const userService = new UserService()
