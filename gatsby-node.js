const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// first create the slug for posts and pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      // it will look inside the content folder and create a file path (posts/post-2...)
      basePath: `markdown-pages`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const content = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // clg shows up inside terminal (Node)
  // console.log(content)

  // do nothing if error
  if (content.error) return

  const allPosts = content.data.posts.edges

  // create the individual post pages
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.published) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Post.js`),
        context: {
          // data passed to context is available in page queries as GrapgQL variables
          slug: node.fields.slug,
        },
      })
    }
  })

  // create the archive pages
  const postsPerPage = 6
  const numPages = Math.ceil(allPosts.length / postsPerPage)
  Array.from({
    length: numPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve(`./src/templates/Home.js`),
      context: {
        // limit is something we have in our graphql query, which will allow us to paginate
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
