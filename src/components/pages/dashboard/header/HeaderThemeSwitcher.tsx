'use client'

import type { User } from '@/types/auth.types'

import { useRequest } from 'alova'
import { useTheme } from 'next-themes'

import { Switch } from '@components/ui/ThemeSwitcher'

import { clientAlovaWithAuth } from '@api'
import { API_ENDPOINTS } from '@config/api-endpoints.config'
import { userService } from '@services'

export const HeaderThemeSwitcher = () => {
  const { data: user } = useRequest(
    clientAlovaWithAuth.Get<User>(API_ENDPOINTS.USER_PROFILE)
  )

  useRequest(userService.changeUserTheme(user?.id))

  const { theme, resolvedTheme, setTheme } = useTheme()

  const isThemeDark = theme === 'dark' || resolvedTheme === 'dark'

  return (
    <Switch
      onCheckedChange={() => setTheme(isThemeDark ? 'light' : 'dark')}
      checked={isThemeDark}
    />
  )
}
