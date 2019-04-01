import React from 'react'
import { styles } from './styles'

const { Wrap, H1, H3, HeaderLink, Link } = styles

export const Header = ({ isMain }) => {
  const Heading = isMain ? H1 : H3
  return (
    <Wrap isMain={isMain}>
      <Heading>
        <HeaderLink isMain={isMain} to="/">
          MyFE
        </HeaderLink>
      </Heading>
      {isMain && <Link to="/notes">Заметки</Link>}
    </Wrap>
  )
}
