module.exports = {
  pathPrefix: "/portableThoughts",
  siteMetadata: {
    title: `portableThoughts`,
    siteUrl: `https://portableCoder.github.io/portableThoughts`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/logo-svg.svg'
      }
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },


    `gatsby-transformer-sharp`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {

        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      }
    }
  ]
}