import React from 'react'
import { styles } from './styles'

const { Wrap, H1, H3, StyledLink } = styles

export const Header = ({ heading }) => {
  const isH3 = heading === 'h3'
  const Heading = isH3 ? H3 : H1
  return (
    <Wrap>
      <Heading>
        <StyledLink isH3={isH3} to="/">
          MyFE
        </StyledLink>
      </Heading>
    </Wrap>
  )
}
