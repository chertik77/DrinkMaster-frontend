import { AuthLayout } from '@/components/auth/AuthLayout'
import type { PropsWithChildren } from 'react'

const NestedLayout = ({ children }: PropsWithChildren) => (
  <AuthLayout>{children}</AuthLayout>
)

export default NestedLayout
