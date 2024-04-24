'use client'

import { useRequest } from 'alova'
import Link from 'next/link'

import { useSigninForm } from '@/hooks/auth/useSigninForm'

import { PAGES_URL } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

import { AuthField } from '../ui/AuthField'

export const SigninForm = () => {
  const { loading, send } = useRequest(
    data => authService.main('signin', data),
    { immediate: false }
  )

  const { handleSubmit, register, control, formState } = useSigninForm()

  return (
    <form
      className="z-10 w-full"
      onSubmit={handleSubmit(data => send(data))}>
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
        className={`mb-7 ${formState.errors.password && '!mb-[14px]'}`}
        {...register('password')}
      />
      <div className="w-full space-y-[14px] tablet:w-[400px]">
        <button
          type='submit'
          className="w-full rounded-[42px] bg-primaryLight py-[18px] text-fs-14-fw-600
            disabled:cursor-not-allowed disabled:bg-primaryLight/70 tablet:text-fs-16-fw-600"
          disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
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
