const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      articles: allContentfulArticle {
        edges {
          node {
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
  `).then(
    ({
      data: {
        articles: { edges: articlesEdges },
        tags: { edges: tagsEdges }
      }
    }) => {
      articlesEdges.forEach(({ node }) => {
        createPage({
          path: `/articles/${node.link}`,
          component: path.resolve(`./src/templates/article.jsx`),
          context: {
            slug: node.link
          }
        })
      })
      tagsEdges.forEach(({ node }) => {
        createPage({
          path: `/articles/tags/${node.name.toLowerCase()}`,
          component: path.resolve(`./src/templates/article-tag.jsx`),
          context: {
            tag: node.name
          }
        })
        createPage({
          path: `/snippets/tags/${node.name.toLowerCase()}`,
          component: path.resolve(`./src/templates/snippet-tag.jsx`),
          context: {
            tag: node.name
          }
        })
      })
    }
  )
}
