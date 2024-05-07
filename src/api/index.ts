import { createClientTokenAuthentication } from '@alova/scene-react'
import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

import { AUTH_TOKEN_SERVICE } from '@services'

const { onAuthRequired } = createClientTokenAuthentication<typeof ReactHook>({
  assignToken: method => {
    method.config.headers.Authorization = `Bearer ${AUTH_TOKEN_SERVICE.getAccessTokenFromCookies()}`
  }
})

export const options = {
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

export const clientAlovaWithAuth = createAlova({
  ...options,
  beforeRequest: onAuthRequired(),
  responded: r => r.json()
})
