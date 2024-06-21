'use client'

import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/api'

export const Header = () => {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => axiosInstance.get('/user/profile')
  })

  console.log(data)
  return <div>{data?.data.name}</div>
}
