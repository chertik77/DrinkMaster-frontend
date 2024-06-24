import { AxiosError } from 'axios'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string
    }
  }
}

export {}
