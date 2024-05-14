import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'

import { useForm } from 'react-hook-form'
import { signUpSchema } from '@/lib/utils/schemas/signup.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'

export const useSignupForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors, isValid }
  } = useForm<SignUpSchemaFields>({
    resolver: valibotResolver(signUpSchema),
    mode: 'onChange',
    progressive: true
  })

  return { handleSubmit, reset, register, control, errors, isValid }
}
