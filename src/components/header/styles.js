import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { scale } from 'utils/typography'

const h1Scale = scale(0.75)

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.isMain ? '2.625rem' : '0')};
`

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${h1Scale.fontSize};
  line-height: ${h1Scale.lineHeight};
`

const H3 = styled.h3`
  height: 42;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Montserrat, sans-serif;
  line-height: 2.625rem;
`

const LinkComponent = ({ isMain, ...props }) => <Link {...props} />

const HeaderLink = styled(LinkComponent)`
  color: ${props => (props.isMain ? 'var(--text-title)' : 'var(--main-color)')};
  text-decoration: none;
  box-shadow: none;
`

const linkScale = scale(0.1)

const StyledLink = styled(LinkComponent)`
  font-family: Montserrat, sans-serif;
  font-size: ${linkScale.fontSize};
  line-height: ${linkScale.lineHeight};
  color: var(--title-color);
  text-decoration: none;
  box-shadow: none;
`

export const styles = {
  Wrap,
  H1,
  H3,
  HeaderLink,
  Link: StyledLink
}
