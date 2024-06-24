'use client'

import { FormProvider } from 'react-hook-form'

import { useAppForm } from '@/hooks'
import { useSignupUser } from '@/hooks/auth'

import { SignupSchema } from '@/lib/schemas'

import { AuthField, BirthDayPicker, PasswordField } from '../ui'
import { AuthFormNavigation } from './AuthFormNavigation'

export const SignupForm = () => {
  const methods = useAppForm<SignupSchema>(SignupSchema)

  const { isPending, mutate } = useSignupUser(methods.reset)

  return (
    <FormProvider {...methods}>
      <form
        className='z-10 w-full'
        onSubmit={methods.handleSubmit(data => mutate(data))}>
        <AuthField inputName='name' />
        <BirthDayPicker control={methods.control} />
        <AuthField inputName='email' />
        <PasswordField />
        <AuthFormNavigation
          loading={isPending}
          formType='signup'
        />
      </form>
    </FormProvider>
  )
}
