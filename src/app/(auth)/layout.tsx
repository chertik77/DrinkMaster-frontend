import type { PropsWithChildren } from 'react'

import { AuthLayout } from '@/components/auth/AuthLayout'

const Layout = ({ children }: PropsWithChildren) => (
  <AuthLayout>{children}</AuthLayout>
)

export default Layout
