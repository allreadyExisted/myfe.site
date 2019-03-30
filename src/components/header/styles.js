import { scale } from 'utils/typography'
import styled from 'styled-components'
import { Link } from 'gatsby'
import React from 'react'

const { fontSize, lineHeight } = scale(0.75)

const Wrap = styled.header`
  margin-bottom: ${props => (props.isH3 ? '0' : '2.625rem')};
`

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`

const H3 = styled.h3`
  height: 42;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Montserrat, sans-serif;
  line-height: 2.625rem;
`

const StyledLink = styled(({ isH3, ...props }) => <Link {...props} />)`
  color: ${props => (props.isH3 ? 'var(--lime)' : 'var(--text-title)')};
  text-decoration: none;
  box-shadow: none;
`

export const styles = {
  Wrap,
  H1,
  H3,
  StyledLink
}
