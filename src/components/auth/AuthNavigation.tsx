import Link from 'next/link'
import { PAGES_URL } from '@/config/pages-url.config'

export const AuthNavigation = () => (
  <div className="z-10 flex items-center gap-[14px]">
    <Link
      href={PAGES_URL.SIGNUP}
      className="rounded-[42px] bg-primaryLight px-10 py-[14px] text-fs-14-fw-600 tablet:px-11
        tablet:py-[18px] tablet:text-fs-16-fw-600">
      Sign Up
    </Link>
    <Link
      href={PAGES_URL.SIGNIN}
      className="rounded-[42px] border border-primaryLight/20 px-10 py-[14px] text-fs-14-fw-600
        text-primaryLight tablet:px-11 tablet:py-[18px] tablet:text-fs-16-fw-600">
      Sign In
    </Link>
  </div>
)
