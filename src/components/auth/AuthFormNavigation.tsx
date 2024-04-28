import Link from 'next/link'
import { PAGES_URL } from '@/config/pages-url.config'

type AuthFormNavigationProps = {
  loading: boolean
  isValid: boolean
  formType: 'signin' | 'signup'
}

export const AuthFormNavigation = ({
  formType,
  loading,
  isValid
}: AuthFormNavigationProps) => (
  <div className="w-full space-y-[14px] tablet:w-[400px]">
    <button
      type='submit'
      className="w-full rounded-[42px] bg-primaryLight py-[18px] text-fs-14-fw-600
        disabled:cursor-not-allowed disabled:bg-primaryLight/70 tablet:text-fs-16-fw-600"
      disabled={loading || !isValid}>
      {loading
        ? formType === 'signin'
          ? 'Signing in...'
          : 'Signing up...'
        : formType === 'signin'
          ? 'Sign In'
          : 'Sign Up'}
    </button>
    <Link
      href={formType === 'signup' ? PAGES_URL.SIGNIN : PAGES_URL.SIGNUP}
      className="block text-center text-fs-12-fw-600 text-primaryLight underline">
      {formType === 'signup' ? 'Sign In' : 'Sign Up'}
    </Link>
  </div>
)
