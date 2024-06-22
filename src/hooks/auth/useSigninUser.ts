import type { SigninSchema } from '@/lib/schemas/auth.schema'
import type { UseFormReset } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { Pages } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

export const useSigninUser = (reset: UseFormReset<SigninSchema>) => {
  const { replace } = useRouter()

  const { isPending, mutate } = useMutation({
    mutationKey: ['signin'],
    mutationFn: authService.signin,
    onSuccess() {
      replace(Pages.Dashboard)
      reset()
    },
    onError(e) {
      console.log(e)
      if (e.response?.status === 401) {
        console.log('ok')
        toast.error('Sign-in failed: Invalid email or password.')
      }
    }
  })

  return { isPending, mutate }
}
