import React from 'react'

export const withMappedArticlesProps = Component => {
  return props => {
    const {
      data: { allContentfulArticle },
      ...rest
    } = props

    const articles = allContentfulArticle.edges.map(({ node }) => ({
      title: node.title,
      description: node.description,
      spoiler: node.spoiler,
      publishedAt: node.publishedAt,
      banner: {
        fluid: node.banner.fluid,
        name: node.banner.title
      },
      content: node.content.childMarkdownRemark.html,
      link: node.link,
      tags: node.tags
    }))

    const mappedProps = {
      articles,
      ...rest
    }
    return <Component {...mappedProps} />
  }
}

export const withMappedNotesProps = Component => {
  return props => {
    const {
      data: { allContentfulNote },
      ...rest
    } = props

    const notes = allContentfulNote.edges.map(({ node }) => ({
      title: node.title,
      content: node.content.childMarkdownRemark.html
    }))

    const mappedProps = {
      notes,
      ...rest
    }
    return <Component {...mappedProps} />
  }
}

export const withMappedSnippetsProps = Component => {
  return props => {
    const {
      data: { allContentfulSnippet },
      ...rest
    } = props

    const snippets = allContentfulSnippet.edges.map(({ node }) => ({
      title: node.title,
      content: node.content.childMarkdownRemark.html,
      tags: node.tags
    }))

    const mappedProps = {
      snippets,
      ...rest
    }
    return <Component {...mappedProps} />
  }
}
