'use client'

import { useRequest } from 'alova'
import Link from 'next/link'

import { useSignupForm } from '@/hooks/auth/useSignupForm'

import { PAGES_URL } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

import { AuthField } from '../ui/AuthField'
import { DatePickerDemo } from '../ui/DateInputPicker'

export const SignupForm = () => {
  const { loading, send } = useRequest(
    data => authService.main('signup', data),
    { immediate: false }
  )

  const { handleSubmit, control, register, formState } = useSignupForm()

  return (
    <form
      className="z-10 w-full"
      onSubmit={handleSubmit(data => send(data))}>
      <AuthField
        inputName='name'
        placeholder='Name'
        className="mb-[14px]"
        control={control}
        {...register('name')}
      />
      <DatePickerDemo
      // control={control}
      // errors={errors}
      />
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <Link
          href={PAGES_URL.SIGNIN}
          className="block text-center text-fs-12-fw-600 text-primaryLight">
          Sign In
        </Link>
      </div>
    </form>
  )
}
