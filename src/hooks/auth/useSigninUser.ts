import type { SigninSchema } from '@/lib/schemas/auth.schema'
import type { UseFormReset } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

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
    }
    // onError: e => {
    //   console.log(e)

    //   return toast.error(
    //     e.response?.status === 401
    //       ? 'Sign-in failed. The email or password you entered is incorrect. Please try again.'
    //       : 'An error occurred during sign-in. Our technical team has been notified. Please try again shortly.'
    //   )
    // }
  })

  return { isPending, mutate }
}
