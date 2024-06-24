import { DatePicker } from '@ark-ui/react'

import { DatePickerViewControls } from './DatePickerViewControls'

export const DatePickerDayView = () => (
  <DatePicker.View view='day'>
    <DatePicker.Context>
      {datePicker => (
        <>
          <DatePickerViewControls />
          <DatePicker.Table className='mt-3.5'>
            <DatePicker.TableHead>
              <DatePicker.TableRow className='mb-[11px] flex gap-[11px]'>
                {datePicker.weekDays.map((weekDay, id) => (
                  <DatePicker.TableHeader
                    key={id}
                    className='size-5 text-base font-medium text-white/50'>
                    {weekDay.short.slice(0, -1)}
                  </DatePicker.TableHeader>
                ))}
              </DatePicker.TableRow>
            </DatePicker.TableHead>
            <DatePicker.TableBody className='space-y-[11px]'>
              {datePicker.weeks.map((week, id) => (
                <DatePicker.TableRow
                  key={id}
                  className='flex gap-[11px]'>
                  {week.map((day, id) => (
                    <DatePicker.TableCell
                      key={id}
                      value={day}
                      className='size-5 text-center'>
                      <DatePicker.TableCellTrigger
                        className='rounded-full text-base font-normal data-[selected]:bg-white
                          data-[outside-range]:text-white/20 data-[selected]:text-black-secondary'>
                        {day.day}
                      </DatePicker.TableCellTrigger>
                    </DatePicker.TableCell>
                  ))}
                </DatePicker.TableRow>
              ))}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </>
      )}
    </DatePicker.Context>
  </DatePicker.View>
)
