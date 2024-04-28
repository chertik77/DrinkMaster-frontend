import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

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
