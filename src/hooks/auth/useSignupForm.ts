import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignupSchema } from '@/lib/schemas/auth.schema'

export const useSignupForm = () =>
  useForm<SignupSchema>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
    progressive: true
  })
