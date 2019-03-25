import {
  scale
} from 'utils/typography'
import styled from 'styled-components'

const {
  fontSize,
  lineHeight
} = scale(0.75)

export const HeaderWrap = styled.header `
  margin-bottom: 2.625rem;
`

export const HeaderH1 = styled.h1 `
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`

export const HeaderH3 = styled.h3 `
  height: 42;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Montserrat, sans-serif;
  line-height: 2.625rem;
`