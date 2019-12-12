module.exports = {
  siteMetadata: {
    title: `ETC Kampanj`,
    description: `Kampanjsidor`,
    author: `ETC IT`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `449ae1f07915247163eae1d102f494`,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
