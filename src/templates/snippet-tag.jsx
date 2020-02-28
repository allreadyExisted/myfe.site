import React from 'react'
import { graphql } from 'gatsby'
import { CommonLayout, SnippetsList } from 'components'
import { withMappedSnippetsProps } from 'hocs/with-mapped-props'

export default withMappedSnippetsProps(({ snippets, pathContext }) => (
  <CommonLayout
    title={`Сниппеты по тегу ${pathContext.tag}`}
    description={`Перечень сниппетов на тему ${pathContext.tag}`}
  >
    <h1>Сниппеты по метке: {pathContext.tag}</h1>
    <SnippetsList snippets={snippets} />
  </CommonLayout>
))

export const query = graphql`
  query($tag: String!) {
    allContentfulSnippet(filter: { tags: { elemMatch: { name: { eq: $tag } } } }) {
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
