'use client'

import { FormProvider } from 'react-hook-form'

import { useSigninForm } from '@/hooks/auth/useSigninForm'
import { useSigninUser } from '@/hooks/auth/useSigninUser'

import { AuthField } from '../ui/AuthField'
import { PasswordField } from '../ui/PasswordField'
import { AuthFormNavigation } from './AuthFormNavigation'

export const SigninForm = () => {
  const methods = useSigninForm()

  const { isPending, mutate } = useSigninUser(methods.reset)

  return (
    <FormProvider {...methods}>
      <form
        className='z-10 w-full'
        onSubmit={methods.handleSubmit(data => mutate(data))}>
        <AuthField inputName='email' />
        <PasswordField />
        <AuthFormNavigation
          loading={isPending}
          formType='signin'
        />
      </form>
    </FormProvider>
  )
}
