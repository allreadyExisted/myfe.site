import React from 'react'
import { styles } from './styles'
import { graphql, StaticQuery } from 'gatsby'

const { Wrap, P, GithubIcon, CVIcon } = styles

export const Socials = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { name: { eq: "JS_resume" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={({
      allFile: {
        edges: [
          {
            node: { publicURL }
          }
        ]
      }
    }) => (
      <Wrap>
        <P>
          <GithubIcon />
          <a href="https://github.com/alreadyExisted" target="_blank">
            alreadyExisted
          </a>
        </P>
        <P>
          <GithubIcon />
          <a href="https://github.com/easy-boilerplates" target="_blank">
            easy-boilerplates
          </a>
        </P>
        <P>
          <CVIcon />
          <a href={publicURL} download>
            My CV
          </a>
        </P>
      </Wrap>
    )}
  />
)
