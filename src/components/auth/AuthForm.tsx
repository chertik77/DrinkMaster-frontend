'use client'

import type { AuthParamsType } from '@/types/auth.types'

import Link from 'next/link'

import { useAuthForm } from '@/hooks/useAuthForm'

import { PAGES_URL } from '@/config/pages-url.config'

import { AuthField } from '../ui/AuthField'

type AuthFormProps = {
  formType: AuthParamsType
}

export const AuthForm = ({ formType }: AuthFormProps) => {
  const {
    handleSubmit,
    authenticate,
    send,
    register,
    control,
    errors,
    loading
  } = useAuthForm(formType)

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(data => authenticate(send(data)))}>
      {formType === 'signup' && (
        <AuthField
          inputName='name'
          placeholder='Name'
          className="mb-[14px]"
          control={control}
          {...register('name')}
        />
      )}
      {formType === 'signup' && (
        // <DatePickerDialog />
        <AuthField
          inputName='dateOfBirth'
          placeholder='Name'
          className="mb-[14px] block"
          control={control}
          {...register('dateOfBirth')}
        />
      )}
      <AuthField
        inputName='email'
        placeholder='Email'
        className="mb-[14px] block"
        control={control}
        {...register('email')}
      />
      <AuthField
        inputName='password'
        type='password'
        placeholder='Password'
        control={control}
        className={`mb-7 ${errors.password && '!mb-[14px]'}`}
        {...register('password')}
      />
      <div className="w-full space-y-[14px] tablet:w-[400px]">
        <button
          type='submit'
          className="w-full rounded-[42px] bg-primaryLight py-[18px] text-fs-14-fw-600
            tablet:text-fs-16-fw-600"
          disabled={loading}>
          {formType === 'signin' ? 'Sign In' : 'Sign Up'}
        </button>
        <Link
          href={formType === 'signin' ? PAGES_URL.SIGNUP : PAGES_URL.SIGNIN}
          className="block text-center text-fs-12-fw-600 text-primaryLight">
          {formType === 'signin' ? 'Sign Up' : 'Sign In'}
        </Link>
      </div>
    </form>
  )
}
