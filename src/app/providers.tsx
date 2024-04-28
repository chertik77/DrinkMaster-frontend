import type { PropsWithChildren } from 'react'

import { CookiesProvider } from 'next-client-cookies/server'

export const Providers = ({ children }: PropsWithChildren) => {
  return <CookiesProvider>{children}</CookiesProvider>
}
