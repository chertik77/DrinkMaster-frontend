import type { AuthResponse } from '@/types/auth.types'
import type { StateCreator } from 'zustand'

export type SliceCreator<T> = StateCreator<T, [], [], T>

export type AuthSlice = {
  isAuthnticated: boolean
  user: null | {
    id: string
    name: string
    email: string
    userTheme: string
    dateOfBirth: string
  }
  authenticate: (handler: Promise<AuthResponse>) => void
}
