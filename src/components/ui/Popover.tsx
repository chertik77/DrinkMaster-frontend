import type { ComponentPropsWithoutRef, ElementRef } from 'react'

import { forwardRef } from 'react'
import { Anchor, Content, Portal, Root, Trigger } from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'

const Popover = Root

const PopoverTrigger = Trigger

const PopoverAnchor = Anchor

const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        `z-50 data-[state=open]:duration-500 data-[state=open]:animate-in
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95`,
        className
      )}
      {...props}
    />
  </Portal>
))

PopoverContent.displayName = Content.displayName

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger }
