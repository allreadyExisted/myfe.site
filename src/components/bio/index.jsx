import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getPublicUrl } from 'utils/helpers'
import { IN_URL } from 'utils/constants'
import { styles } from './styles'

const { Wrap } = styles

const query = graphql`
  {
    allFile(filter: { name: { eq: "my-photo" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export const Bio = () => {
  const publicURL = getPublicUrl(useStaticQuery(query))
  return (
    <Wrap>
      <img src={publicURL} alt="alreadyExisted" />
      <p style={{ maxWidth: 320 }}>
        Personale blog by{' '}
        <a href={IN_URL} target="_blank">
          Vitaliy Polynskiy
        </a>
        . Архив магии и ужасов в JS😀
      </p>
    </Wrap>
  )
}
