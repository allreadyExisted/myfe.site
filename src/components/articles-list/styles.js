import styled from 'styled-components'
import Img from 'gatsby-image'
import { ui } from 'ui'
import { rhythm } from 'utils/typography'

const Banner = styled(Img)`
  margin-top: ${rhythm(1 / 2)};
  margin-bottom: 0;
`
export const styles = {
  Banner,
  HeaderLink: ui.Link
}
