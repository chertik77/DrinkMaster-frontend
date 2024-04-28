'use client'

import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
import type { AuthResponse } from '@/types/auth.types'

import { useRouter } from 'next/navigation'
import { PAGES_URL } from '@/config/pages-url.config'
import { useSignupForm } from '@/hooks/auth/useSignupForm'
import { promiseToast } from '@/lib/utils/promise-toast'
import { ErrorMessage } from '@hookform/error-message'
import { useRequest } from 'alova'

import { authService } from '@services'

import { AuthField } from '../ui/AuthField'
import { DatePickerInput } from '../ui/DateInputPicker'
import { AuthFormNavigation } from './AuthFormNavigation'

export const SignupForm = () => {
  const { replace } = useRouter()

  const { loading, send } = useRequest(
    data => authService.main('signup', data),
    { immediate: false }
  )

  const { handleSubmit, control, register, errors, reset, isValid } =
    useSignupForm()

  const submit = (data: SignUpSchemaFields) => {
    promiseToast<AuthResponse>(
      send(data),
      {
        loading: 'Signing up...',
        success: ({ user }) => {
          replace(PAGES_URL.DASHBOARD)
          reset()
          return `Welcome ${user.name}! Your account has been successfully created. We're glad to have you with us!`
        },
        error: e => {
          if (e.response?.status === 409) {
            return 'The email you entered is already associated with an account. Please try signing in or use a different email.'
          }

          return 'Somewhere went wrong. Please try again.'
        }
      },
      { duration: 5000 }
    )
  }

  return (
    <form
      className="z-10 w-full"
      onSubmit={handleSubmit(submit)}>
      <AuthField
        inputName='name'
        placeholder='Name'
        className="mb-[14px]"
        control={control}
        {...register('name')}
      />
      <DatePickerInput control={control} />
      <ErrorMessage
        errors={errors}
        name='dateOfBirth'
        render={({ message }) => (
          <div className="mb-[14px] ml-2 text-error">{message}</div>
        )}
      />
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
        className={`mb-7 ${errors.password && '!mb-[14px]'}`}
        {...register('password')}
      />
      <AuthFormNavigation
        formType='signup'
        loading={loading}
        isValid={isValid}
      />
    </form>
  )
}
