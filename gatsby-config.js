module.exports = {
  siteMetadata: {
    title: `Karlo Delalic`,
    description: `Karlo Delalic is a fullstack web developer and software engineer in the Toronto area. Experienced with React, Angular, Node, Golang, SQL, NoSQL, and more.`,
    author: `@karlodelalic`,
    siteUrl: `https://karlodelalic.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/markdown-pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/tech-logos`,
        name: "tech-logo",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karlo Delalic's Personal Website`,
        short_name: `Karlo Delalic`,
        start_url: `/`,
        background_color: `#6772e5`,
        theme_color: `#6772e5`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-39382503-2",
        head: false,
        anonymize: false,
        respectDNT: false,
        siteSpeedSampleRate: 10,
      },
    },
  ],
}
