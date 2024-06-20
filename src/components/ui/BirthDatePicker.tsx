import Image from 'next/image'
import { DatePicker, Portal } from '@ark-ui/react'
import { format } from 'date-fns'

export const Basic = () => {
  return (
    <DatePicker.Root
      startOfWeek={1}
      positioning={{ placement: 'bottom-end' }}
      format={date => format(date.toString(), 'dd/MM/yyyy')}>
      <DatePicker.Control className='relative w-full tablet:w-40xl'>
        <DatePicker.Input
          className='mb-3.5 block h-[56px] w-full rounded-[200px] border border-white/20
            bg-transparent px-6 text-md text-white autofill:bg-clip-text
            autofill:text-fill-white focus:border-white/50 focus:outline-none
            focus:placeholder:text-white'
          placeholder='dd/mm/yyyy'
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
      <Portal>
        <DatePicker.Positioner className='!z-10'>
          <DatePicker.Content className='rounded-lg bg-black-secondary p-3.5 text-white'>
            {/* <DatePicker.YearSelect /> */}
            {/* <DatePicker.MonthSelect /> */}
            <DatePicker.View view='day'>
              <DatePicker.Context>
                {datePicker => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell
                                key={id}
                                value={day}>
                                <DatePicker.TableCellTrigger>
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
            <DatePicker.View view='month'>
              <DatePicker.Context>
                {datePicker => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {datePicker
                          .getMonthsGrid({ columns: 4, format: 'short' })
                          .map((months, id) => (
                            <DatePicker.TableRow key={id}>
                              {months.map((month, id) => (
                                <DatePicker.TableCell
                                  key={id}
                                  value={month.value}>
                                  <DatePicker.TableCellTrigger>
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
            <DatePicker.View view='year'>
              <DatePicker.Context>
                {datePicker => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {datePicker
                          .getYearsGrid({ columns: 4 })
                          .map((years, id) => (
                            <DatePicker.TableRow key={id}>
                              {years.map((year, id) => (
                                <DatePicker.TableCell
                                  key={id}
                                  value={year.value}>
                                  <DatePicker.TableCellTrigger>
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
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}
