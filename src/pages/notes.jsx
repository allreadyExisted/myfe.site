import React from 'react'
import { withMappedNotesProps } from 'hocs/with-mapped-props'
import { graphql } from 'gatsby'
import { CommonLayout, NotesList } from 'components'

export default withMappedNotesProps(({ notes }) => (
  <CommonLayout title="Мои заметки по JavaScript" description="Баги/фичи с которыми я сталкиваюсь при работе с JS.">
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
