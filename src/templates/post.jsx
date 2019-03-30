import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Header, SEO } from 'components'
import { withMappedProps } from 'hocs/with-mapped-props'

export default withMappedProps(({ articles }) => (
  <Layout>
    <SEO title={articles[0].title} description={articles[0].spoiler} slug={articles[0].link} />
    <Header heading="h3" />
    <article>
      <h1>{articles[0].title}</h1>
      <section dangerouslySetInnerHTML={{ __html: articles[0].content }} />
    </article>
  </Layout>
))

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
