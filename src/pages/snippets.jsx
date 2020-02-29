import React from 'react'
import { graphql } from 'gatsby'
import { CommonLayout, SnippetsList } from 'components'
import { withMappedSnippetsProps } from 'hocs/with-mapped-props'

export default withMappedSnippetsProps(({ snippets }) => (
  <CommonLayout title="Мои cниппеты" description="HTML, CSS, JavaScript, TypeScript сниппеты" slug="snippets">
    <h1>Сниппеты</h1>
    <SnippetsList snippets={snippets} />
  </CommonLayout>
))

export const query = graphql`
  {
    allContentfulSnippet(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          tags {
            name
            color
          }
        }
      }
    }
  }
`
