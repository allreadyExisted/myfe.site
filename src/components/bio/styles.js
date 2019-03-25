import
styled
from 'styled-components'
import {
  rhythm
} from 'utils/typography'

export const BioWrap = styled.div `
  display: flex;
  margin-bottom: ${rhythm(.5)};
`

export const BioImg = styled.img `
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  border-radius: 50%;
`