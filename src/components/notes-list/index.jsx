import React from 'react'
import { styles } from './styles'

const { H3, Article } = styles

export const NotesList = ({ notes }) =>
  notes.map(note => (
    <Article key={note.title}>
      <header>
        <H3>{note.title}</H3>
      </header>
      <section dangerouslySetInnerHTML={{ __html: note.content }} />
    </Article>
  ))
