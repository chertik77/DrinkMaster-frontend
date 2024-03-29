import { ThemeProvider } from 'next-themes'

import { Header } from '@/components/pages/dashboard/HeaderLayout'

import { userService } from '@/services/user.service'

const Page = async () => {
  const user = await userService.getUserProfile()

  return (
    <ThemeProvider
      attribute='class'
      enableSystem={false}
      defaultTheme={user.userTheme}>
      <Header user={user} />
    </ThemeProvider>
  )
}

export default Page
