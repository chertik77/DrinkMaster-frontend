import type { PropsWithChildren } from 'react'

import { PublicOnlyLayout } from '@/components/PublicOnlyLayout'

const Layout = ({ children }: PropsWithChildren) => (
  <PublicOnlyLayout>{children}</PublicOnlyLayout>
)

export default Layout
