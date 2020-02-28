import React from 'react'
import { TagsList } from 'components/tags-list'
import { styles } from './styles'

const { H3, Article } = styles

export const SnippetsList = ({ snippets }) =>
  snippets.map(snippet => (
    <Article key={snippet.title}>
      <header>
        <H3>{snippet.title}</H3>
      </header>
      <section dangerouslySetInnerHTML={{ __html: snippet.content }} />
      <TagsList type="snippets" tags={snippet.tags} />
    </Article>
  ))
