import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { Header } from '@/components/dashboard/Header'

import { userService } from '@/services'

const Layout = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['me'],
    queryFn: userService.getProfile
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <div>hello</div>
    </HydrationBoundary>
  )
}

export default Layout
