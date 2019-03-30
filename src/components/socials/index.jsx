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
  return (
    <Wrap>
      <P>
        <GithubIcon />
        <a href={GH_PERSONAL_URL} target="_blank">
          alreadyExisted
        </a>
      </P>
      <P>
        <GithubIcon />
        <a href={GH_TEMPLATES_URL} target="_blank">
          easy-boilerplates
        </a>
      </P>
      <P>
        <CVIcon />
        <a href={publicURL} target="_blank">
          My CV
        </a>
      </P>
    </Wrap>
  )
}
