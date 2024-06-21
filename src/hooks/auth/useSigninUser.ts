import type { SigninSchema } from '@/lib/schemas/auth.schema'
import type { UseFormReset } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { enqueueSnackbar } from 'notistack'

import { Pages } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

export const useSigninUser = (reset: UseFormReset<SigninSchema>) => {
  const { replace } = useRouter()

  const { isPending, mutate } = useMutation({
    mutationKey: ['signin'],
    mutationFn: authService.signin,
    onSuccess() {
      reset()
      replace(Pages.Dashboard)
    },
    onError(e) {
      if (e.response?.status === 401) {
        enqueueSnackbar('Sign-in failed: Invalid email or password.', {
          className: 'text-balance w-[300px]',
          variant: 'error',
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          preventDuplicate: true
        })
      }
    }
  })

  return { isPending, mutate }
}
