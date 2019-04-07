import React from 'react'
import { formatPostDate } from 'utils/helpers'
import { styles } from './styles'
import { ui } from 'ui'

const { H3 } = ui
const { Banner, Tags, TagsTitle, HeaderLink, TagLink } = styles

export const ArticlesList = ({ articles }) =>
  articles.map(article => (
    <article key={article.link}>
      <header>
        <H3>
          <HeaderLink to={article.link} rel="bookmark">
            {article.title}
          </HeaderLink>
        </H3>
        <small>{formatPostDate(article.publishedAt, 'ru')}</small>
      </header>
      <section dangerouslySetInnerHTML={{ __html: article.spoiler }} />
      <Banner fluid={article.banner.fluid} alt={article.banner.name} />
      {article.tags && (
        <Tags>
          <TagsTitle>Метки:</TagsTitle>
          {article.tags.map(tag => (
            <TagLink key={tag.name} to={`/tags/${tag.name.toLowerCase()}`} color={tag.color}>
              {tag.name}
            </TagLink>
          ))}
        </Tags>
      )}
    </article>
  ))
