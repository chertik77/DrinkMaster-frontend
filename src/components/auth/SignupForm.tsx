'use client'

import { FormProvider } from 'react-hook-form'

import { useAppForm } from '@/hooks/useAppForm'

import { SignupSchema } from '@/lib/schemas/auth.schema'

import { AuthField } from '../ui/AuthField'
import { Basic } from '../ui/BirthDatePicker'
import { PasswordField } from '../ui/PasswordField'
import { AuthFormNavigation } from './AuthFormNavigation'

export const SignupForm = () => {
  const methods = useAppForm<SignupSchema>(SignupSchema)

  return (
    <FormProvider {...methods}>
      <form
        className='z-10 w-full'
        onSubmit={methods.handleSubmit(data => console.log(data))}>
        <AuthField inputName='name' />
        <Basic />
        <AuthField inputName='email' />
        <PasswordField />
        <AuthFormNavigation
          loading={false}
          formType='signup'
        />
      </form>
    </FormProvider>
  )
}
