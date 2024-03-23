import type { PropsWithChildren } from 'react'

export const AuthLayout = ({ children }: PropsWithChildren) => (
  // eslint-disable-next-line tailwindcss/classnames-order
  <div className='welcome-layout desktop:bg-black relative flex h-dvh flex-col items-center justify-center bg-primaryDark px-[28px] tablet:items-start tablet:px-16 desktop:px-[100px]'>
    <div className='absolute bottom-[450px] left-5 h-[247px] w-[257px] rounded-[50%] bg-secondaryBrand/40 blur-[100px] tablet:bottom-[400px] tablet:size-[370px] desktop:bottom-[500px]'></div>
    <div className='absolute right-[300px] size-[500px] rounded-[50%] bg-primaryBrand/50 blur-[100px] tablet:right-[700px] desktop:right-[1300px]'></div>
    {children}
  </div>
)
