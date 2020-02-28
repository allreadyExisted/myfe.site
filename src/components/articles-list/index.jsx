import React from 'react'
import { formatPostDate } from 'utils/helpers'
import { TagsList } from 'components/tags-list'
import { styles } from './styles'
import { ui } from 'ui'

const { H3 } = ui
const { Banner, HeaderLink } = styles

export const ArticlesList = ({ articles }) =>
  articles.map(article => (
    <article key={article.link}>
      <header>
        <H3>
          <HeaderLink to={`/articles/${article.link}`} rel="bookmark">
            {article.title}
          </HeaderLink>
        </H3>
        <small>{formatPostDate(article.publishedAt, 'ru')}</small>
      </header>
      <section dangerouslySetInnerHTML={{ __html: article.spoiler }} />
      <Banner fluid={article.banner.fluid} alt={article.banner.name} />
      <TagsList type="articles" tags={article.tags} />
    </article>
  ))
