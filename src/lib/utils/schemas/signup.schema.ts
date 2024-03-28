import type { Output } from 'valibot'

import { email, minLength, object, string, toTrimmed } from 'valibot'

export const signUpSchema = object({
  name: string([
    toTrimmed(),
    minLength(2, 'Please enter at least 2 characters.')
  ]),
  dateOfBirth: string(),
  email: string([toTrimmed(), email('Please enter a valid email.')]),
  password: string([
    toTrimmed(),
    minLength(6, 'Please enter at least 6 characters.')
  ])
})

export type SignUpSchemaFields = Output<typeof signUpSchema>
