import React from 'react'
import { withMappedNotesProps } from 'hocs/with-mapped-props'
import { graphql } from 'gatsby'
import { CommonLayout, NotesList } from 'components'

export default withMappedNotesProps(({ notes }) => (
  <CommonLayout>
    <h1>Заметки</h1>
    <NotesList notes={notes} />
  </CommonLayout>
))

export const query = graphql`
  {
    allContentfulNote {
      edges {
        node {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
