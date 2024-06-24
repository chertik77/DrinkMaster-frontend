'use client'

import { FormProvider } from 'react-hook-form'

import { useSignupUser } from '@/hooks/auth/useSignupUser'
import { useAppForm } from '@/hooks/useAppForm'

import { SignupSchema } from '@/lib/schemas/auth.schema'

import { AuthField } from '../ui/AuthField'
import { BirthDayPicker } from '../ui/date-picker/DatePicker'
import { PasswordField } from '../ui/PasswordField'
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
