import styled from "styled-components"
import {
  rhythm
} from 'utils/typography'

export const LayoutWrapper = styled.div `
  max-width: ${rhythm(36)};
  min-height: calc(100vh - 5.25rem);
  margin-top: 2.625rem;
  margin-bottom: 2.625rem;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-normal);
  background: #fff;
  border-radius: .5rem;
  transition: color .2s ease-out, background .2s ease-out;
`

export const LayoutContainer = styled.div `
  max-width: ${rhythm(24)};
  margin-left: auto;
  margin-right: auto;
  padding: 2.625rem ${rhythm(3 / 4)};
`