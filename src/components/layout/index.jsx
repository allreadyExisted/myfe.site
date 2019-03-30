import React from 'react'
import { styles } from './styles'

const { Wrapper, Container } = styles

export const Layout = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
)
