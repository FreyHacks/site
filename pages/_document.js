import { Html, Head, Main, NextScript } from 'next/document'
import Meta from "../components/Meta"
export default function Document() {
    return (
        <Html lang="en">
            <Head>
              <Meta/>
            </Head>
            <body>
                <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=yellow" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-yellow.svg" alt="Major League Hacking 2022 Hackathon Season" style="width:100%"></a>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
