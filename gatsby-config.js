module.exports = {
  siteMetadata: {
    title: `Holy Cupcakes Pasteleria`,
    description: `Diseño de pasteles y mesas dulces`,
    author: `@digitalhydra`,
    siteUrl: 'https://holycupcakes.co'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind--serif`,
        short_name: `serif`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/services`,
        name: 'services'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/recetas`,
        name: 'recetas',
        type: 'recetas'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer external",
            },
          },
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.holycupcakes.co',
        // sitemap: 'https://www.drupalconsole.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Serif TC`,
            subsets: [`latin`],
            variants: ['300', `400`, `700`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
  ]
};
