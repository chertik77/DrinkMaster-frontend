import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
import type { Control } from 'react-hook-form'

import { cn } from '@nextui-org/react'
// import { Controller } from 'react-hook-form'

// import type { SignUpSchemaFields } from '@/lib/utils/schemas/signup.schema'
// import type { Control } from 'react-hook-form'

// import { cn } from '@/lib/utils'
// import { addDays } from 'date-fns'

import { addDays } from 'date-fns'
import Image from 'next/image'
import { DayPicker, useInput } from 'react-day-picker'
import { Controller } from 'react-hook-form'

import { Popover, PopoverContent, PopoverTrigger } from './Popover'

type DatePickerInputProps = {
  control: Control<SignUpSchemaFields>
}

export const DatePickerInput = ({ control }: DatePickerInputProps) => {
  const { inputProps, dayPickerProps } = useInput({
    toDate: addDays(new Date(), 1),
    format: 'dd/MM/yyyy'
  })

  // const popperRef = useRef<HTMLDivElement>(null)

  // const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
  //   null
  // )

  // const popper = usePopper(popperRef.current, popperElement, {
  //   placement: 'bottom-start'
  // })

  return (
    <Controller
      control={control}
      name='dateOfBirth'
      render={({ field, fieldState }) => (
        <Popover>
          <PopoverTrigger className="relative mb-[14px] w-full tablet:w-[400px]">
            <input
              className={cn(
                `h-[56px] w-full rounded-[200px] border border-primaryLight/20 bg-transparent
                px-6 text-fs-17 text-primaryLight focus:outline-none`,
                {
                  'border-success/50': !fieldState.error && fieldState.isDirty,
                  'border-error/50': fieldState.error
                }
              )}
              {...inputProps}
              placeholder='dd/mm/yyyy'
            />
            <Image
              src='/calendar.svg'
              alt='Calendar Icon'
              className="absolute right-6 top-[18px]"
              width={20}
              height={20}
            />
          </PopoverTrigger>
          <PopoverContent hideWhenDetached>
            <DayPicker
              captionLayout='dropdown'
              mode='single'
              initialFocus
              selected={field.value}
              weekStartsOn={1}
              toDate={addDays(new Date(), 1)}
              onSelect={field.onChange}
              showOutsideDays
              className="rounded-lg bg-secondaryDark p-[14px] text-primaryLight"
              classNames={{
                table: '!mt-[14px]',
                month: 'space-y-4',
                caption:
                  'flex justify-center relative border-b border-primaryLight/20 pb-[14px]',
                caption_label: 'text-fs-16-fw-500-lh-normal',
                nav: 'flex items-center',
                nav_button:
                  'opacity-50 hover:opacity-100 disabled:cursor-not-allowed disabled:hover:opacity-50',
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                head_row: 'flex',
                head_cell: 'w-7 text-fs-14-fw-500-lh-1.28 text-primaryLight/50',
                row: 'flex mt-[11px]',
                cell: 'p-0',
                day: 'h-7 w-7',
                day_selected:
                  'bg-primaryLight rounded-[50%] text-secondaryDark',
                day_outside: 'text-primaryLight/20',
                day_disabled: 'text-primaryLight/20'
              }}
              {...dayPickerProps}
            />
          </PopoverContent>
        </Popover>
      )}
    />
  )
}

// export const DatePickerInput = ({ control }: DatePickerInputProps) => {
//   const [show, setShow] = useState<boolean>(false)

//   const handleClose = (state: boolean) => {
//     setShow(state)
//   }

//   const options: IOptions = {
//     defaultDate: null,
//     inputPlaceholderProp: 'dd/mm/yyyy',
//     inputDateFormatProp: {
//       day: 'numeric',
//       month: 'numeric',
//       year: 'numeric'
//     },
//     todayBtn: false,
//     theme: {
//       inputIcon: 'hidden',
//       input:
//         'h-[56px] w-full rounded-[200px] border border-primaryLight/20 bg-transparent px-6 text-fs-17 text-primaryLight focus:outline-none focus:placeholder:text-primaryLight tablet:w-[400px]'
//     }
//   }

//   return (
//     <Controller
//       control={control}
//       name='dateOfBirth'
//       render={({ field, fieldState }) => (
//         <div className="relative mb-[14px] tablet:w-[400px]">
//           <Datepicker
//             options={options}
//             show={show}
//             setShow={handleClose}
//             onChange={field.onChange}
//           />
//           <Image
//             src='/calendar.svg'
//             alt='Calendar Icon'
//             className="absolute right-6 top-[18px]"
//             width={20}
//             height={20}
//           />
//         </div>
//         // <Popover>
//         //   <PopoverTrigger className="relative mb-[14px]">
//         //     <input
//         //       className={cn(
//         //         `h-[56px] w-full rounded-[200px] border border-primaryLight/20 bg-transparent
//         //         px-6 text-fs-17 text-primaryLight focus:outline-none
//         //         focus:placeholder:text-primaryLight tablet:w-[400px]`,
//         //         {
//         //           'border-success/50': !fieldState.error && fieldState.isDirty,
//         //           'border-error/50': fieldState.error
//         //         }
//         //       )}
//         //       {...inputProps}
//         //       placeholder='dd/mm/yyyy'
//         //     />
//         //     <Image
//         //       src='/calendar.svg'
//         //       alt='Calendar Icon'
//         //       className="absolute right-6 top-[18px]"
//         //       width={20}
//         //       height={20}
//         //     />
//         //   </PopoverTrigger>
//         //   <PopoverContent>
//         //     <DayPicker
//         //       mode='single'
//         //       selected={field.value}
//         //       weekStartsOn={1}
//         //       toDate={addDays(new Date(), 1)}
//         //       onSelect={field.onChange}
//         //       showOutsideDays
//         //       className="rounded-lg bg-secondaryDark p-[14px] text-primaryLight"
//         //       classNames={{
//         //         table: '!mt-[14px]',
//         //         month: 'space-y-4',
//         //         caption:
//         //           'flex justify-center relative border-b border-primaryLight/20 pb-[14px]',
//         //         caption_label: 'text-fs-16-fw-500-lh-normal',
//         //         nav: 'flex items-center',
//         //         nav_button:
//         //           'opacity-50 hover:opacity-100 disabled:cursor-not-allowed disabled:hover:opacity-50',
//         //         nav_button_previous: 'absolute left-1',
//         //         nav_button_next: 'absolute right-1',
//         //         head_row: 'flex',
//         //         head_cell: 'w-7 text-fs-14-fw-500-lh-1.28 text-primaryLight/50',
//         //         row: 'flex mt-[11px]',
//         //         cell: 'p-0',
//         //         day: 'h-7 w-7',
//         //         day_selected:
//         //           'bg-primaryLight rounded-[50%] text-secondaryDark',
//         //         day_outside: 'text-primaryLight/20',
//         //         day_disabled: 'text-primaryLight/20'
//         //       }}
//         //       {...dayPickerProps}
//         //     />
//         //   </PopoverContent>
//         // </Popover>
//       )}
//     />
//   )
// }
