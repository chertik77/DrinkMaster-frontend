import type { AxiosError } from 'axios'
import type { Renderable, ToastOptions, ValueOrFunction } from 'react-hot-toast'

import toast from 'react-hot-toast'

type PromiseToastMessages<T> = {
  loading: Renderable
  success: ValueOrFunction<Renderable, T>
  error: ValueOrFunction<Renderable, AxiosError>
}

export const promiseToast = <T>(
  promise: Promise<T>,
  msgs: PromiseToastMessages<T>,
  options?: ToastOptions
) => toast.promise(promise, msgs, options)
