import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { axiosInstance } from '@/api'

import { Header } from './Header'

const DashboardPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['profile'],
    queryFn: async () => await axiosInstance.get('/user/profile')
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
    </HydrationBoundary>
  )
}

export default DashboardPage
