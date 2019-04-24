import React, { useEffect } from 'react'
import firebase from '@firebase/app'
import '@firebase/messaging'
import { SEO } from 'components/seo'
import { Header } from 'components/header'
import { styles } from './styles'

const { Wrapper, Container } = styles

export const Layout = ({ children }) => {
  useEffect(() => {
    firebase.initializeApp({
      messagingSenderId: '823305594294'
    })

    try {
      const messaging = firebase.messaging()
      messaging.requestPermission().then(() => messaging.getToken().then(token => console.log('token', token)))
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

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
