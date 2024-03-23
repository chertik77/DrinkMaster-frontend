import { AuthLayout } from '@/components/auth/AuthLayout'
import { PAGES_URL } from '@/config/pages-url.config'
import Link from 'next/link'

export const Home = () => (
  <AuthLayout>
    <h1 className='mb-[14px] text-fs-28-fw-600 text-primaryLight tablet:text-fs-40'>
      Welcome to the app!
    </h1>
    <p className='mb-10 text-center text-fs-14-fw-400-lh-1.28 text-primaryLight tablet:w-[470px] tablet:text-left tablet:text-fs-18-400'>
      This app offers more than just a collection of recipes - it is designed to
      be your very own digital cookbook. You can easily save and retrieve your
      own recipes at any time.
    </p>
    <div className='flex items-center gap-[14px]'>
      <Link
        href={PAGES_URL.SIGNUP}
        className='rounded-[42px] bg-primaryLight px-10 py-[14px] text-fs-14-fw-600 tablet:px-11 tablet:py-[18px] tablet:text-fs-16-fw-600'>
        Sign Up
      </Link>
      <Link
        href={PAGES_URL.SIGNIN}
        className='rounded-[42px] border border-primaryLight/20 px-10 py-[14px] text-fs-14-fw-600 text-primaryLight tablet:px-11 tablet:py-[18px] tablet:text-fs-16-fw-600'>
        Sign In
      </Link>
    </div>
  </AuthLayout>
)

export default Home
