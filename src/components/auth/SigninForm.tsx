'use client'

import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { AuthResponse } from '@/types/auth.types'

import { useRouter } from 'next/navigation'
import { PAGES_URL } from '@/config/pages-url.config'
import { useSigninForm } from '@/hooks/auth/useSigninForm'
import { promiseToast } from '@/lib/utils/promise-toast'
import { useRequest } from 'alova'

import { authService } from '@services'

import { AuthField } from '../ui/AuthField'
import { AuthFormNavigation } from './AuthFormNavigation'

export const SigninForm = () => {
  const { replace } = useRouter()

  const { loading, send } = useRequest(
    data => authService.main('signin', data),
    { immediate: false }
  )

  const { handleSubmit, register, control, formState, reset } = useSigninForm()

  const submit = (data: SigninSchemaFields) => {
    promiseToast<AuthResponse>(
      send(data),
      {
        loading: 'Signing in...',
        success: ({ user }) => {
          replace(PAGES_URL.DASHBOARD)
          reset()
          return `Welcome back ${user.name}! You have successfully signed in.`
        },
        error: e => {
          if (e.response?.status === 401) return 'Invalid email or password.'

          return 'Somewhere went wrong. Please try again.'
        }
      },
      { duration: 4000 }
    )
  }

  return (
    <form
      className="z-10 w-full"
      onSubmit={handleSubmit(submit)}>
      <AuthField
        inputName='email'
        placeholder='Email'
        className="mb-[14px] block"
        control={control}
        {...register('email')}
      />
      <AuthField
        inputName='password'
        placeholder='Password'
        control={control}
        className={`mb-7 ${formState.errors.password && '!mb-[14px]'}`}
        {...register('password')}
      />
      <AuthFormNavigation
        loading={loading}
        isValid={formState.isValid}
        formType='signin'
      />
    </form>
  )
}
