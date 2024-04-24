'use client'

import type { PropsWithChildren } from 'react'

import { NextUIProvider } from '@nextui-org/react'

export const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>
}
