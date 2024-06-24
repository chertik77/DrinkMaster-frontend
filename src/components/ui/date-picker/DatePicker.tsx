import type { SignupSchema } from '@/lib/schemas'
import type { Control } from 'react-hook-form'

import Image from 'next/image'
import { DatePicker, Portal } from '@ark-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { Controller } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { DatePickerDayView } from './DatePickerDayView'
import { DatePickerMonthView } from './DatePickerMonthView'
import { DatePickerYearView } from './DatePickerYearView'

type BirthDayPickerProps = {
  control: Control<SignupSchema>
}

export const BirthDayPicker = ({ control }: BirthDayPickerProps) => {
  return (
    <Controller
      name='dateOfBirth'
      control={control}
      render={({ field, formState: { errors, dirtyFields } }) => {
        return (
          <DatePicker.Root
            // value={[field.value?.toString()]}
            onValueChange={({ valueAsString }) => {
              field.onChange(valueAsString[0])
            }}
            startOfWeek={1}
            positioning={{ placement: 'bottom-end' }}>
            <DatePicker.Control className='relative w-full tablet:w-40xl'>
              <DatePicker.Input
                className={cn(
                  `mb-3.5 block h-2xl w-full rounded-20xl border border-white/20 bg-transparent
                  px-6 text-md text-white autofill:bg-clip-text autofill:text-fill-white
                  focus:border-white/50 focus:outline-none focus:placeholder:text-white`,
                  {
                    'border-success/50':
                      !errors.dateOfBirth && dirtyFields.dateOfBirth,
                    'mb-3.5 border-error/50': errors.dateOfBirth
                  }
                )}
                // placeholder='dd/mm/yyyy'
              />
              <DatePicker.Trigger className='absolute right-6 top-lg'>
                <Image
                  src='/calendar.svg'
                  alt='Calendar Icon'
                  width={20}
                  height={20}
                />
              </DatePicker.Trigger>
            </DatePicker.Control>
            <ErrorMessage
              errors={errors}
              name='dateOfBirth'
              render={({ message }) => (
                <div className='mb-3.5 ml-2 text-error'>{message}</div>
              )}
            />
            <Portal>
              <DatePicker.Positioner className='!z-10'>
                <DatePicker.Content className='animation rounded-lg bg-black-secondary p-3.5 font-manrope text-white'>
                  <DatePickerDayView />
                  <DatePickerMonthView />
                  <DatePickerYearView />
                </DatePicker.Content>
              </DatePicker.Positioner>
            </Portal>
          </DatePicker.Root>
        )
      }}
    />
  )
}
