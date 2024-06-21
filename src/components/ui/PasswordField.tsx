import type { InputHTMLAttributes } from 'react'

import Image from 'next/image'
import { useState } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'

export const PasswordField = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, formState } = useFormContext()

  return (
    <>
      <div className='relative w-full tablet:w-40xl'>
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            `mb-10 block h-[56px] w-full rounded-[200px] border border-white/20
            bg-transparent px-6 text-md text-white autofill:bg-clip-text
            autofill:text-fill-white focus:border-white/50 focus:outline-none
            focus:placeholder:text-white`,
            {
              'border-success/50':
                !formState.errors.password && formState.dirtyFields.password,
              'mb-3.5 border-error/50': formState.errors.password
            },
            className
          )}
          placeholder='Password'
          {...register('password')}
          {...props}
        />
        <button
          type='button'
          className='absolute right-6 top-4'
          onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? (
            <Image
              src='/eye.svg'
              alt='Show password'
              width={24}
              height={24}
            />
          ) : (
            <Image
              src='/eye-off.svg'
              alt='Hide password'
              width={24}
              height={24}
            />
          )}
        </button>
      </div>
      <ErrorMessage
        errors={formState.errors}
        name='password'
        render={({ message }) => (
          <div className='mb-3.5 ml-2 text-error'>{message}</div>
        )}
      />
    </>
  )
}

PasswordField.displayName = 'PasswordField'
