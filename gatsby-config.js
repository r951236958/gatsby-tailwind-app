const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green["500"],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // useResolveUrlLoader: true,
        sassOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prettier-eslint`,
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            `**/*.{css,scss,less}`,
            `**/*.{json,json5}`,
            `**/*.{graphql}`,
            `**/*.{md,mdx}`,
            `**/*.{html}`,
            `**/*.{yaml,yml}`,
          ],
        },
        eslint: {
          patterns: `**/*.{js,jsx,ts,tsx}`,
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
        },
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-use-dark-mode`,
  ],
}
