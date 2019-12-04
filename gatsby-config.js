const siteUrl = process.env.URL || process.env.DEPLOY_URL || `https://liopun.github.io`
module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Liopun`,
    description: `Captone Habiyaremye | Portfolio`,
    author: `@liopun`,
    siteUrl,
    url: `https://liopun.github.io`,
    image: `/images/captone-meta-image.png`,
    social: {
      twitter: `liopun`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    },
    {
    resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Roboto:300,400', 'Roboto Mono']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Captone Habiyaremye`,
        short_name: `hcaptone`,
        start_url: `/`,
        background_color: `#252731`,
        theme_color: `#252731`,
        display: `minimal-ui`,
        icon: `./src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
