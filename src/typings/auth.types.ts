export type AuthParams = 'signin' | 'signup'

export type User = {
  id: string
  name: string
  email: string
  userTheme: string
  dateOfBirth: string
  avatarURL: string
}

export type AuthResponse = {
  accessToken: string
  user: User
}
