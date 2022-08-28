import '../styles/globals.css'
import '../styles/markdown.css'
import '../styles/dark-theme.css'
import "@fontsource/roboto-condensed"
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Icons from '../components/Icons'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <Icons />
  </Head>

  return <Component {...pageProps} />
}

export default MyApp
