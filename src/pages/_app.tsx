import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"

import { rounded, slackside } from "utils/font"
import "styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <ThemeProvider>
        <div className={`${rounded.variable} ${slackside.variable}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
