import type { AuthParams } from '@/typings/auth.types'

import Link from 'next/link'

import { Pages } from '@/config/pages-url.config'

type AuthFormNavigationProps = {
  loading: boolean
  formType: AuthParams
}

export const AuthFormNavigation = ({
  formType,
  loading
}: AuthFormNavigationProps) => (
  <div className='w-full space-y-3.5 tablet:w-40xl'>
    <button
      type='submit'
      className='w-full rounded-2xl bg-white py-lg text-base font-semibold
        disabled:cursor-not-allowed disabled:bg-white/70 tablet:text-md'
      disabled={loading}>
      {loading
        ? formType === 'signin'
          ? 'Signing in...'
          : 'Signing up...'
        : formType === 'signin'
          ? 'Sign In'
          : 'Sign Up'}
    </button>
    <Link
      href={formType === 'signup' ? Pages.Signin : Pages.Signup}
      className='block text-center text-sm font-semibold text-white underline'>
      {formType === 'signup' ? 'Sign In' : 'Sign Up'}
    </Link>
  </div>
)
