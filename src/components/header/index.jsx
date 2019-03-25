import React from 'react'
import { Link } from 'gatsby'
import { HeaderWrap, HeaderH1, HeaderH3 } from './styles'

export const Header = ({ heading }) => {
  const isH3 = heading === 'h3'
  const Heading = isH3 ? HeaderH1 : HeaderH3
  return (
    <HeaderWrap>
      <Heading>
        <Link
          style={{
            color: isH3 ? 'var(--lime)' : 'var(--text-title)',
            textDecoration: 'none',
            boxShadow: 'none'
          }}
          to="/"
        >
          MyFE
        </Link>
      </Heading>
    </HeaderWrap>
  )
}
