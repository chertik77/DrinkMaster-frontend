import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'

import { signinSchema } from '@/lib/utils/schemas/signin.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

export const useSigninForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors, isValid }
  } = useForm<SigninSchemaFields & SignUpSchemaFields>({
    resolver: valibotResolver(signinSchema),
    mode: 'onChange',
    progressive: true
  })

  
  return { handleSubmit, reset, register, control, errors, isValid }
}
