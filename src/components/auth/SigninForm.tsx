'use client'

import { FormProvider } from 'react-hook-form'

import { useSigninUser } from '@/hooks/auth/useSigninUser'
import { useAppForm } from '@/hooks/useAppForm'

import { SigninSchema } from '@/lib/schemas/auth.schema'

import { AuthField } from '../ui/AuthField'
import { PasswordField } from '../ui/PasswordField'
import { AuthFormNavigation } from './AuthFormNavigation'

export const SigninForm = () => {
  const methods = useAppForm<SigninSchema>(SigninSchema)

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
