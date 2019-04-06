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

export const CommonLayout = ({ article, title, description, children }) => {
  const seoProps = article
    ? {
        title: article.title,
        description: article.description,
        slug: article.link
      }
    : {
        title,
        description
      }
  return (
    <Layout>
      <SEO {...seoProps} />
      <Header />
      {children}
    </Layout>
  )
}
