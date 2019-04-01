import React from 'react'
import { SEO } from 'components/seo'
import { Header } from 'components/header'
import { styles } from './styles'

const { Wrapper, Container } = styles

export const Layout = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
)

export const CommonLayout = ({ article, children }) => {
  const seoProps = article
    ? {
        title: article.title,
        description: article.spoiler,
        slug: article.link
      }
    : {}
  return (
    <Layout>
      <SEO {...seoProps} />
      <Header />
      {children}
    </Layout>
  )
}
