import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'

import { cn } from '@/lib/utils'
import { ErrorMessage } from '@hookform/error-message'
import { isAfter } from 'date-fns'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import type { Control, FieldErrors } from 'react-hook-form'

import { Controller } from 'react-hook-form'

type DateInputProps = {
  control: Control<SignUpSchemaFields>
  errors: FieldErrors<SignUpSchemaFields>
}

export const DateInput = ({ control, errors }: DateInputProps) => {
  return (
    <>
      <Controller
        control={control}
        name='dateOfBirth'
        render={({ field, fieldState }) => (
          <DatePicker
            autoComplete='bday'
            dayClassName={() =>
              '!text-primaryLight hover:!text-primaryDark aria-disabled:!text-primaryLight/20 aria-disabled:hover:!text-primaryLight/20'
            }
            placeholderText='dd/mm/yyyy'
            dateFormat='dd/MM/yyyy'
            calendarStartDay={1}
            selected={field.value}
            fixedHeight
            className={cn(
              `mb-[14px] h-[56px] w-full rounded-[200px] border border-primaryLight/20
              bg-transparent px-6 text-fs-17 text-primaryLight focus:border-primaryLight/50
              focus:outline-none focus:placeholder:text-primaryLight tablet:w-[400px]`,
              {
                'border-success/50': !errors.dateOfBirth && fieldState.isDirty,
                'border-error/50': errors.dateOfBirth
              }
            )}
            filterDate={date => !isAfter(date, new Date())}
            calendarClassName='!bg-secondaryDark !text-primaryLight !border-transparent !rounded-lg !text-fs-14-fw-400-lh-1.28 !font-manrope'
            onChange={field.onChange}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name='dateOfBirth'
        render={({ message }) => (
          <div className="mb-[14px] ml-2 text-error">{message}</div>
        )}
      />
    </>
  )
}
