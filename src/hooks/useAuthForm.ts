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

  const { loading, send, onSuccess } = useRequest(
    data => AUTH_SERVICE.signin(type, data),
    { immediate: false }
  )

  onSuccess(() => {
    reset()
    toast.success(
      type === 'signin' ? 'Sign In successful' : 'Sign Up successful'
    )
    push(PAGES_URL.DASHBOARD)
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
