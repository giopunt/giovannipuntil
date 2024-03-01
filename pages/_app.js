import Head from "next/head";
import clsx from 'clsx';
import { Inter_Tight, Inter } from 'next/font/google'

import '../styles/global.css';

const interTight = Inter_Tight({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

const inter = Inter({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.variable, interTight.variable)}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Giovanni Puntil – software engineer, designer, maker</title>
        <meta name="description" content="Giovanni Puntil – software engineer, designer, maker. I find joy in the process of creation, whether physical or virtual." />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}