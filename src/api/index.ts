import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

const options = {
  baseURL: process.env.API_BASE_URL,
  cacheLogger: false,
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook
}

export const alovaClassic = createAlova({
  ...options,
  // requestAdapter: axiosRequestAdapter(),
  beforeRequest(method) {
    method.config.credentials = 'include'
  },
  responded: r => r.json()
})

export const alovaWithAuth = createAlova({
  ...options,
  beforeRequest({ config }) {
    // const accessToken = getAccessTokenFromCookies()

    if (config.headers) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmM1ZTY4Y2UyNGVlZmJkMTFhNTExMyIsImlhdCI6MTcxMTc0ODY3MywiZXhwIjoxNzExNzUyMjczfQ.PEKuIPwAE02F4Bv5AnukVkBeRWFG4EMLFCcp3g11t5E`
    }
  },
  responded: r => r.json()
})
