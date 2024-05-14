import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
import type { ForwardedRef, InputHTMLAttributes } from 'react'
import type { Control } from 'react-hook-form'

import Image from 'next/image'
import { forwardRef, useState } from 'react'
import { useFormState } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { ErrorMessage } from '@hookform/error-message'

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  isPasswordField?: boolean
  inputName:
    | keyof SigninSchemaFields
    | keyof Pick<SignUpSchemaFields, 'name' | 'dateOfBirth'>
  control: Control<SigninSchemaFields & SignUpSchemaFields>
}

export const AuthField = forwardRef(
  (
    { inputName, control, className, ...props }: AuthFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const { errors, dirtyFields } = useFormState({ control })

    return (
      <>
        <div className="relative w-full tablet:w-[400px]">
          <input
            type={
              showPassword
                ? 'text'
                : inputName !== 'password'
                  ? 'text'
                  : 'password'
            }
            ref={ref}
            className={cn(
              `block h-[56px] w-full rounded-[200px] border border-primaryLight/20
              bg-transparent px-6 text-fs-17 text-primaryLight autofill:bg-clip-text
              autofill:text-fill-primaryLight focus:border-primaryLight/50 focus:outline-none
              focus:placeholder:text-primaryLight`,
              {
                'border-success/50':
                  !errors[inputName] && dirtyFields[inputName],
                'border-error/50': errors[inputName]
              },
              className
            )}
            {...props}
          />
          {errors[inputName] && (
            <Image
              src='/error.svg'
              className={cn('absolute right-6 top-4')}
              alt='Invalid input icon'
              width={24}
              height={24}
            />
          )}
          {!errors[inputName] && dirtyFields[inputName] && (
            <Image
              src='/success.svg'
              className={cn('absolute right-6 top-4')}
              alt='Valid input icon'
              width={24}
              height={24}
            />
          )}
          {inputName === 'password' && (
            <button
              type='button'
              className={cn('absolute right-6 top-4', {
                'right-14':
                  errors[inputName] ||
                  (!errors[inputName] && dirtyFields[inputName])
              })}
              onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? (
                <Image
                  src='/eye.svg'
                  alt='Valid input icon'
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src='/eye-off.svg'
                  alt='Valid input icon'
                  width={24}
                  height={24}
                />
              )}
            </button>
          )}
        </div>
        <ErrorMessage
          errors={errors}
          name={inputName}
          render={({ message }) => (
            <div className="mb-[14px] ml-2 text-error">{message}</div>
          )}
        />
      </>
    )
  }
)

AuthField.displayName = 'AuthField'
