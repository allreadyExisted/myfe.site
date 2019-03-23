import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import { withMappedProps } from 'hocs/with-mapped-props'

export default withMappedProps(({ articles }) => {
  return (
    <Layout>
      <article>
        <h1>{articles[0].title}</h1>
        <section dangerouslySetInnerHTML={{ __html: articles[0].content }} />
      </article>
    </Layout>
  )
})

export const query = graphql`
  query($slug: String!) {
    allContentfulArticle(filter: { link: { eq: $slug } }) {
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
