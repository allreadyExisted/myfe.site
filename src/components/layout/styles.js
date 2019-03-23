import styled from "styled-components"
import {
  rhythm
} from 'utils/typography'

export const LayoutWrapper = styled.div `
  min-height: 100vh;
  color: var(--text-normal);
  background: var(--bg);
  transition: color .2s ease-out, background .2s ease-out;
`

export const LayoutContainer = styled.div `
  max-width: ${rhythm(24)};
  margin-left: auto;
  margin-right: auto;
  padding: 2.625rem ${rhythm(3 / 4)};
`