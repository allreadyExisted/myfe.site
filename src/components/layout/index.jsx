import React, { useEffect, useState } from 'react'
import { styles } from './styles'

const { Wrapper, Container } = styles

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
