'use client'

import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export const Header = () => {
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: userService.getProfile
  })

  return (
    <div>
      {data?.name}
      {data?.email}
    </div>
  )
}
