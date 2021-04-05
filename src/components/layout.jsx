import React from "react";
import Head from "next/head";
import layoutStyles from "./layout.module.scss";
import twitterTokens from "../tokens/twitter";

// TODO: Pull site title fom a token or gatsby-config

export default ({ children }) => (
  <div className={layoutStyles.column}>
    <Head>
      <title>{twitterTokens.card.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterTokens.handle} />
      <meta name="twitter:creator" content={twitterTokens.handle} />
      <meta name="og:url" content={twitterTokens.siteUrl} />
      <meta name="og:title" content={twitterTokens.card.title} />
      <meta name="og:description" content={twitterTokens.card.description} />
      <meta
        name="og:image"
        content={`${twitterTokens.siteUrl}${twitterTokens.card.image}`}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <main className={layoutStyles.layout}>{children}</main>
  </div>
);
