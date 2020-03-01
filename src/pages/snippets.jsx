import React from 'react'
import { graphql } from 'gatsby'
import { CommonLayout, SnippetsList, TagsList } from 'components'
import { withMappedSnippetsProps } from 'hocs/with-mapped-props'

export default withMappedSnippetsProps(({ snippets, tags }) => (
  <CommonLayout title="Мои cниппеты" description="HTML, CSS, JavaScript, TypeScript сниппеты" slug="snippets">
    <h1>Сниппеты</h1>
    <TagsList type="snippets" tags={tags} />
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
            id
            name
            color
          }
        }
      }
    }
  }
`
