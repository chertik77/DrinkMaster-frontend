import { axiosRequestAdapter } from '@alova/adapter-axios'
import { createClientTokenAuthentication } from '@alova/scene-react'
import { createAlova } from 'alova'
import ReactHook from 'alova/react'

import { AUTH_TOKEN_SERVICE } from '@/services/auth-token.service'

const { onAuthRequired } = createClientTokenAuthentication<
  typeof ReactHook,
  typeof axiosRequestAdapter
>({
  assignToken: method => {
    method.config.withCredentials = true
    method.config.headers.Authorization =
      AUTH_TOKEN_SERVICE.getAccessTokenFromCookies()
  }
})

const options = {
  baseURL: process.env.API_BASE_URL,
  cacheLogger: false,
  requestAdapter: axiosRequestAdapter(),
  statesHook: ReactHook
}

export const alovaClassic = createAlova({
  ...options,
  beforeRequest(method) {
    method.config.withCredentials = true
  },
  responded: r => r.data
})

export const alovaWithAuth = createAlova({
  ...options,
  beforeRequest: onAuthRequired(),
  responded: r => r.data
})
