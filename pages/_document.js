import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <script src="/static/theme.js" />
        <link rel="stylesheet" href="/static/bulma.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}