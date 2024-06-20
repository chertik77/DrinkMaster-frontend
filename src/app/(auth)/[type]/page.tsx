type AuthPageParams = {
  params: {
    type: 'signin' | 'signup'
  }
}

const AuthPage = ({ params }: AuthPageParams) => {
  return (
    <>
      <h1 className='z-10 mb-7 mr-auto text-2xl text-white tablet:text-4xl'>
        {params.type === 'signin' ? 'Sign In' : 'Sign Up'}
      </h1>
    </>
  )
}

export default AuthPage
