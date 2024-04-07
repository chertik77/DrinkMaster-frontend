import { userService } from '@/services/user.service'

export const HeaderLayout = async () => {
  const user = await userService.getUserProfile()

  console.log(user)
  return <div className="text-red-600">{user.email}</div>
}
