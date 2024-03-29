import type { User } from '@/types/auth.types'

import { alovaWithAuth } from '@/api'
import { API_ENDPOINTS } from '@/config/api-endpoints.config'

class UserService {
  getUserProfile() {
    return alovaWithAuth.Get<User>(API_ENDPOINTS.USER_PROFILE)
  }
}

export const userService = new UserService()
