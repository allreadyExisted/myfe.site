import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { styles } from './styles'

const { Wrap } = styles

export const Bio = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { name: { eq: "my-photo" } }) {
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
        <img src={publicURL} alt="alreadyExisted" />
        <p style={{ maxWidth: 320 }}>
          Personale blog by{' '}
          <a href="https://www.linkedin.com/in/vitaliy-polyanskiy-6930b515b/" target="_blank">
            Vitaliy Polynskiy
          </a>
          . Архив магии и ужасов в JS😀
        </p>
      </Wrap>
    )}
  />
)
