import { DatePicker } from '@ark-ui/react'

import { DatePickerViewControls } from './DatePickerViewControls'

export const DatePickerYearView = () => (
  <DatePicker.View view='year'>
    <DatePicker.Context>
      {datePicker => (
        <>
          <DatePickerViewControls />
          <DatePicker.Table className='mt-3.5'>
            <DatePicker.TableBody className='space-y-2'>
              {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                <DatePicker.TableRow
                  key={id}
                  className='flex gap-[27px]'>
                  {years.map((year, id) => (
                    <DatePicker.TableCell
                      key={id}
                      className='size-8 text-center'
                      value={year.value}>
                      <DatePicker.TableCellTrigger className='text-base font-normal'>
                        {year.label}
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
