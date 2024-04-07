import type { SigninSchemaFields } from '@/lib/utils/schemas/signin.schema'
import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
import type { ForwardedRef, InputHTMLAttributes } from 'react'
import type { Control } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { ErrorMessage } from '@hookform/error-message'
import { forwardRef } from 'react'
import { useFormState } from 'react-hook-form'

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
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
    const { errors, dirtyFields } = useFormState({ control })

    return (
      <>
        <input
          type='text'
          ref={ref}
          className={cn(
            `block h-[56px] w-full rounded-[200px] border border-primaryLight/20
            bg-transparent px-6 text-fs-17 text-primaryLight autofill:bg-clip-text
            autofill:text-fill-primaryLight focus:border-primaryLight/50 focus:outline-none
            focus:placeholder:text-primaryLight tablet:w-[400px]`,
            {
              'border-success/50': !errors[inputName] && dirtyFields[inputName],
              'border-error/50': errors[inputName]
            },
            className
          )}
          {...props}
        />
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
