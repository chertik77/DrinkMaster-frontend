import { createClientTokenAuthentication } from '@alova/scene-react'
import ReactHook from 'alova/react'
import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import { getCookies } from 'next-client-cookies/server'

import { EnumTokens } from '@services'

const { onAuthRequired } = createClientTokenAuthentication<typeof ReactHook>({
  assignToken: method => {
    method.config.headers.Authorization = `Bearer ${getCookies().get(EnumTokens.ACCESS_TOKEN)}`
  }
})

const serverOptions = {
  baseURL: process.env.API_BASE_URL,
  cacheLogger: false,
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook
}

export const serverAlovaWithAuth = createAlova({
  ...serverOptions,
  beforeRequest: onAuthRequired(),
  responded: r => r.json()
})
