import type { AuthParamsType } from '@/types/auth.types'

import { AuthForm } from '@/components/auth/AuthForm'

type PageParams = {
  params: {
    type: AuthParamsType
  }
}

const Page = ({ params }: PageParams) => (
  <>
    <h1 className="z-10 mb-7 mr-auto text-fs-28-fw-600 text-primaryLight tablet:text-fs-40">
      {params.type === 'signin' ? 'Sign In' : 'Sign Up'}
    </h1>
    <AuthForm formType={params.type} />
  </>
)

export default Page
