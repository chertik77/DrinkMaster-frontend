import type { AuthSlice } from './slices.types'

import { create } from 'zustand'

import { createAuthSlice } from './auth-slice'

export const useBoundStore = create<AuthSlice>((...a) => ({
  ...createAuthSlice(...a)
}))
