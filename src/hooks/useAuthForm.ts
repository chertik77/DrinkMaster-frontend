import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { BaseSchema } from 'valibot'

import { useBoundStore } from '@/store'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useRequest } from 'alova'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PAGES_URL } from '@/config/pages-url.config'
import { AUTH_SERVICE } from '@/services/auth.service'

type AuthFormProps = {
  toastMessage: string
  type: 'signin' | 'signup'
  schema: BaseSchema
}

export const useAuthForm = <T extends SigninSchemaFields>({
  toastMessage,
  type,
  schema
}: AuthFormProps) => {
  const { push } = useRouter()

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors }
  } = useForm<T>({
    resolver: valibotResolver(schema),
    mode: 'onChange'
  })

  const { loading, send, onSuccess } = useRequest(
    data => AUTH_SERVICE.signin(type, data),
    {
      immediate: false
    }
  )

  const authenticate = useBoundStore(s => s.authenticate)

  onSuccess(() => {
    reset()
    toast.success(toastMessage)
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
