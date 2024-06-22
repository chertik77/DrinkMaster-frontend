'use client'

import type { AxiosError } from 'axios'
import type { PropsWithChildren } from 'react'

import {
  isServer,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
  })

let browserQueryClient: QueryClient | undefined = undefined

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()

    return browserQueryClient
  }
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

export const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
