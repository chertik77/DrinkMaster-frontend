import type { Output } from 'valibot'

import { email, minLength, object, string, toTrimmed } from 'valibot'

export const signinSchema = object({
  email: string([toTrimmed(), email('Please enter your email.')]),
  password: string([toTrimmed(), minLength(6, 'Please enter your password.')])
})

export type SigninSchemaFields = Output<typeof signinSchema>
