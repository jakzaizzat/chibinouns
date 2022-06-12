import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppProvider from '../src/contexts/AppProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chibinouns</title>
        <meta
          name="description"
          content="Chibinouns is a collections of chibi (ちび or チビ) cute mix with nouns culture generated PFPPP 's (profile picture passion project). We're inspired by Nouns and Wgmi Interfaces. No roadmaps or promises, just vibes."
        />
        <meta
          property="og:title"
          content="
We're still building, see you soon."
        />
        <meta
          property="og:description"
          content="Chibinouns is a collections of chibi (ちび or チビ) cute mix with nouns culture generated PFPPP 's (profile picture passion project). We're inspired by Nouns and Wgmi Interfaces. No roadmaps or promises, just vibes."
        />
        <meta property="og:url" content="https://www.chibinouns.wtf/" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="/meta/cover.jpg"></meta>
        <link key="font" rel="preconnect" href="https://fonts.googleapis.com" />
        <link key="font2" rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
