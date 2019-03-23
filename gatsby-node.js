const path = require(`path`)

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  return graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            title
            spoiler
            publishedAt
            content {
              childMarkdownRemark {
                html
              }
            }
            link
          }
        }
      }
    }
  `).then(({
    data: {
      allContentfulArticle: {
        edges
      }
    }
  }) => {
    edges.forEach(({
      node
    }) => {
      createPage({
        path: node.link,
        component: path.resolve(`./src/templates/post.jsx`),
        context: {
          slug: node.link
        }
      })
    })
  })
}