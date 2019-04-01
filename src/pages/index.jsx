import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Layout, Header, Bio, Socials, SEO, ArticlesList } from 'components'
import { withMappedArticlesProps } from 'hocs/with-mapped-props'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export default withMappedArticlesProps(({ articles }) => (
  <Layout>
    <Wrap>
      <div>
        <SEO />
        <Header isMain />
        <Bio />
        <ArticlesList articles={articles} />
      </div>
      <Socials />
    </Wrap>
  </Layout>
))

export const query = graphql`
  {
    allContentfulArticle {
      edges {
        node {
          title
          spoiler
          publishedAt
          content {
            childMarkdownRemark {
              html
            }
          }
          link
          tags {
            name
            color
          }
        }
      }
    }
  }
`
