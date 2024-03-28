import { AuthLayout } from '@/components/auth/AuthLayout'
import { AuthNavigation } from '@/components/auth/AuthNavigation'

const WelcomePage = () => {
  return (
    <AuthLayout>
      <h1 className="mb-[14px] text-fs-28-fw-600 text-primaryLight tablet:text-fs-40">
        Welcome to the app!
      </h1>
      <p
        className="mb-10 text-center text-fs-14-fw-400-lh-1.28 text-primaryLight tablet:w-[470px]
          tablet:text-left tablet:text-fs-18-400">
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <AuthNavigation />
    </AuthLayout>
  )
}

export default WelcomePage
