import React from 'react'

export const withMappedProps = Component => {
  return props => {
    const {
      data: { allContentfulArticle },
      ...rest
    } = props

    const articles = allContentfulArticle.edges.map(({ node }) => ({
      title: node.title,
      spoiler: node.spoiler,
      publishedAt: node.publishedAt,
      content: node.content.childMarkdownRemark.html,
      link: node.link
    }))

    const mappedProps = {
      articles,
      ...rest
    }
    return <Component {...mappedProps} />
  }
}
