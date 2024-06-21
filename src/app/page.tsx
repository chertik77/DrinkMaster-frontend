import { AuthNavigation } from '@/components/auth/AuthNavigation'
import { PublicOnlyLayout } from '@/components/PublicOnlyLayout'

const HomePage = () => (
  <PublicOnlyLayout>
    <h1 className='z-10 mb-3.5 text-2xl text-white tablet:text-4xl'>
      Welcome to the app!
    </h1>
    <p
      className='z-10 mb-10 text-center text-base font-normal text-white tablet:w-[470px]
        tablet:text-left tablet:text-lg'>
      This app offers more than just a collection of recipes - it is designed to
      be your very own digital cookbook. You can easily save and retrieve your
      own recipes at any time.
    </p>
    <AuthNavigation />
  </PublicOnlyLayout>
)

export default HomePage
