import '../styles/globals.css'
import '../styles/markdown.css'
import '../styles/dark-theme.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
