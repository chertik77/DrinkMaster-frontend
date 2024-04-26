import { ThemeProvider } from 'next-themes'

const Page = async () => {
  return (
    <ThemeProvider
      attribute='class'
      enableSystem={false}>
      <div>d32d32</div>
    </ThemeProvider>
  )
}

export default Page
