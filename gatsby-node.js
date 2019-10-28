
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // MDX content
  if (node.internal.type === `Mdx`) {
    const sourceInstanceName = getNode(node.parent).sourceInstanceName;

    if (sourceInstanceName===`recetas`) {
      const slug = getNode(node.parent).relativePath.replace(".md", "").toLowerCase()
      const title = node.frontmatter.title
      // Add slug field
      createNodeField({
        name: `slug`,
        node,
        value: `/${sourceInstanceName}/${slug}`
      })

      // Add title field
      createNodeField({
        name: `title`,
        node,
        value: title
      })
    }

    // if (sourceInstanceName===`articles` || sourceInstanceName===`changelog` || sourceInstanceName===`pages`) {
    //   const slug = node.frontmatter.path
    //   // Add slug field
    //   createNodeField({
    //     name: `slug`,
    //     node,
    //     value: slug
    //   })
    // }
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allRecetas: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "recetas"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const recetas = result.data.allRecetas.edges;
  recetas.forEach(function({ node }) {
    const { slug } = node.fields;
    createPage({
      path: slug,
      component: require.resolve("./src/templates/receta.js"),
      context: {
        id: node.id,
        slug
      }
    });
  });
};


exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Mdx implements Node {
      fileInfo: File @link(from: "parent")
    }
  `)
}