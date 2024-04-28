'use server'

import { cookies } from 'next/headers'
import { createClientTokenAuthentication } from '@alova/scene-react'
import { createAlova } from 'alova'
import ReactHook from 'alova/react'

import { options } from '@api'
import { EnumTokens } from '@services'

const { onAuthRequired } = createClientTokenAuthentication<typeof ReactHook>({
  assignToken: method => {
    method.config.headers.Authorization = `Bearer ${cookies().get(EnumTokens.ACCESS_TOKEN)?.value}`
  }
})

export const serverAlovaWithAuth = createAlova({
  ...options,
  beforeRequest: onAuthRequired(),
  responded: r => r.json()
})
