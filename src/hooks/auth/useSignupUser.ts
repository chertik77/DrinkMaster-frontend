import type { SignupSchema } from '@/lib/schemas/auth.schema'
import type { UseFormReset } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { Pages } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

export const useSignupUser = (reset: UseFormReset<SignupSchema>) => {
  const { replace } = useRouter()

  const { isPending, mutate } = useMutation({
    mutationKey: ['signup'],
    mutationFn: authService.signup,
    onSuccess() {
      replace(Pages.Dashboard)
      reset()
    }
    // onError(e) {
    //   if (e.response?.status === 401) {
    //     toast.error('Sign-in failed: Invalid email or password.')
    //   }
    // }
  })

  return { isPending, mutate }
}
