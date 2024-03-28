import type { AuthSlice, SliceCreator } from './slices.types'

export const createAuthSlice: SliceCreator<AuthSlice> = set => ({
  isAuthnticated: false,
  user: null,
  authenticate: async handler => {
    const { user } = await handler

    set({ isAuthnticated: true, user })
  }
})
