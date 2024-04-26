import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const isLocalStorageDefined = () => {
  if (typeof window === 'undefined') return

  return window.localStorage
}
