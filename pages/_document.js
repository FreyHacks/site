import { Html, Main, NextScript } from 'next/document'
import Meta from '../components/Meta'

export default function Document() {
  return (
    <Html>
      <Meta />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
