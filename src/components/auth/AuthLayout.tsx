import type { PropsWithChildren } from 'react'

export const AuthLayout = ({ children }: PropsWithChildren) => (
  <>
    <div
      className="absolute z-[1] size-[257px] rounded-[50%] bg-secondaryBrand/40 blur-[100px]
        desktop:left-24"></div>
    <div
      className="absolute left-[-400px] top-[100px] z-[1] size-[500px] rounded-[50%]
        bg-primaryBrand/50 blur-[100px]"></div>
    <div
      className="welcome-layout relative flex h-dvh flex-col items-center justify-center
        bg-primaryDark px-[28px] tablet:items-start tablet:px-16 desktop:bg-black
        desktop:px-[100px]">
      {children}
    </div>
  </>
)
