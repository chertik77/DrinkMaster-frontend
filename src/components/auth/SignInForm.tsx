'use client'

import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'

import { useRequest } from 'alova'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useSignInForm } from '@/hooks/useSignInForm'

import { PAGES_URL } from '@/config/pages-url.config'
import { AUTH_SERVICE } from '@/services/auth.service'

import { AuthField } from './AuthField'

export const SignInForm = () => {
  const router = useRouter()

  const { loading, send, onSuccess } = useRequest(AUTH_SERVICE.signIn, {
    immediate: false
  })

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors }
  } = useSignInForm()

  const submit = (data: SigninSchemaFields) => {
    send(data)
  }

  onSuccess(() => {
    reset()
    router.replace(PAGES_URL.DASHBOARD)
  })

  return (
    <form
      className="w-full"
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
