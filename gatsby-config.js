module.exports = {
  siteMetadata: {
    title: `ETC Mobil`,
    description: `ETC Mobil test site.`,
    author: `@s`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options:{
        name: `ìmages`,
        path: `${__dirname}/src/images`,
      }
    },
    {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `f54d955516514489be752cd58f03d7`,
      preview: false,
      disableLiveReload: false,
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
