import Image from 'next/image'
import { DatePicker } from '@ark-ui/react'

export const DatePickerViewControls = () => (
  <DatePicker.ViewControl className='flex justify-center border-b border-white/20 pb-3.5'>
    <DatePicker.PrevTrigger className='absolute left-3.5 top-lg'>
      <Image
        src='/arrow-prev.svg'
        alt='Prev Month Icon'
        width={6}
        height={6}
      />
    </DatePicker.PrevTrigger>
    <DatePicker.ViewTrigger>
      <DatePicker.RangeText className='text-md font-medium' />
    </DatePicker.ViewTrigger>
    <DatePicker.NextTrigger className='absolute right-3.5 top-lg'>
      <Image
        src='/arrow-next.svg'
        alt='Next Month Icon'
        width={6}
        height={6}
      />
    </DatePicker.NextTrigger>
  </DatePicker.ViewControl>
)
