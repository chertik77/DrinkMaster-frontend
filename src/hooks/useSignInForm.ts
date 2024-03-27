import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'

import { signinSchema } from '@/lib/utils/schemas/signin.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

export const useSignInForm = () =>
  useForm<SigninSchemaFields>({
    resolver: valibotResolver(signinSchema),
    mode: 'onChange'
  })
