import React from 'react'
import { graphql } from 'gatsby'
import { CommonLayout } from 'components'
import { withMappedArticlesProps } from 'hocs/with-mapped-props'

export default withMappedArticlesProps(({ articles }) => (
  <CommonLayout article={articles[0]}>
    <article>
      <h1>{articles[0].title}</h1>
      <section dangerouslySetInnerHTML={{ __html: articles[0].content }} />
    </article>
  </CommonLayout>
))

export const query = graphql`
  query($slug: String!) {
    allContentfulArticle(filter: { link: { eq: $slug } }) {
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
  }
`
