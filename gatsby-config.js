const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fullConfig = resolveConfig(tailwindConfig)
const path = require(`path`)
// const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config = require('gatsby-plugin-config')

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
        pages: path.join(__dirname, `src/pages`),
        components: path.join(__dirname, `src/components`),
        utils: path.join(__dirname, `src/utils`),
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green['500'],
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
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: config.GATSBY_FIREBASE_API_KEY,
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
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     dbName: process.env.GATSBY_DB_NAME,
    //     collection: process.env.GATSBY_DB_COLLECTIONS,
    //     server: {
    //       address: process.env.GATSBY_DB_URL,
    //       port: 27017,
    //     },
    //     auth: {
    //       user: process.env.GATSBY_DB_USERNAME,
    //       password: process.env.GATSBY_DB_PASSWORD,
    //     },
    //     extraParams: {
    //       replicaSet: 'Main-shard-0',
    //       ssl: true,
    //       authSource: 'admin',
    //       retryWrites: true,
    //     },
    //   },
    //   // query: { documents: { as_of: { $gte: 1604397088013 } } },
    // },
    // shouldAnalyseBundle && {
    //   resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    //   options: {
    //     analyzerMode: `static`,
    //     reportFilename: `_bundle.html`,
    //     openAnalyzer: false,
    //   },
    // },
  ],
}
