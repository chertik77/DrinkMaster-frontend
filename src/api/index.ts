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
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZmOTg2OTFmMzY4YWRjZDY4MjVhNCIsImlhdCI6MTcxMTczMzEyNiwiZXhwIjoxNzExNzM2NzI2fQ.AtDVbQrNNVVp4Fn68NiKUi9mjTsJK_jTo65dNe-bAIo`
    }
  },
  responded: r => r.json()
})
