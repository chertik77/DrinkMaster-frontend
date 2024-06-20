import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SigninSchema } from '@/lib/schemas/auth.schema'

export const useSigninForm = () =>
  useForm<SigninSchema>({
    resolver: zodResolver(SigninSchema),
    mode: 'onChange',
    progressive: true
  })
