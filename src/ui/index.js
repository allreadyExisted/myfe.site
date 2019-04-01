import styled from 'styled-components'
import {
  Link
} from 'gatsby'
import {
  rhythm
} from 'utils/typography'

const H3 = styled.h3 `
  font-family: Montserrat, sans-serif;
  font-size: ${rhythm(1)};
  margin-bottom: ${rhythm(1 / 4)};
`

const StyledLink = styled(Link)
`
  box-shadow: none;
`

export const ui = {
  H3,
  Link: StyledLink
}