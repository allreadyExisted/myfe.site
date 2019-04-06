const path = require(`path`)

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return graphql(`
    query {
      articles: allContentfulArticle {
        edges {
          node {
            title
            description
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
      tags: allContentfulTag {
        edges {
          node {
            name
          }
        }
      }
    }
  `).then(({
    data: {
      articles: {
        edges: articlesEdges
      },
      tags: {
        edges: tagsEdges
      }
    }
  }) => {
    articlesEdges.forEach(({
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
    tagsEdges.forEach(({
      node
    }) => {
      createPage({
        path: `/tags/${node.name.toLowerCase()}`,
        component: path.resolve(`./src/templates/tag.jsx`),
        context: {
          tag: node.name
        }
      })
    })
  })
}