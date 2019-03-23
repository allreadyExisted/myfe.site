import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/layout'
import { withMappedProps } from 'hocs/with-mapped-props'

export default withMappedProps(({ articles }) => {
  return (
    <Layout>
      <h1>MyFE</h1>
      {articles.map(article => (
        <article key={article.link}>
          <header>
            <h3>
              <Link to={article.link} rel="bookmark">
                {article.title}
              </Link>
            </h3>
          </header>
          <section dangerouslySetInnerHTML={{ __html: article.spoiler }} />
        </article>
      ))}
    </Layout>
  )
})

export const query = graphql`
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
`
