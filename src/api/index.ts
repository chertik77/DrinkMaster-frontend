import { createClientTokenAuthentication } from '@alova/scene-react'
import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

import { getAccessTokenFromCookies } from '@/services/auth-token.service'

const { onAuthRequired } = createClientTokenAuthentication<typeof ReactHook>({
  assignToken: method => {
    console.log(getAccessTokenFromCookies())
    method.config.credentials = 'include'
    method.config.headers.Authorization = getAccessTokenFromCookies()
  }
})

const options = {
  baseURL: process.env.API_BASE_URL,
  cacheLogger: false,
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook
}

export const alovaClassic = createAlova({
  ...options,
  beforeRequest(method) {
    method.config.credentials = 'include'
  },
  responded: r => r.json()
})

export const alovaWithAuth = createAlova({
  ...options,
  beforeRequest: onAuthRequired(),
  responded: r => r.json()
})
