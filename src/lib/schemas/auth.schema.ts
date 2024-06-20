import * as z from 'zod'

export const SigninSchema = z.object({
  email: z.string().trim().email('Please enter a valid email.'),
  password: z.string().trim().min(6, 'Please enter at least 6 characters.')
})

export const SignupSchema = SigninSchema.extend({
  name: z.string().trim().min(2, 'Please enter at least 2 characters.'),
  dateOfBirth: z.date({ message: 'Please enter a valid birth date.' })
})

export type SigninSchema = z.infer<typeof SigninSchema>
export type SignupSchema = z.infer<typeof SignupSchema>
