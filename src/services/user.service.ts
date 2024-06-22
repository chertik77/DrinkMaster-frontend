import type { User } from '@/typings/auth.types'

import { axiosInstance } from '@/api'
import { ApiEndpoints } from '@/config/api-endpoints.config'

export const userService = {
  async getProfile() {
    const r = await axiosInstance.get<User>(ApiEndpoints.UserProfile)

    return r.data
  }
}
