import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getPublicUrl } from 'utils/helpers'
import { GH_PERSONAL_URL, GH_TEMPLATES_URL } from 'utils/constants'
import { styles } from './styles'

const { Wrap, P, GithubIcon, CVIcon } = styles

const query = graphql`
  {
    allFile(filter: { name: { eq: "JS_resume" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export const Socials = () => {
  const publicURL = getPublicUrl(useStaticQuery(query))
  const commonProps = {
    target: '_blank',
    rel: 'noopener noreferrer'
  }
  return (
    <Wrap>
      <P>
        <GithubIcon />
        <a href={GH_PERSONAL_URL} {...commonProps}>
          alreadyExisted
        </a>
      </P>
      <P>
        <GithubIcon />
        <a href={GH_TEMPLATES_URL} {...commonProps}>
          easy-boilerplates
        </a>
      </P>
      <P>
        <CVIcon />
        <a href={publicURL} {...commonProps}>
          My CV
        </a>
      </P>
    </Wrap>
  )
}
