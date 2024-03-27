export type User = {
  id: string
  name: string
  email: string
  userTheme: string
  dateOfBirth: string
}

export type AuthResponse = {
  accessToken: string
  user: User
}
