module.exports = {
  plugins: [
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
    {
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['300, 500, 700,900'],
          },
          {
            family: 'Lora',
            variants: ['400'],
          },
        ],
      },
      resolve: 'gatsby-plugin-prefetch-google-fonts',
    },
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        name: 'Wheelhouse agency',
        short_name: 'Wheelhouse',
        start_url: '/',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: 'Daren M.',
    description: 'Wheelhouse agency - javascript experts',
    title: 'Wheelhouse agency',
  },
};
