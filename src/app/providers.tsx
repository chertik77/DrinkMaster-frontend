'use client'

import type { AxiosError } from 'axios'
import type { PropsWithChildren } from 'react'

import {
  isServer,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'

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
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      className='w-[300px] text-balance'
      preventDuplicate>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SnackbarProvider>
  )
}
