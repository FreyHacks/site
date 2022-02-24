import { Html, Head, Main, NextScript } from 'next/document'
import Meta from "../components/Meta"
export default function Document() {
    return (
        <Html>
            <Head>
              <Meta/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
