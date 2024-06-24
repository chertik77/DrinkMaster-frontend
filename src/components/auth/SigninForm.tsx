'use client'

import { FormProvider } from 'react-hook-form'

import { useAppForm } from '@/hooks'
import { useSigninUser } from '@/hooks/auth'

import { SigninSchema } from '@/lib/schemas'

import { AuthField, PasswordField } from '../ui'
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
