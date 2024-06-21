import type { AuthResponse, User } from '@/typings/auth.types'

import { create } from 'zustand'

type AuthStoreState = {
  user: User | null
  authenticate: (handler: Promise<AuthResponse>) => void
}

export const useAuthStore = create<AuthStoreState>(set => ({
  user: null,
  authenticate: async handler => {
    const response = await handler
    return set({ user: response.user })
  }
}))
