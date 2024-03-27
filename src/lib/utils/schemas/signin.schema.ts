import type { Output } from 'valibot'

import { email, minLength, object, string, toTrimmed } from 'valibot'

export const signinSchema = object({
  email: string([toTrimmed(), email('Please enter a valid email.')]),
  password: string([
    toTrimmed(),
    minLength(6, 'Please enter at least 6 characters.')
  ])
})

export type SigninSchemaFields = Output<typeof signinSchema>
