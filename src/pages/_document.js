import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="manifest" href="./manifest.json"></link>
          <link rel="apple-touch-icon" href="./haruki.png"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <title>haruki portfolio</title>
          <meta key="haruki kuriwada 栗和田 玄紀 kuri-sun" />
          <meta
            name="keywords"
            content="haruki kuriwada 栗和田 玄紀 kuri-sun"
          />
          <link
            rel="manifest"
            href="/app.webmanifest"
            crossOrigin="use-credentials"
          />
          <link rel="shortcut icon" type="image/jpg" href="./favicon.ico" />
          <meta name="robots"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
          <meta
            name="description"
            content="This is Kuri-sun portfolio page. My name is Haruki Kuriwada. Take a look, Thank you. #kuri-sun"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
