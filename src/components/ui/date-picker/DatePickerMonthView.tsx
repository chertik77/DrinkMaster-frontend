import { DatePicker } from '@ark-ui/react'

import { DatePickerViewControls } from './DatePickerViewControls'

export const DatePickerMonthView = () => (
  <DatePicker.View view='month'>
    <DatePicker.Context>
      {datePicker => (
        <>
          <DatePickerViewControls />
          <DatePicker.Table className='mt-3.5'>
            <DatePicker.TableBody className='space-y-2'>
              {datePicker
                .getMonthsGrid({ columns: 4, format: 'short' })
                .map((months, id) => (
                  <DatePicker.TableRow
                    key={id}
                    className='flex gap-8'>
                    {months.map((month, id) => (
                      <DatePicker.TableCell
                        key={id}
                        value={month.value}
                        className='size-7 text-center'>
                        <DatePicker.TableCellTrigger className='text-base font-normal'>
                          {month.label}
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
