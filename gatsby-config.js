/* eslint-disable sort-keys */
const {
  COMPANY_URL,
  COMPANY_NAME,
  COMPANY_NAME_SHORT,
  COMPANY_ANALYTICS_ID,
  COMPANY_DESCRIPTION,
} = require('./src/data/company');

module.exports = {
  plugins: [
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'assets',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
        ],
      },
    },
    {
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
      resolve: 'gatsby-plugin-netlify-cms',
    },
    {
      options: {
        environments: ['production', 'development'],
        googleAnalytics: {
          anonymize: true,
          cookieName: 'gdpr-google-analytics',
          trackingId: COMPANY_ANALYTICS_ID,
        },
      },
      resolve: 'gatsby-plugin-gdpr-cookies',
    },
    {
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: '/static/admin/config.yml',
      },
      resolve: 'gatsby-plugin-netlify-cms-paths',
    },
    'gatsby-transformer-json',

    'gatsby-plugin-sass',
    {
      options: {
        alias: {
          '~components': 'src/components',
          '~data': 'src/data',
          '~hooks': 'src/hooks',
          '~images': 'src/images',
          '~layouts': 'src/layouts',
          '~modules': 'src/modules',
          '~pages': 'src/pages',
          '~services': 'src/services',
          '~styles': 'src/styles',
          '~templates': 'src/templates',
          '~utils': 'src/utils',
        },
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    {
      options: {
        name: 'Blog',
        url: 'https://blog.raccoons.be/rss/32013',
      },
      resolve: 'gatsby-source-rss-feeds',
    },
    {
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
      resolve: 'gatsby-plugin-svgr-loader',
    },
    'gatsby-plugin-react-helmet',

    {
      options: {
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg', // This path is relative to the root of the site.
        name: COMPANY_NAME,
        short_name: COMPANY_NAME_SHORT,
        start_url: '/',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-netlify',
  ],
  siteMetadata: {
    author: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    siteUrl: COMPANY_URL,
    title: COMPANY_NAME,
    trackingId: COMPANY_ANALYTICS_ID,
  },
};
