import React, { useEffect, useState } from 'react'
import { LayoutWrapper, LayoutContainer } from './styles'

export default ({ children }) => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  return (
    <LayoutWrapper>
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  )
}
