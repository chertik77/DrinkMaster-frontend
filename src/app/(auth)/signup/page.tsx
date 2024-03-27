import { SignUpForm } from '@/components/auth/SignUpForm'

const page = () => {
  return (
    <>
      <h1 className="mb-7 mr-auto text-fs-28-fw-600 text-primaryLight tablet:text-fs-40">
        Sign Up
      </h1>
      <SignUpForm />
    </>
  )
}

export default page
