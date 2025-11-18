import { Html, Head, Main, NextScript } from 'next/document';
import { siteConfig } from '../config/siteConfig';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={siteConfig.seo.description} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:image" content={siteConfig.seo.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={siteConfig.seo.ogImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
