import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

export const alovaClassic = createAlova({
  baseURL: process.env.API_BASE_URL,
  cacheLogger: false,
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook,
  beforeRequest(method) {
    method.config.credentials = 'include'
  },
  responded: {
    onSuccess: async r => {
      if (r.status >= 400) throw new Error(r.statusText)

      const json = await r.json()

      return json
    }
  }
})
