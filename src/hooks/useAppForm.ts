import type { FieldValues, UseFormProps } from 'react-hook-form'
import type { ZodSchema } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useAppForm = <T extends FieldValues>(
  schema: ZodSchema,
  options?: UseFormProps<T>
) =>
  useForm<T>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    ...options
  })
