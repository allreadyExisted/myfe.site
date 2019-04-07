import {
  graphql
} from 'gatsby'

export const query = graphql `
  fragment NodeFragment on ContentfulArticle {
    title
    description
    spoiler
    publishedAt
    banner {
      fluid(maxWidth: 630) {
        ...GatsbyContentfulFluid
      }
      title
    }
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
`