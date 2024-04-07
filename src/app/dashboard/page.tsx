import { ThemeProvider } from 'next-themes'

import { userService } from '@/services/user.service'

const Page = async () => {
  const { userTheme } = await userService.getUserProfile()

  return (
    <ThemeProvider
      attribute='class'
      enableSystem={false}
      defaultTheme={userTheme}>
      <div>d32d32</div>
    </ThemeProvider>
  )
}

export default Page
