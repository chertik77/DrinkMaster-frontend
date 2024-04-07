import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
import type { AuthParamsType } from '@/types/auth.types'

import { signinSchema } from '@/lib/utils/schemas/signin.schema'
import { signUpSchema } from '@/lib/utils/schemas/signup.schema'
import { useBoundStore } from '@/store'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useRequest } from 'alova'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PAGES_URL } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

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

  const { loading, send, onSuccess, onError } = useRequest(
    data => authService.main(type, data),
    { immediate: false }
  )

  onSuccess(({ data }) => {
    console.log(data)
    reset()
    toast.success(
      type === 'signin'
        ? `Welcome back ${data.user.name}!`
        : `Welcome ${data.user.name}! Your account has been successfully created.`
    )
    push(PAGES_URL.DASHBOARD)
  })

  onError(({ error }) => {
    if (error.response.status === 409) {
      const parsedData = JSON.parse(error.config.data)

      toast.error(
        `Oops! An account with email ${parsedData.email} already exists. Please use a different email.`,
        { duration: 5000 }
      )
    }
    if (error.response.status === 401) {
      toast.error(
        'Oops! The email or password you entered is incorrect. Please try again.',
        { duration: 5000 }
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
