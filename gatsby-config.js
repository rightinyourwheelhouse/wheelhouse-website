module.exports = {
  plugins: [
    {
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: '/static/admin/config.yml',
      },
      resolve: 'gatsby-plugin-netlify-cms-paths',
    },
    'gatsby-transformer-json',
    {
      options: {
        path: './src/data/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-sass',
    {
      options: {
        alias: {
          '~api': 'src/api',
          '~components': 'src/components',
          '~data': 'src/data',
          '~hooks': 'src/hooks',
          '~images': 'src/images',
          '~layouts': 'src/layouts',
          '~modules': 'src/modules',
          '~pages': 'src/pages',
          '~styles': 'src/styles',
          '~templates': 'src/templates',
          '~utils': 'src/utils',
        },
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      options: {
        name: 'Blog',
        url: 'https://blog.raccoons.be/rss/32013',
      },
      resolve: 'gatsby-source-rss-feed',
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
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'static',
        path: `${__dirname}/static/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/wheelhouse.svg', // This path is relative to the root of the site.
        name: 'Wheelhouse agency',
        short_name: 'Wheelhouse',
        start_url: '/',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
      resolve: 'gatsby-plugin-netlify-cms',
    },
    'gatsby-plugin-netlify',
  ],
  siteMetadata: {
    author: 'Daren M.',
    description: 'Wheelhouse agency - javascript experts',
    siteUrl: 'https://dazzling-mclean-2ccbbd.netlify.app',
    title: 'Wheelhouse agency',
  },
};
