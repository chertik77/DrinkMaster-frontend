import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'

import { signUpSchema } from '@/lib/utils/schemas/signup.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

export const useSignUpForm = () =>
  useForm<SignUpSchemaFields>({
    resolver: valibotResolver(signUpSchema),
    mode: 'onChange'
  })
