/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "Palanca",
        // This is the field under which it's accessible
        fieldName: "palance",
        // URL to query from
        url: "https://bundle1990.herokuapp.com/v1/graphql",
      },
    },
  ]
}
