import React from "react";
import Helmet from "react-helmet";
import layoutStyles from "./layout.module.scss";
import twitterTokens from "../tokens/twitter";

// TODO: Pull site title fom a token or gatsby-config

export default ({ children }) => (
  <div className={layoutStyles.column}>
    <Helmet
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        { name: "twitter:site", content: "@ryrykubes" },
        { name: "twitter:creator", content: "@ryrykubes" },
        { name: "og:url", content: twitterTokens.siteUrl },
        { name: "og:title", content: twitterTokens.card.title },
        {
          name: "og:description",
          content: twitterTokens.card.description,
        },
        {
          name: "og:image",
          content: `${twitterTokens.siteUrl}${twitterTokens.card.image}`,
        },
      ]}
      title={twitterTokens.card.title}
    />
    <main className={layoutStyles.layout}>{children}</main>
  </div>
);
