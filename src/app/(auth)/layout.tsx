import type { PropsWithChildren } from 'react'

import { AuthLayout } from '@/components/auth/AuthLayout'

const NestedLayout = ({ children }: PropsWithChildren) => (
  <AuthLayout>{children}</AuthLayout>
)

export default NestedLayout
