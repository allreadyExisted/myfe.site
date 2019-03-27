import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Layout, Header, Bio, Socials } from 'components'
import { rhythm } from 'utils/typography'
import { formatPostDate } from 'utils/helpers'
import { withMappedProps } from 'hocs/with-mapped-props'

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: ${rhythm(1)};
  margin-bottom: ${rhythm(1 / 4)};
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export default withMappedProps(({ articles }) => {
  return (
    <Layout>
      <Wrap>
        <div>
          <Header heading="h1" />
          <Bio />
          {articles.map(article => (
            <article key={article.link}>
              <header>
                <H3>
                  <Link
                    to={article.link}
                    rel="bookmark"
                    style={{
                      boxShadow: 'none'
                    }}
                  >
                    {article.title}
                  </Link>
                </H3>
                <small>{formatPostDate(article.publishedAt, 'ru')}</small>
              </header>
              <section dangerouslySetInnerHTML={{ __html: article.spoiler }} />
            </article>
          ))}
        </div>
        <Socials />
      </Wrap>
    </Layout>
  )
})

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
        }
      }
    }
  }
`
