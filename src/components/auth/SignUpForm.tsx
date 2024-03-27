'use client'

import { signinSchema } from '@/lib/utils/schemas/signin.schema'
import Link from 'next/link'

import { useAuthForm } from '@/hooks/useAuthForm'

import { PAGES_URL } from '@/config/pages-url.config'

import { AuthField } from './AuthField'

export const SignUpForm = () => {
  const {
    send,
    handleSubmit,
    authenticate,
    register,
    control,
    errors,
    loading
  } = useAuthForm({
    type: 'signin',
    schema: signinSchema,
    toastMessage: 'Signed in successfully!'
  })

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(data => authenticate(send(data)))}>
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
          Sign In
        </button>
        <Link
          href={PAGES_URL.SIGNUP}
          className="block text-center text-fs-12-fw-600 text-primaryLight">
          Sign Up
        </Link>
      </div>
    </form>
  )
}
