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
      <Component {...pageProps} />
    </div>
  )
}