import type { StateCreator } from 'zustand'

export type SliceCreator<T> = StateCreator<T, [], [], T>

export type UserSlice = {
  user: null | {
    id: string
    name: string
    email: string
    userTheme: string
    dateOfBirth: string
  }
}
