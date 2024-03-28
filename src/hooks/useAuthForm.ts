import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
import type { AuthParamsType, User } from '@/types/auth.types'

import { signinSchema } from '@/lib/utils/schemas/signin.schema'
import { signUpSchema } from '@/lib/utils/schemas/signup.schema'
import { useBoundStore } from '@/store'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useRequest } from 'alova'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PAGES_URL } from '@/config/pages-url.config'
import { AUTH_SERVICE } from '@/services/auth.service'

export const useAuthForm = (type: AuthParamsType) => {
  const { push } = useRouter()
  const authenticate = useBoundStore(s => s.authenticate)

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors }
  } = useForm<SigninSchemaFields & SignUpSchemaFields>({
    resolver: valibotResolver(type === 'signin' ? signinSchema : signUpSchema),
    mode: 'onChange'
  })

  const { loading, send, onSuccess, onError, error } = useRequest(
    data => AUTH_SERVICE.signin(type, data),
    { immediate: false }
  )

  onSuccess(({ method }) => {
    reset()
    toast.success(
      type === 'signin'
        ? `Welcome back ${(method.data as User).name}!`
        : `Welcome ${(method.data as User).name}! Your account has been successfully created.`
    )
    push(PAGES_URL.DASHBOARD)
  })

  onError(({ method }) => {
    if (error?.message === 'Conflict') {
      toast.error(
        `Oops! An account with email ${(method.data as User).email} already exists. Please use a different email.`
      )
    }
    if (error?.message === 'Unauthorized') {
      toast.error(
        'Oops! The email or password you entered is incorrect. Please try again.'
      )
    }
  })

  return {
    handleSubmit,
    register,
    control,
    errors,
    loading,
    send,
    authenticate
  }
}
