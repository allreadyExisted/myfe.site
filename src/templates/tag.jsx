import React from 'react'
import { graphql } from 'gatsby'
import { CommonLayout, ArticlesList } from 'components'
import { withMappedArticlesProps } from 'hocs/with-mapped-props'

export default withMappedArticlesProps(({ articles, pathContext }) => (
  <CommonLayout>
    <h1>Статьи по метке: {pathContext.tag}</h1>
    <ArticlesList articles={articles} />
  </CommonLayout>
))

export const query = graphql`
  query($tag: String!) {
    allContentfulArticle(filter: { tags: { elemMatch: { name: { eq: $tag } } } }) {
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
          tags {
            name
            color
          }
        }
      }
    }
  }
`
