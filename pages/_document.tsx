import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mitr:wght@500;600;700&family=Molengo&family=Overpass:ital,wght@0,500;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
