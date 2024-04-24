// import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'

// import { cn } from '@/lib/utils'
// import { ErrorMessage } from '@hookform/error-message'
// import { isAfter } from 'date-fns'
// import DatePicker from 'react-datepicker'

// import 'react-datepicker/dist/react-datepicker.css'

// import type { Control, FieldErrors } from 'react-hook-form'

// import { Controller } from 'react-hook-form'

// type DateInputProps = {
//   control: Control<SignUpSchemaFields>
//   errors: FieldErrors<SignUpSchemaFields>
// }

// export const DateInput = ({ control, errors }: DateInputProps) => {
//   return (
//     <>
//       <Controller
//         control={control}
//         name='dateOfBirth'
//         render={({ field, fieldState }) => (
//           <DatePicker
//             autoComplete='bday'
//             dayClassName={() =>
//               '!text-primaryLight hover:!text-primaryDark aria-disabled:!text-primaryLight/20 aria-disabled:hover:!text-primaryLight/20'
//             }
//             placeholderText='dd/mm/yyyy'
//             dateFormat='dd/MM/yyyy'
//             calendarStartDay={1}
//             selected={field.value}
//             fixedHeight
//             className={cn(
//               `mb-[14px] h-[56px] w-full rounded-[200px] border border-primaryLight/20
//               bg-transparent px-6 text-fs-17 text-primaryLight focus:border-primaryLight/50
//               focus:outline-none focus:placeholder:text-primaryLight tablet:w-[400px]`,
//               {
//                 'border-success/50': !errors.dateOfBirth && fieldState.isDirty,
//                 'border-error/50': errors.dateOfBirth
//               }
//             )}
//             filterDate={date => !isAfter(date, new Date())}
//             calendarClassName='!bg-secondaryDark !text-primaryLight !border-transparent !rounded-lg !text-fs-14-fw-400-lh-1.28 !font-manrope'
//             onChange={field.onChange}
//           />
//         )}
//       />
//       <ErrorMessage
//         errors={errors}
//         name='dateOfBirth'
//         render={({ message }) => (
//           <div className="mb-[14px] ml-2 text-error">{message}</div>
//         )}
//       />
//     </>
//   )
// }

import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { Popover, PopoverContent, PopoverTrigger } from './Popover'

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input
          value={date ? format(date, 'PPP') : 'Pick a date'}
          className={cn(
            `mb-[14px] h-[56px] w-full rounded-[200px] border border-primaryLight/20
            bg-transparent px-6 text-fs-17 text-primaryLight focus:border-primaryLight/50
            focus:outline-none focus:placeholder:text-primaryLight tablet:w-[400px]`
          )}>
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {/* {date ? format(date, 'PPP') : <span>Pick a date</span>} */}
        </input>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <DayPicker
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
          showOutsideDays
          className={'p-3'}
          classNames={{
            months:
              'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
            month: 'space-y-4',
            caption: 'flex justify-center pt-1 relative items-center',
            caption_label: 'text-sm font-medium',
            nav: 'space-x-1 flex items-center',
            nav_button: cn(
              // buttonVariants({ variant: 'outline' }),
              'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
            ),
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex',
            head_cell:
              'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
            row: 'flex w-full mt-2',
            cell: cn(
              'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md'
              // props.mode === 'range'
              //   ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
              //   : '[&:has([aria-selected])]:rounded-md'
            ),
            day: cn(
              // buttonVariants({ variant: 'ghost' }),
              'h-8 w-8 p-0 font-normal aria-selected:opacity-100'
            ),
            day_range_start: 'day-range-start',
            day_range_end: 'day-range-end',
            day_selected:
              'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
            day_today: 'bg-accent text-accent-foreground',
            day_outside:
              'day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
            day_disabled: 'text-muted-foreground opacity-50',
            day_range_middle:
              'aria-selected:bg-accent aria-selected:text-accent-foreground',
            day_hidden: 'invisible'
          }}
          // components={{
          //   IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
          //   IconRight: ({ ...props }) => (
          //     <ChevronRightIcon className="h-4 w-4" />
          //   )
          // }}
          // {...props}
        />
      </PopoverContent>
    </Popover>
  )
}
