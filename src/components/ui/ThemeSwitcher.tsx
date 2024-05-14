'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'

import { forwardRef } from 'react'
import { Root, Thumb } from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

export const Switch = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    className={cn(
      `focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex
      h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2
      border-transparent transition-colors focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2
      data-[state=checked]:bg-primaryLight data-[state=unchecked]:bg-secondaryDark`,
      className
    )}
    {...props}
    ref={ref}>
    <Thumb
      className={cn(
        `pointer-events-none block size-[18px] rounded-full shadow-lg ring-0
        transition-transform data-[state=checked]:translate-x-5
        data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-primaryDark
        data-[state=unchecked]:bg-primaryLight`
      )}
    />
  </Root>
))

Switch.displayName = Root.displayName
