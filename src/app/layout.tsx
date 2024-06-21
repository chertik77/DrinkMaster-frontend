import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Manrope } from 'next/font/google'

import './globals.css'

import { Providers } from './providers'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  title: 'Drink Master',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
