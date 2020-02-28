import React from 'react'
import { styles } from './styles'

const { Tags, TagsTitle, TagLink } = styles

export const TagsList = ({ tags, type }) =>
  tags ? (
    <Tags>
      <TagsTitle>Метки:</TagsTitle>
      {tags.map(tag => (
        <TagLink key={tag.name} to={`${type}/tags/${tag.name.toLowerCase()}`} color={tag.color}>
          {tag.name}
        </TagLink>
      ))}
    </Tags>
  ) : null
