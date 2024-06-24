import type { SigninSchema, SignupSchema } from '@/lib/schemas'
import type { InputHTMLAttributes } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: keyof SigninSchema | keyof SignupSchema
}

export const AuthField = ({
  inputName,
  className,
  ...props
}: AuthFieldProps) => {
  const { register, formState } = useFormContext()

  return (
    <>
      <input
        type='text'
        className={cn(
          `mb-3.5 block h-2xl w-full rounded-20xl border border-white/20 bg-transparent
          px-6 text-md text-white autofill:bg-clip-text autofill:text-fill-white
          focus:border-white/50 focus:outline-none focus:placeholder:text-white
          tablet:w-40xl`,
          {
            'border-success/50':
              !formState.errors[inputName] && formState.dirtyFields[inputName],
            'border-error/50': formState.errors[inputName]
          },
          className
        )}
        placeholder={inputName.charAt(0).toUpperCase() + inputName.slice(1)}
        {...register(inputName)}
        {...props}
      />
      <ErrorMessage
        errors={formState.errors}
        name={inputName}
        render={({ message }) => (
          <div className='mb-3.5 ml-2 text-error'>{message}</div>
        )}
      />
    </>
  )
}

AuthField.displayName = 'AuthField'
