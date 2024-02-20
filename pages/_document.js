import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <script src="/static/theme.js" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Giovanni Puntil – software engineer, designer, maker</title>
        <meta name="description" content="Giovanni Puntil – software engineer, designer, maker. I find joy in the process of creation, whether physical or virtual." />
        <link rel="stylesheet" href="/static/bulma.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}