import type { User } from '@/types/auth.types'

export const Header = ({ user }: { user: User }) => {
  console.log(user)
  return <div className="text-red-600">{user.email}</div>
}
