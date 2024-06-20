import type { PropsWithChildren } from 'react'

export const PublicOnlyLayout = ({ children }: PropsWithChildren) => (
  <>
    <div
      className='absolute z-[1] size-[257px] rounded-full bg-brand-secondary/40 blur-[100px]
        desktop:left-24'></div>
    <div
      className='absolute left-[-400px] top-[100px] z-[1] size-[500px] rounded-full bg-brand/50
        blur-[100px]'></div>
    <div
      className='welcome-layout relative flex h-dvh flex-col items-center justify-center bg-black
        px-7 tablet:items-start tablet:px-16 desktop:px-[100px]'>
      {children}
    </div>
  </>
)
