import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import ReactBricksApp from '../components/ReactBricksApp'

import '../css/styles.css'

const MyApp = (props: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="color-mode"
      enableSystem={false}
      defaultTheme="light"
    >
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <ReactBricksApp {...props}></ReactBricksApp>
    </ThemeProvider>
  )
}

export default MyApp
