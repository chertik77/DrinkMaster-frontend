import Link from 'next/link'

import { Pages } from '@/config'

export const AuthNavigation = () => (
  <div className='z-10 flex items-center gap-3.5 text-base font-semibold'>
    <Link
      href={Pages.Signup}
      className='rounded-2xl bg-white px-10 py-3.5 tablet:px-11 tablet:py-lg tablet:text-md'>
      Sign Up
    </Link>
    <Link
      href={Pages.Signin}
      className='rounded-2xl border border-white/20 px-10 py-3.5 text-white tablet:px-11
        tablet:py-lg tablet:text-md'>
      Sign In
    </Link>
  </div>
)
