import React from 'react'
import { graphql } from 'gatsby'
import { CommonLayout, JustComments } from 'components'
import { withMappedArticlesProps } from 'hocs/with-mapped-props'

export default withMappedArticlesProps(({ articles: [article] }) => (
  <CommonLayout article={article}>
    <article>
      <h1>{article.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
    <JustComments />
  </CommonLayout>
))

export const query = graphql`
  query($slug: String!) {
    allContentfulArticle(filter: { link: { eq: $slug } }) {
      edges {
        node {
          ...NodeFragment
        }
      }
    }
  }
`
