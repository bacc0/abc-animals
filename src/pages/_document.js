import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <style>
                    {`
                        html,
                        body {
                            user-select: none;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            -webkit-tap-highlight-color: transparent;
                            -webkit-touch-callout: none;
                            -ms-touch-action: pan-y;
                            touch-action: pan-y;
                            -ms-content-zooming: none;
                            -ms-user-zoom: none;
                            -ms-overflow-style: none;
                            -webkit-overflow-scrolling: touch;
                            overflow-scrolling: touch;
                            -webkit-text-size-adjust: none;
                            -moz-text-size-adjust: none;
                            -ms-text-size-adjust: none;
                            text-size-adjust: none;
                            -webkit-user-scalable: none;
                            -moz-user-scalable: none;
                            -ms-user-scalable: none;
                            user-scalable: none;
                        }
                    `}
                </style>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
